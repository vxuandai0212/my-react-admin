import { localStg } from '@/utils'

export function getToken() {
  return localStg.get('token') || ''
}

export function getUserInfo() {
  const emptyInfo: Auth.UserInfo = {
    userId: '',
    userName: '',
    userRole: 'user',
    defaultRoute: '',
    authorizedFirstLevelRoutes: undefined,
    authorizedRoutes: undefined,
    authorizedLeavesRoutes: undefined,
  }
  const userInfo: Auth.UserInfo = localStg.get('userInfo') || emptyInfo

  return userInfo
}

export function clearAuthStorage() {
  localStg.remove('token')
  localStg.remove('refreshToken')
  localStg.remove('userInfo')
}
