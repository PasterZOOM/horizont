import { FC } from 'react'

import { useSearchParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useGetProducts } from '@/hooks/query/useGetProducts.ts'
import { useWindowSize } from '@/hooks/useWindowSize.ts'

type PropsType = {
  category: CategoryType
}

export const CategoryButton: FC<PropsType> = ({ category }) => {
  const [params, setParams] = useSearchParams()
  const { refetch } = useGetProducts({ enabled: false })
  const { width } = useWindowSize()

  const onButtonClick = async () => {
    setParams({ ...params, categories: category.value })
    requestAnimationFrame(async () => await refetch())
  }

  return (
    <Button onClick={onButtonClick} fullWidth={width < 450}>
      {category.title}
    </Button>
  )
}
