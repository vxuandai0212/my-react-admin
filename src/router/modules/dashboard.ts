const dashboard = {
  name: 'dashboard',
  path: '/dashboard',
  component: 'basic',
  children: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'self',
      meta: {
        title: 'Dashboard',
        i18nTitle: 'routes.dashboard._value',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'dashboard',
      },
    },
  ],
  meta: {
    title: 'Dashboard',
    i18nTitle: 'routes.dashboard._value',
    icon: {
      name: 'dashboard',
      width: 18,
      height: 15
    },
    order: 1,
  },
}

export default dashboard
