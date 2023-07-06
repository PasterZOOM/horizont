import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CommentType = { id: string; text: string; userName: string; date: string }
type StateType = { items: Record<string, CommentType[]> }
type ActionsType = {
  add: AddFnType
  remove: RemoveFnType
}
type StoreType = ActionsType & StateType

const initialState: StateType = {
  items: {},
}

export const useCommentsStore = create(
  persist<StoreType>(
    (set, get) => ({
      ...initialState,
      add: (id, comment) => {
        const { items } = get()

        set({ items: { ...items, [id]: [...(items[id] ?? []), comment] } })
      },
      remove: (itemId, commentId) => {
        const { items } = get()

        set({
          items: { ...items, [itemId]: items[itemId].filter(comment => comment.id !== commentId) },
        })
      },
    }),
    { name: 'comments' }
  )
)

export const selectComments =
  (id: string) =>
  (store: StoreType): CommentType[] =>
    store.items[id] ?? []
export const selectAddComment = (store: StoreType): AddFnType => store.add
export const selectRemoveComment = (store: StoreType): RemoveFnType => store.remove

type AddFnType = (id: string, comment: CommentType) => void
type RemoveFnType = (itemId: string, commentId: string) => void
