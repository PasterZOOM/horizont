import { FC } from 'react'

import style from './products.module.scss'

import { ProductType } from '@/api/products/types.ts'
import { Card } from '@/components/ui/card'

type PropsType = {
  products: ProductType[]
}

export const Products: FC<PropsType> = ({ products }) => {
  return (
    <div className={style.container}>
      {products.map(el => (
        <Card
          key={el.id}
          item={{ title: el.title, description: el.description, image: el.image }}
        />
      ))}
    </div>
  )
}
