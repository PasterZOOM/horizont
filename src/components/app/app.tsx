import { useState } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

import { ProductsPage } from '@/components/pages/products/productsPage.tsx'

export const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false, retryDelay: 3000 } },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  )
}
