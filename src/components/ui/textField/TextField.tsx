import { ComponentPropsWithoutRef, forwardRef, Ref, RefObject, useMemo, useRef } from 'react'

import { v1 } from 'uuid'

import styles from './textField.module.scss'

export type PropsType = {
  label?: string
  errorMessage?: string
} & ComponentPropsWithoutRef<'textarea'>

const TextField = (
  { id, value, label, errorMessage, ...restProps }: PropsType,
  r: Ref<HTMLTextAreaElement>
) => {
  const innerRef = useRef<HTMLTextAreaElement>(null)
  const innerId = useMemo(() => v1(), [])

  const ref = (r as RefObject<HTMLTextAreaElement>) ?? innerRef
  const _id = id ?? innerId

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={_id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea ref={ref} value={value} id={_id} {...restProps} className={styles.area}></textarea>
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  )
}
const ForwardRef = forwardRef(TextField)

export { ForwardRef as TextField }
