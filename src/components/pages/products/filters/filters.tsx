import { FC } from 'react'

import { useSearchParams } from 'react-router-dom'

import style from './filters.module.scss'

import { CategoryButton } from '@/components/pages/products/filters/categoryButton'
import { Button } from '@/components/ui/button'
import { useGetCategories } from '@/hooks/query/useGetCategories.ts'
import { useGetProducts } from '@/hooks/query/useGetProducts.ts'
import { useWindowSize } from '@/hooks/useWindowSize.ts'

export const Filters: FC = () => {
  const { data } = useGetCategories()
  const { width } = useWindowSize()
  const [_, setParams] = useSearchParams()
  const { refetch } = useGetProducts({ enabled: false })

  const clear = () => {
    setParams({})
    requestAnimationFrame(async () => await refetch())
  }

  return (
    <div className={style.main}>
      <Button fullWidth={width < 450} onClick={clear}>
        ALL
      </Button>
      {data && data.map(category => <CategoryButton key={category.id} category={category} />)}
    </div>
  )
}
