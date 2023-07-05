import { ChangeEvent, FC, KeyboardEvent, MouseEvent, useRef } from 'react'

import classnames from 'classnames'

import styles from './favoriteStare.module.scss'

import { ProductType } from '@/api/products/types.ts'
import { StarIcon } from '@/components/ui/svg/starIcon.tsx'
import {
  selectAddFavorite,
  selectIsFavorite,
  selectRemoveFavorite,
  useFavoriteStore,
} from '@/store/useFavoritVacanciesStore.ts'

type PropsType = {
  item: ProductType
  className?: string
}

export const FavoriteStare: FC<PropsType> = ({ item, className }) => {
  const ref = useRef<HTMLInputElement>(null)

  const addVacancy = useFavoriteStore(selectAddFavorite)
  const removeVacancy = useFavoriteStore(selectRemoveFavorite)

  const inFavorite = useFavoriteStore(selectIsFavorite(item.id))

  const onKeyStar = (e: ChangeEvent | MouseEvent | KeyboardEvent): void => {
    if (ref.current) {
      if (ref.current.checked) {
        removeVacancy(item.id)
      } else {
        addVacancy(item)
      }
      e.stopPropagation()
    }
  }

  return (
    <div
      aria-hidden
      onClick={onKeyStar}
      onKeyDown={e => e.key === 'Enter' && onKeyStar(e)}
      className={classnames(className, styles.wrapper)}
      role="button"
      tabIndex={0}
    >
      <input
        type="checkbox"
        checked={inFavorite}
        onChange={onKeyStar}
        className={styles.input}
        tabIndex={-1}
        ref={ref}
      />
      <StarIcon className={classnames(styles.star, { [styles.favorite]: inFavorite })} />
    </div>
  )
}
