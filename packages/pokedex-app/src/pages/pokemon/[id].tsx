'use client'

import { ArrowBackOutlined } from '@mui/icons-material'
import { Button, CircularProgress } from '@mui/material'
import PokemonDetailCardComponent from '@repo/components/pokemon/pokemon-detail-card'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { fetchPokemonDetail } from '@/store/pokemon/thunk'
import useAppSelector from '@/hooks/use-app-selector'
import useAppDispatch from '@/hooks/use-app-dispatch'

export default function PokemonPage() {
  const router = useRouter()
  const { id: _id } = router.query
  const id = _id instanceof Array ? Number(_id[0]) : Number(_id)
  const { pokemons } = useAppSelector((state) => state.pokemon)
  const dispatch = useAppDispatch()

  const details = useMemo(() => {
    return !id ? undefined : pokemons[id]
  }, [pokemons, id])

  useEffect(() => {
    if (!Object.keys(pokemons).includes(String(id))) dispatch(fetchPokemonDetail(id))
  }, [id, pokemons, dispatch])

  const onBackClick = () => {
    router.push('/')
  }
  return (
    <div className="flex flex-col">
      <Button
        className="items-center inline-flex w-24 border justify-start gap-3 ml-8 mt-4"
        onClick={onBackClick}
        startIcon={<ArrowBackOutlined className="ml-1" />}
        type="button"
      >
        <span className="-ml-1">Back</span>
      </Button>
      {!details ? (
        <div className="m-auto">
          <CircularProgress />
        </div>
      ) : (
        <div className="mx-auto mt-24 lg:mt-28 xl:mt-32">
          <PokemonDetailCardComponent details={details} />
        </div>
      )}
    </div>
  )
}
