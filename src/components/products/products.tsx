import { FC } from 'react'

import { useGetCards } from '../../hooks/useGetCards.ts'

export const Products: FC = () => {
  const { data } = useGetCards()

  return (
    <>
      {data?.map(el => (
        <div key={el.id}>
          <img src={el.image} alt={el.description} width={200} />
        </div>
      ))}
    </>
  )
}
