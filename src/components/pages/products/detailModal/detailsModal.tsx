import { FC } from 'react'

import { NavLink } from 'react-router-dom'

import styles from './detailsModal.module.scss'

import { ProductType } from '@/api/products/types.ts'
import { ModalLayout } from '@/components/modals/modalLayout'
import { FavoriteIcon } from '@/components/ui/favoriteStare'
import { Typography } from '@/components/ui/typography'
import { useWindowSize } from '@/hooks/useWindowSize.ts'

type PropsType = {
  product: ProductType
  closeModal: () => void
  isOpen: boolean
}

export const DetailsModal: FC<PropsType> = ({ isOpen, closeModal, product }) => {
  const { isMobile } = useWindowSize()

  return (
    <ModalLayout isOpen={isOpen} closeModal={closeModal}>
      <div className={styles.body}>
        <FavoriteIcon item={product} className={styles.favoriteIcon} />
        <div>
          <img src={product.image} alt={product.description} width={isMobile ? 200 : 300} />
        </div>
        <Typography variant={'h2'} className={styles.title}>
          {product.title}
        </Typography>
        <Typography variant={'body'} className={styles.description}>
          {product.description}
        </Typography>
        <NavLink to={`/product/${product.id}`} className={styles.moreLink}>
          More...
        </NavLink>
      </div>
    </ModalLayout>
  )
}
