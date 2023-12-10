import { useAppSelector } from '@/store/store'
import React from 'react'
import { Navigate } from 'react-router-dom'

const RedirectAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token)

  return !token ? <>{children}</> : <Navigate to='/' replace />
}

export default RedirectAuth
