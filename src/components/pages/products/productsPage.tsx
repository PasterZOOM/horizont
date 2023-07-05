import { FC } from 'react'

import { Products } from '@/components/pages/products/products'
import { useGetCards } from '@/hooks/useGetCards.ts'

export const ProductsPage: FC = () => {
  const { data, isLoading, isError } = useGetCards()

  if (isLoading) return <>Loading...</>
  if (isError) return <>Some error...</>
  if (!data) return <>Not found</>

  return (
    <>
      <Products products={data} />
    </>
  )
}
