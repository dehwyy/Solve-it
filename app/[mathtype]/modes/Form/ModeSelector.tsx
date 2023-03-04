import { FC } from 'react'
import Link from 'next/link'
import { Modes } from '@/types/export'

interface IProps {
  currentPage: Modes
}

const chooseOptions = [
  { content: 'Speeeed', href: 'speed' },
  { content: 'Harddd', href: 'hard' },
]
// I should rewrite this blocks to btn to make interface more 同じ
const ModeSelector: FC<IProps> = ({ currentPage }) => {
  return (
    <div className="min-w-screen mx-auto flex-auto usm:flex-col usm:gap-y-2 usm:border-b-4 usm:pb-2 usm:border-[#444444] flex gap-x-5 px-5 select-none">
      {chooseOptions.map((option, i) => (
        <Link href={option.href} key={i} className="flex-auto ">
          <div
            className={
              (currentPage === option.href && 'bg-[#515151] ') +
              'select-none text-xl bg-[#333333] text-white px-5 py-2 rounded border-black border-2 cursor-pointer text-center'
            }>
            {option.content}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ModeSelector
