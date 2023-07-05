import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { useSearchParams } from 'react-router-dom'

import { productsApi } from '@/api/products/productsApi.ts'
import { GetProductParamsType, ProductType } from '@/api/products/types.ts'
import { QUERY_KEY } from '@/enums/queryKeys.ts'

export const useGetProducts: UseQueryHook<
  ProductType[],
  unknown,
  [QUERY_KEY.GET_PRODUCTS, URLSearchParams]
> = options => {
  const [query] = useSearchParams()

  const params: GetProductParamsType = {
    limit: query.get('limit') || '12',
    sort: query.get('sort') as PRODUCT_SORT,
  }

  return useQuery({
    queryKey: [QUERY_KEY.GET_PRODUCTS, query],
    queryFn: () => productsApi.getProducts(params),
    ...options,
  })
}

export type UseQueryHook<
  TQueryFnData = unknown,
  TError = unknown,
  TQueryKey extends QueryKey = QUERY_KEY[],
  TData = TQueryFnData
> = (
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn' | 'onSuccess' | 'onError'
  >
) => UseQueryResult<TData, TError>
