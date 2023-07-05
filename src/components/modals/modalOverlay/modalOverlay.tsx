import {
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { createPortal } from 'react-dom'

import style from './modalOverlay.module.scss'

type PropsType = {
  isOpen: boolean
  children: ReactNode
  onClose?: () => void
  modalContainer?: string
}
export const ModalOverlay: FC<PropsType> = ({
  children,
  onClose,
  isOpen,
  modalContainer = '#modals',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [container, setContainer] = useState<HTMLElement | null>(null)

  const onEscape: KeyboardEventHandler<HTMLDivElement> = e => {
    if (e.key === 'Escape' && onClose) {
      onClose()
      e.stopPropagation()
    }
  }

  const handleClick = useCallback(
    (e: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLElement>) => {
      e.stopPropagation()

      if (e.target === containerRef.current && onClose) {
        onClose.call(null)
      }
    },
    [onClose]
  )

  useEffect(() => {
    setContainer(document.querySelector(modalContainer) as HTMLElement)
  }, [])

  useEffect(() => {
    const length = container?.childNodes.length || 0
    const nextScript = document.querySelector('#__next')

    if (containerRef.current) {
      containerRef.current.focus()
      nextScript?.setAttribute('inert', '')
    }

    if (length !== 0) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    if (length > 1) {
      container?.children[length - 2]?.setAttribute('inert', 'true')
    }

    return () => {
      if (length === 1) {
        document.body.style.overflow = 'auto'
        nextScript?.removeAttribute('inert')
      }
      const lastChild = container?.lastElementChild as HTMLElement

      lastChild?.removeAttribute('inert')
      lastChild?.focus()
    }
  }, [isOpen, container])

  if (!container || !children || !isOpen) return null

  return (
    <>
      {createPortal(
        <div
          onKeyDown={onEscape}
          aria-hidden
          tabIndex={-1}
          ref={containerRef}
          onClick={handleClick}
          className={style.overlay}
        >
          {children}
        </div>,
        container
      )}
    </>
  )
}
