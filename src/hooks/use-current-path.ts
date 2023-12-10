import { LEAVES_ROUTES } from '@/router/constant'
import { matchRoutes, useLocation } from 'react-router-dom'

export const useCurrentPath = () => {
  const location = useLocation()

  const result = matchRoutes(LEAVES_ROUTES, location)

  if (result) {
    return result[0].route.path
  }
  return null
}
