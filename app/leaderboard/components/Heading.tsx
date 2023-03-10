'use client'
import { Mulish } from '@next/font/google'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
import LeaderboardLanguages from '@/app/leaderboard/leaderboard'

const h1Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})

const Heading = () => {
  const language = useFieldsByLanguage(LeaderboardLanguages)
  return (
    <h1 className={`${h1Font.className} text-center text-7xl uusm:text-6xl text-white vsm:text-[2.85rem] uusm:text-4xl`}>
      {language.leaderboard || LeaderboardLanguages.eng.leaderboard}
    </h1>
  )
}

export default Heading
