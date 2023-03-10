import prisma from '@/prisma/client'

export const selectByCorrectAnswered = async (count: number = 5) => {
  const users = await prisma.user.findMany({
    orderBy: [
      {
        correctAnswered: 'desc',
      },
    ],
    take: count,
  })
  return users
}
