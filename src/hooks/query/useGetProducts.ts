import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'

import { productsApi } from '@/api/products/productsApi.ts'
import { GetProductParamsType, ProductType } from '@/api/products/types.ts'
import { QUERY_KEY } from '@/enums/queryKeys.ts'
import { UseQueryHook } from '@/hooks/query/types.ts'

export const useGetProducts: UseQueryHook<
  ProductType[],
  unknown,
  [QUERY_KEY.GET_PRODUCTS, URLSearchParams]
> = options => {
  const [query] = useSearchParams()

  const params: GetProductParamsType = {
    limit: query.get('limit'),
    sort: query.get('sort') as PRODUCT_SORT,
    categories: query.get('categories'),
  }

  return useQuery({
    queryKey: [QUERY_KEY.GET_PRODUCTS, query],
    queryFn: () => productsApi.getProducts(params),
    ...options,
  })
}
