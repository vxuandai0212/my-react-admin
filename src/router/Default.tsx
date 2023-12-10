import { useAppSelector } from '@/store/store'
import { Navigate } from 'react-router-dom'

const Default: React.FC = () => {
  const defaultRoute = useAppSelector(
    (state) => state.auth.userInfo.defaultRoute
  )

  return <Navigate to={defaultRoute} replace />
}

export default Default
