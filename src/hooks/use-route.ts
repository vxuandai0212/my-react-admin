import { useAppSelector } from '@/store/store'
import { useEffect, useState } from 'react'
import { useCurrentPath } from './use-current-path'

export const useRoute = () => {
  const currentPath = useCurrentPath()
  const authorizedLeavesRoutes = useAppSelector(
    (state) => state.auth.userInfo.authorizedLeavesRoutes
  )

  const [headerTitle, setHeaderTitle] = useState<I18nType.I18nKey>()
  const [activeMenu, setActiveMenu] = useState<string>()

  useEffect(() => {
    const leaveRoute = authorizedLeavesRoutes?.filter(
      (item) => item.path === currentPath
    )[0]
    setHeaderTitle(leaveRoute?.i18nTitle)
    setActiveMenu(leaveRoute?.activeMenu)
  }, [currentPath])

  return {
    headerTitle,
    activeMenu,
  }
}
