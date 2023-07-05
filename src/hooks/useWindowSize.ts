import { useEffect, useState } from 'react'

export const useWindowSize: UseWindowSizeType = () => {
  const [{ width, height }, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = (): void => {
      const newWindowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      }

      setWindowSize(newWindowSize)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = width < 756
  const isTablet = width > 756 && width <= 1024
  const isLaptop = width > 1024

  return { width, height, isMobile, isTablet, isLaptop }
}

type Size = {
  width: number
  height: number
}
type UseWindowSizeType = () => Size & { isMobile: boolean; isTablet: boolean; isLaptop: boolean }
