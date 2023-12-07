import { useAppSelector } from '@/store/store'
import { isArray, isString } from '@/utils'

export function usePermission() {
  const auth = useAppSelector((state) => state.auth)

  function hasPermission(permission: Auth.RoleType | Auth.RoleType[]) {
    const { userRole } = auth.userInfo

    let has = userRole === 'super'
    if (!has) {
      if (isArray(permission)) {
        has = (permission as Auth.RoleType[]).includes(userRole)
      }
      if (isString(permission)) {
        has = (permission as Auth.RoleType) === userRole
      }
    }
    return has
  }

  return {
    hasPermission,
  }
}
