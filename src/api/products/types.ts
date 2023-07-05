export type ProductType = {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

export type GetProductParamsType = {
  limit: string | null
  sort: PRODUCT_SORT | null
  categories: string | null
}
