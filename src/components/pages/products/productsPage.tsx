import { FC } from 'react'

import styles from './productsPage.module.scss'

import { Filters } from '@/components/pages/products/filters'
import { Products } from '@/components/pages/products/products'
import { Loader } from '@/components/ui/loader/loader.tsx'
import { Typography } from '@/components/ui/typography'
import { useGetProducts } from '@/hooks/query/useGetProducts.ts'

export const ProductsPage: FC = () => {
  const { data, isLoading } = useGetProducts()

  if (isLoading) return <Loader />
  if (!data) return <>Error</>

  return (
    <>
      <Typography variant={'large'} className={styles.title}>
        Main Page
      </Typography>
      <Filters />
      <Products products={data} />
      <div id="modals" />
    </>
  )
}
