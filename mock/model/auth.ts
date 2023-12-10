import { routeModel } from './route'
import { omit } from 'lodash-es'

interface UserModel extends Auth.UserInfo {
  token: string
  refreshToken: string
  password: string
}

const superDefaultRoute = '/dashboard'
const superAuthorizedRoutes = routeModel as any

const adminDefaultRoute = '/project'
const adminAuthorizedRoutes = omit(routeModel, ['dashboard', 'report']) as any

const userDefaultRoute = 'task'
const userAuthorizedRoutes = omit(routeModel, [
  'dashboard',
  'report',
  'project',
]) as any

export const userModel: UserModel[] = [
  {
    token: '__TOKEN_SOYBEAN__',
    refreshToken: '__REFRESH_TOKEN_SOYBEAN__',
    userId: '0',
    userName: 'Soybean',
    userRole: 'super',
    password: 'soybean123',
    defaultRoute: superDefaultRoute,
    authorizedRoutes: superAuthorizedRoutes,
  },
  {
    token: '__TOKEN_SUPER__',
    refreshToken: '__REFRESH_TOKEN_SUPER__',
    userId: '1',
    userName: 'Super',
    userRole: 'super',
    password: 'super123',
    defaultRoute: superDefaultRoute,
    authorizedRoutes: superAuthorizedRoutes,
  },
  {
    token: '__TOKEN_ADMIN__',
    refreshToken: '__REFRESH_TOKEN_ADMIN__',
    userId: '2',
    userName: 'Admin',
    userRole: 'admin',
    password: 'admin123',
    defaultRoute: adminDefaultRoute,
    authorizedRoutes: adminAuthorizedRoutes,
  },
  {
    token: '__TOKEN_USER01__',
    refreshToken: '__REFRESH_TOKEN_USER01__',
    userId: '3',
    userName: 'User01',
    userRole: 'user',
    password: 'user01123',
    defaultRoute: userDefaultRoute,
    authorizedRoutes: userAuthorizedRoutes,
  },
]
