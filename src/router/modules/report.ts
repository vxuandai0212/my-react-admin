const report = {
  name: 'report',
  path: '/report',
  component: 'basic',
  children: [
    {
      name: 'report',
      path: '/report',
      component: 'self',
      meta: {
        title: 'Report',
        i18nTitle: 'routes.report._value',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'report',
      },
    },
  ],
  meta: {
    title: 'Reports',
    i18nTitle: 'routes.report._value',
    icon: {
      name: 'report',
      width: 18,
      height: 17
    },
    order: 12,
  },
}

export default report
