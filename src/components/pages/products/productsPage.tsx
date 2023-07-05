import { FC } from 'react'

import { Filters } from '@/components/pages/products/filters'
import { Products } from '@/components/pages/products/products'
import { useGetProducts } from '@/hooks/query/useGetProducts.ts'

export const ProductsPage: FC = () => {
  const { data, isLoading, isError, error } = useGetProducts()

  if (isLoading) return <>Loading...</>
  if (isError) return <>{error?.toString()}</>
  if (!data) return <>Not found</>

  return (
    <>
      <Filters />
      <Products products={data} />
    </>
  )
}
