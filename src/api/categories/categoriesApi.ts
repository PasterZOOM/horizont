import { v1 } from 'uuid'

import { instance } from '@/api/instance.ts'
import { categoriesMock } from '@/mocks/categories.ts'

export const categoriesApi = {
  getCategories: (): Promise<CategoryType[]> =>
    instance
      .get<string[]>(`products/categories`)
      .then(res => res.data.map(category => ({ id: v1(), title: category, value: category })))
      .catch(() =>
        categoriesMock.map(category => ({ id: v1(), title: category, value: category }))
      ),
}
