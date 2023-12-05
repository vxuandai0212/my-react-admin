import { withLoading } from '@/hocs/withLoading.hoc'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const LoginPage = React.lazy(() => import('@/pages/authentication/Login'))

const Login = withLoading(LoginPage)

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
