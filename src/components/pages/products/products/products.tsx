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
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}
