import { FC, memo } from 'react'

import styles from './card.module.scss'

import { ProductType } from '@/api/products/types.ts'
import { DetailsModal } from '@/components/pages/products/detailModal'
import { FavoriteIcon } from '@/components/ui/favoriteStare'
import { useModal } from '@/hooks/useModal.ts'

type PropsType = {
  product: ProductType
}

const Card: FC<PropsType> = ({ product }) => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div className={styles.main} onClick={openModal}>
      <div className={styles.image} style={{ backgroundImage: `url(${product.image})` }} />
      <DetailsModal product={product} isOpen={isOpen} closeModal={closeModal} />
      <FavoriteIcon item={product} className={styles.favoriteIcon} />
    </div>
  )
}

const Memo = memo(Card)

export { Memo as Card }
