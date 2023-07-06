import { FC, useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { v1 } from 'uuid'
import { z } from 'zod'

import styles from './productPage.module.scss'

import { ControlTextField } from '@/components/form/controls/controlTextField.tsx'
import { Comments } from '@/components/pages/product/comments'
import { Button } from '@/components/ui/button'
import { FavoriteIcon } from '@/components/ui/favoriteStare'
import { Typography } from '@/components/ui/typography'
import { useGetProduct } from '@/hooks/query/useGetProduct.ts'
import { selectAddComment, useCommentsStore } from '@/store/useCommentsStore.ts'

const schema = z.object({
  comment: z
    .string()
    .trim()
    .nonempty('The field must not be empty')
    .min(3, 'Comment must be at 3 characters'),
})

type LoginFormType = z.infer<typeof schema>
export const ProductPage: FC = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetProduct({ keepPreviousData: false })
  const navigate = useNavigate()

  const addComment = useCommentsStore(selectAddComment)

  const { handleSubmit, control, reset } = useForm<LoginFormType>({
    defaultValues: { comment: '' },
    resolver: zodResolver(schema),
  })
  const onSubmit = handleSubmit(data => {
    addComment(id!, { id: v1(), date: new Date().toString(), userName: 'User', text: data.comment })
    reset()
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isLoading) return <>Loading...</>

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← Back
      </button>

      <Typography variant={'h2'} className={styles.title}>
        {data?.title}
      </Typography>
      <div className={styles.card}>
        <FavoriteIcon item={data!} className={styles.favoriteIcon} />
        <img src={data?.image} alt={data?.description} />

        <Typography variant={'body'} className={styles.description}>
          {data?.description}
        </Typography>
      </div>

      <Comments />

      <form onSubmit={onSubmit} className={styles.form}>
        <ControlTextField
          placeholder={'Send your comment...'}
          label={'New comment'}
          name={'comment'}
          control={control}
          className={styles.textField}
        />
        <Button type={'submit'} className={styles.addButton}>
          Add
        </Button>
      </form>
    </div>
  )
}
