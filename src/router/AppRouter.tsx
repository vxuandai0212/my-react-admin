import { withLoading } from '@/hocs/withLoading.hoc'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import RequireAuth from './RequireAuth'
import RedirectAuth from './RedirectAuth'
import Default from './Default'

const LoginPage = React.lazy(() => import('@/pages/authentication/Login'))
const SignupPage = React.lazy(() => import('@/pages/authentication/Signup'))
const NoPermissionPage = React.lazy(() => import('@/pages/builtin/403'))
const NotFoundPage = React.lazy(() => import('@/pages/builtin/404'))
const ServiceErrorPage = React.lazy(() => import('@/pages/builtin/500'))
const BasicLayoutPage = React.lazy(() => import('@/layouts/BasicLayout'))
const InvoiceListPage = React.lazy(() => import('@/pages/invoice/list'))
const InvoiceNewPage = React.lazy(() => import('@/pages/invoice/new'))
const ReportPage = React.lazy(() => import('@/pages/report'))

const Login = withLoading(LoginPage)
const Signup = withLoading(SignupPage)
const NoPermission = withLoading(NoPermissionPage)
const NotFound = withLoading(NotFoundPage)
const ServiceError = withLoading(ServiceErrorPage)
const BasicLayout = withLoading(BasicLayoutPage)
const InvoiceList = withLoading(InvoiceListPage)
const InvoiceNew = withLoading(InvoiceNewPage)
const Report = withLoading(ReportPage)

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

  const protectedLayout = (
    <RequireAuth>
      <BasicLayout />
    </RequireAuth>
  )

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
        <Route
          path='login'
          element={
            <RedirectAuth>
              <Login />
            </RedirectAuth>
          }
        />
        <Route
          path='signup'
          element={
            <RedirectAuth>
              <Signup />
            </RedirectAuth>
          }
        />
        <Route path='/' element={protectedLayout}>
          <Route index element={<Default />} />
          <Route path='calendar' element={<Report />} />
          <Route path='dashboard' element={<Report />} />
          <Route path='file-browser' element={<Report />} />
          <Route path='help-center' element={<Report />} />
          <Route path='kanban' element={<Report />} />
          <Route path='message' element={<Report />} />
          <Route path='notification' element={<Report />} />
          <Route path='report' element={<Report />} />
          <Route path='invoice' element={<InvoiceList />} />
          <Route path='invoice/new' element={<InvoiceNew />} />
          <Route path='project' element={<InvoiceList />} />
          <Route path='project/new' element={<InvoiceNew />} />
          <Route path='task' element={<InvoiceList />} />
          <Route path='task/new' element={<InvoiceNew />} />
          <Route path='contact' element={<InvoiceList />} />
          <Route path='contact/new' element={<InvoiceNew />} />
          <Route path='product' element={<InvoiceList />} />
          <Route path='product/new' element={<InvoiceNew />} />
        </Route>
        <Route path='403' element={<NoPermission />} />
        <Route path='500' element={<ServiceError />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
