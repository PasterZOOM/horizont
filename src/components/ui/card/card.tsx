import { FC, memo } from 'react'

import styles from './card.module.scss'

type ItemType = {
  title: string
  description: string
  image: string
}
type PropsType = {
  item: ItemType
}

const Card: FC<PropsType> = ({ item }) => {
  return (
    <div className={styles.main}>
      <div className={styles.image} style={{ backgroundImage: `url(${item.image})` }}></div>
    </div>
  )
}

const Memo = memo(Card)

export { Memo as Card }
