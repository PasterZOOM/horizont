import { FC, ReactNode } from 'react'

import style from './modalLayout.module.scss'

import { ModalOverlay } from '@/components/modals/modalOverlay'
import { CloseIcon } from '@/components/ui/svg/closeIcon.tsx'

type PropsType = {
  children: ReactNode
  isOpen: boolean
  closeModal: () => void
}

export const ModalLayout: FC<PropsType> = ({ children, closeModal, isOpen }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClose={closeModal}>
      <div className={style.layout}>
        <CloseIcon type="button" onClick={closeModal} className={style.closeButton} />
        {children}
      </div>
    </ModalOverlay>
  )
}
