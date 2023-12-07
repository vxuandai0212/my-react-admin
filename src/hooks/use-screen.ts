import { useMediaQuery } from 'react-responsive'

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export function useScreen() {
  const isNotPC = useMediaQuery({
    query: `(max-width: ${BREAKPOINTS['2xl']}px)`,
  })

  const isTablet = useMediaQuery({
    query: `(max-width: ${BREAKPOINTS['xl']}px)`,
  })

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAKPOINTS['lg']}px)`,
  })

  return {
    isMobile,
    isTablet,
    isNotPC,
  }
}
