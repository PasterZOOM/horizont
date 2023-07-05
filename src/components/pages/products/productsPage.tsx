import { FC } from 'react'

import { Products } from '@/components/pages/products/products'
import { useGetProducts } from '@/hooks/useGetProducts.ts'

export const ProductsPage: FC = () => {
  const { data, isLoading, isError, error } = useGetProducts()

  if (isLoading) return <>Loading...</>
  if (isError) return <>{error?.toString()}</>
  if (!data) return <>Not found</>

  return (
    <>
      <Products products={data} />
    </>
  )
}
