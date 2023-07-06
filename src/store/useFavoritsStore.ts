import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { ProductType } from '@/api/products/types.ts'

type StateType = { items: Record<string, ProductType> }
type ActionsType = {
  add: AddFnType
  remove: RemoveFnType
}
type StoreType = ActionsType & StateType

const initialState: StateType = {
  items: {},
}

export const useFavoritesStore = create(
  persist<StoreType>(
    (set, get) => ({
      ...initialState,
      add: item => set({ items: { ...get().items, [item.id]: item } }),
      remove: id => {
        const { items } = get()

        const temp = { ...items }

        delete temp[id]

        set({ items: temp })
      },
    }),
    { name: 'favorite' }
  )
)

export const selectIsFavorite =
  (id: number) =>
  (store: StoreType): boolean =>
    !!store.items[id]
export const selectAddFavorite = (store: StoreType): AddFnType => store.add
export const selectRemoveFavorite = (store: StoreType): RemoveFnType => store.remove

type AddFnType = (item: ProductType) => void
type RemoveFnType = (id: number) => void
