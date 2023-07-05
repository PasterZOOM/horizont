import { FC, memo } from 'react'

import style from './card.module.scss'

import { ProductType } from '@/api/products/types.ts'
import { DetailsModal } from '@/components/pages/products/detailModal'
import { useModal } from '@/hooks/useModal.ts'

type PropsType = {
  product: ProductType
}

const Card: FC<PropsType> = ({ product }) => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div className={style.main}>
      <div
        onClick={openModal}
        className={style.image}
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <DetailsModal product={product} isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

const Memo = memo(Card)

export { Memo as Card }
