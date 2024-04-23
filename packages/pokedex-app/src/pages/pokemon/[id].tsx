'use client'

import { ChevronLeftRounded } from '@mui/icons-material'
import { CircularProgress, IconButton, Typography } from '@mui/material'
import PokemonDetailCardComponent from '@repo/components/pokemon/pokemon-detail-card'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import useAppDispatch from '@/hooks/use-app-dispatch'
import useAppSelector from '@/hooks/use-app-selector'
import { fetchPokemonDetail } from '@/store/pokemon/thunk'

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
    <div className="flex-1 flex flex-col p-4">
      <div className="flex items-center gap-4">
        <IconButton onClick={onBackClick}>
          <ChevronLeftRounded />
        </IconButton>
        <Typography>Back</Typography>
      </div>
      {!details ? (
        <div className="m-auto">
          <CircularProgress />
        </div>
      ) : (
        <div className="mx-auto mt-32">
          <PokemonDetailCardComponent details={details} />
        </div>
      )}
    </div>
  )
}
