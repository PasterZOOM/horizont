import { FC } from 'react'

import { useParams } from 'react-router-dom'

import styles from './comment.module.scss'

import { CloseIcon } from '@/components/ui/svg/closeIcon.tsx'
import { Typography } from '@/components/ui/typography'
import { CommentType, selectRemoveComment, useCommentsStore } from '@/store/useCommentsStore.ts'

type PropsType = {
  comment: CommentType
}

export const Comment: FC<PropsType> = ({ comment }) => {
  const { id } = useParams()

  const removeComment = useCommentsStore(selectRemoveComment)

  const remove = () => {
    removeComment(id!, comment.id)
  }
  const date = comment.date.toString().replace(/GMT.*/, '').trim()

  return (
    <div className={styles.comment}>
      <div className={styles.top}>
        <Typography variant={'subtitle'} color={'primary'}>
          {comment.userName}
        </Typography>
        <CloseIcon onClick={remove} className={styles.remove} />
      </div>

      <Typography variant={'body'} className={styles.text}>
        {comment.text}
      </Typography>
      <Typography variant={'caption'} className={styles.date}>
        {date}
      </Typography>
    </div>
  )
}
