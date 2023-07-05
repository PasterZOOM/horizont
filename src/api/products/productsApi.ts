import { instance } from '../instance.ts'

import { GetProductParamsType, ProductType } from './types.ts'

export const productsApi = {
  getProducts: ({ categories, ...params }: GetProductParamsType) =>
    instance
      .get<ProductType[]>(`/products${categories ? `/category/${categories}` : ''}`, { params })
      .then(res => res.data),
}
