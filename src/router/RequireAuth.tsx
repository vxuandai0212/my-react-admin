import { useCurrentPath } from '@/hooks/use-current-path'
import { useAppSelector } from '@/store/store'
import React from 'react'
import { Navigate } from 'react-router-dom'

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token)
  const currentPath = useCurrentPath()

  const authorizedLeavesRoutes = useAppSelector(
    (state) => state.auth.userInfo.authorizedLeavesRoutes
  )

  if (token) {
    if (
      currentPath &&
      authorizedLeavesRoutes &&
      !authorizedLeavesRoutes.map(item => item.path).includes(currentPath)
    ) {
      return <Navigate to='/403' replace />
    }
    return <>{children}</>
  }
  return <Navigate to='/login' replace />
}

export default RequireAuth
