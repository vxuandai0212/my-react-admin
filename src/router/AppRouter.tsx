import { withLoading } from '@/hocs/withLoading.hoc'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './AppRouter.css'

const LoginPage = React.lazy(() => import('@/pages/authentication/Login'))
const SignupPage = React.lazy(() => import('@/pages/authentication/Signup'))
const NoPermissionPage = React.lazy(() => import('@/pages/builtin/403'))
const NotFoundPage = React.lazy(() => import('@/pages/builtin/404'))
const ServiceErrorPage = React.lazy(() => import('@/pages/builtin/500'))

const Login = withLoading(LoginPage)
const Signup = withLoading(SignupPage)
const NoPermission = withLoading(NoPermissionPage)
const NotFound = withLoading(NotFoundPage)
const ServiceError = withLoading(ServiceErrorPage)

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <TransitionRoute />
    </BrowserRouter>
  )
}

const TransitionRoute: React.FC = () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut')
  }, [location, displayLocation])
  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn')
          setDisplayLocation(location)
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='403' element={<NoPermission />} />
        <Route path='404' element={<NotFound />} />
        <Route path='500' element={<ServiceError />} />
      </Routes>
    </div>
  )
}
