import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { productsApi } from '@/api/products/productsApi.ts'
import { ProductType } from '@/api/products/types.ts'
import { QUERY_KEY } from '@/enums/queryKeys.ts'
import { UseQueryHook } from '@/hooks/query/types.ts'

export const useGetProduct: UseQueryHook<
  ProductType,
  unknown,
  [QUERY_KEY.GET_PRODUCT]
> = options => {
  const { id } = useParams()

  return useQuery({
    queryKey: [QUERY_KEY.GET_PRODUCT],
    queryFn: () => productsApi.getProduct(id!),
    ...options,
  })
}
