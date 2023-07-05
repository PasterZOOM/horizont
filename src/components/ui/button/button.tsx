import { ComponentPropsWithoutRef, ElementType } from 'react'

import classnames from 'classnames'

import styles from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>
export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { fullWidth, className, as: Component = 'button', ...rest } = props

  return (
    <Component
      className={classnames(styles.button, { [styles.fullWidth]: fullWidth }, className)}
      {...rest}
    />
  )
}
