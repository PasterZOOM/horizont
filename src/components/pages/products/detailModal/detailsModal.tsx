import { FC } from 'react'

import style from './detailsModal.module.scss'

import { ProductType } from '@/api/products/types.ts'
import { ModalLayout } from '@/components/modals/modalLayout'
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
      <div className={style.body}>
        <div>
          <img src={product.image} alt={product.description} width={isMobile ? 200 : 300} />
        </div>
        <Typography variant={'h2'} className={style.title}>
          {product.title}
        </Typography>
        <Typography variant={'body'} className={style.description}>
          {product.description}
        </Typography>
      </div>
    </ModalLayout>
  )
}
