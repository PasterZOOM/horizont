import { instance } from '../instance.ts'

import { GetProductParamsType, ProductType } from './types.ts'

import { productsMock } from '@/mocks/products.ts'

export const productsApi = {
  getProducts: ({ categories, ...params }: GetProductParamsType) =>
    instance
      .get<ProductType[]>(`/products${categories ? `/category/${categories}` : ''}`, { params })
      .then(res => res.data)
      .catch(() => productsMock),
  getProduct: (id: string) =>
    instance
      .get(`/products/${id}`)
      .then(res => res.data)
      .catch(() => productsMock[+id - 1]),
}
