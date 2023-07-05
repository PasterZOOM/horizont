import { instance } from '../instance.ts'

import { GetProductParamsType, ProductType } from './types.ts'

export const productsApi = {
  getProducts: (params: GetProductParamsType) =>
    instance.get<ProductType[]>('/products', { params }).then(res => res.data),
}
