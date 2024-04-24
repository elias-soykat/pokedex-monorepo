import type { TPokemonDetails } from '@repo/types'
import { useEffect, useState } from 'react'
import Button from '../common/button'
import PokemonTypeTagComponent, { pokemonTypeStyleVariants } from './type'

export default function PokemonDetailCardComponent({
  details,
  onBackClick,
}: {
  details: TPokemonDetails
  onBackClick?: () => void
}): JSX.Element {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setWidth(450)
    }, 1000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <div className="bg-slate-400/30 dark:bg-slate-800/30 mb-10 backdrop-blur-lg border shadow-md dark:border-slate-500/30 border-slate-400/30 rounded-3xl w-72 sm:w-80 xl:w-[22rem] text-slate-600 dark:text-white flex flex-col items-center gap-2 relative">
      <div
        className={`w-full group relative h-40 flex justify-center z-0 ${pokemonTypeStyleVariants[details.types[0].name]} !bg-opacity-30 rounded-t-3xl`}
      >
        <div className="z-0 text-white/10 absolute bottom-10 left-[1/2] text-6xl uppercase text-center w-full align-middle overflow-hidden">
          {details.name}
        </div>
        <img
          alt={details.name}
          className="-translate-y-24 group-hover:scale-105 duration-300 w-52 h-52"
          height={96}
          src={details.imgSrc ?? ''}
          width={96}
        />
        {onBackClick ? (
          <Button
            className="absolute left-4 top-4 z-10"
            color="light"
            onClick={() => {
              onBackClick()
            }}
            rounded="full"
          >
            Back
          </Button>
        ) : null}
        <Button className="absolute right-4 bottom-4 px-2.5 text-sm z-10" color="dark" rounded="full">
          #{details.paddedId}
        </Button>
      </div>
      <div className="flex flex-col items-center gap-2 w-full p-5 md:px-8 lg:px-6 relative">
        <img
          alt="pokeball"
          className="absolute opacity-15 dark:opacity-5 w-full h-full top-0 left-0 z-0"
          src="/pokeball.svg"
        />
        <div className="grid grid-cols-4 gap-y-1 w-full z-10">
          <div className="col-span-4 flex items-center gap-1 justify-center">
            {details.types.map((type) => (
              <PokemonTypeTagComponent key={type.name} type={type.name} />
            ))}
          </div>
          <div className="col-span-3 capitalize mt-2 ml-6 text-gray-100 text-lg py-2 flex justify-center items-center">
            {details.name}
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-full z-10 gap-1">
          {details.stats.map((stat) => (
            <div className="flex items-center" key={stat.name}>
              <div className="font-semibold text-sm leading-8 w-8/12 capitalize">{stat.name}</div>
              <div className="w-4/6 relative">
                {stat.name === 'total' ? (
                  stat.value
                ) : (
                  <div className="bg-white dark:bg-slate-900 w-full h-2 rounded-full">
                    <div
                      className="bg-slate-700 dark:bg-slate-300 w-0 h-full rounded-[1rem] transition-width duration-700 ease-in-out"
                      style={{ width: `${(width * stat.value) / stat.max}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
