import medalCooper from '@/assets/medal-cooper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'
import { getRanking } from '@/http/api'
import Image from 'next/image'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5 ">
      <h2 className="text-gray-200 font-heading font-semibold leading-none text-xl ">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        {ranking.map(({ id, name, score }, index) => {
          const rankingPosition = index + 1
          return (
            <div
              key={id}
              className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span> |{' '}
                {name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {score}
              </span>
              {rankingPosition === 1 && (
                <Image
                  src={medalGold}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  src={medalSilver}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  src={medalCooper}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
