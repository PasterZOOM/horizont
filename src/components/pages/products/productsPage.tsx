import { FC } from 'react'

import { Filters } from '@/components/pages/products/filters'
import { Products } from '@/components/pages/products/products'
import { useGetProducts } from '@/hooks/query/useGetProducts.ts'
import { productsMock } from '@/mocks/products.ts'

export const ProductsPage: FC = () => {
  const { data, isLoading } = useGetProducts()

  if (isLoading) return <>Loading...</>

  return (
    <>
      <Filters />
      <Products products={data ?? productsMock} />
    </>
  )
}
