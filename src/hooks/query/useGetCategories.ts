import { useQuery } from 'react-query'

import { categoriesApi } from '@/api/categories/categoriesApi.ts'
import { QUERY_KEY } from '@/enums/queryKeys.ts'
import { UseQueryHook } from '@/hooks/query/types.ts'

export const useGetCategories: UseQueryHook<
  CategoryType[],
  unknown,
  [QUERY_KEY.GET_CATEGORIES]
> = options => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_CATEGORIES],
    queryFn: () => categoriesApi.getCategories(),
    ...options,
  })
}
