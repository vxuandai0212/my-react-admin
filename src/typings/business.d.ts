declare namespace Auth {
  type RoleType = 'super' | 'admin' | 'user'

  interface UserInfo {
    userId: string
    userName: string
    userRole: RoleType
    defaultRoute: string
    authorizedRoutes: Record<AvailableRoute, RouteModel[]>
    authorizedLeavesRoutes?: Pick<RouteModel, 'name' | 'i18nTitle' | 'activeMenu' | 'path'>[]
  }
}

declare namespace UserManagement {
  interface User extends ApiUserManagement.User {
    index: number
    key: string
  }

  type GenderKey = NonNullable<User['gender']>

  type UserStatusKey = NonNullable<User['userStatus']>
}
