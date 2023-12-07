import { withLoading } from '@/hocs/withLoading.hoc'
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const LoginPage = React.lazy(() => import('@/pages/authentication/Login'))
const SignupPage = React.lazy(() => import('@/pages/authentication/Signup'))

const Login = withLoading(LoginPage)
const Signup = withLoading(SignupPage)

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <TransitionGroup>
        <CSSTransition classNames='fade' timeout={300}>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  )
}
