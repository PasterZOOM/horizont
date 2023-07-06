import { FC } from 'react'

import { useParams } from 'react-router-dom'

import styles from './comments.module.scss'

import { Comment } from '@/components/pages/product/comments/comment'
import { selectComments, useCommentsStore } from '@/store/useCommentsStore.ts'

export const Comments: FC = () => {
  const { id } = useParams()
  const comments = useCommentsStore(selectComments(id!))

  return (
    <div className={styles.comments}>
      {!comments.length ? (
        <div className={styles.noComments}>No comments</div>
      ) : (
        comments.map(comment => <Comment key={comment.id} comment={comment} />)
      )}
    </div>
  )
}
