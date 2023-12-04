import { useTranslation } from 'react-i18next'

export function translateCustomMenuLabel(menus: any) {
  const { t } = useTranslation()
  const globalMenu: any = []
  menus.forEach((menu: any) => {
    const menuItem = {
      ...menu,
      label: menu.i18nTitle ? t(menu.i18nTitle) : menu.label,
    }
    globalMenu.push(menuItem)
  })
  return globalMenu
}

export function sortRoutes(routes: any) {
  return routes
    .sort(
      (next: any, pre: any) =>
        Number(next.meta?.order) - Number(pre.meta?.order)
    )
    .map((i: any) => {
      if (i.children) sortRoutes(i.children)
      return i
    })
}

export function transformAuthRouteToMenu(routes: any) {
  const globalMenu: any = []
  routes.forEach((route: any) => {
    const { name, path, meta } = route
    const routeName = name as string
    let menuChildren
    if (route.children && route.children.length > 0) {
      menuChildren = transformAuthRouteToMenu(route.children)
    }
    const menuItem = addPartialProps({
      menu: {
        key: routeName,
        label: meta.title,
        routeName,
        routePath: path,
        i18nTitle: meta.i18nTitle,
      },
      icon: meta.icon,
      children: menuChildren,
    })

    if (!hideInMenu(route)) {
      globalMenu.push(menuItem)
    }
  })

  return globalMenu
}

function hideInMenu(route: any) {
  return Boolean(route.meta.hide)
}

function addPartialProps(config: { menu: any; icon?: string; children?: any }) {
  const item = { ...config.menu }

  const { icon, children } = config

  if (icon) {
    Object.assign(item, { icon })
  }

  if (children) {
    Object.assign(item, { children })
  }
  return item
}