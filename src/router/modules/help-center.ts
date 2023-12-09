const helpCenter = {
  name: 'help-center',
  path: '/help-center',
  component: 'basic',
  children: [
    {
      name: 'help-center',
      path: '/help-center',
      component: 'self',
      meta: {
        title: 'Help Center',
        i18nTitle: 'routes.help-center.list',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'help-center',
      },
    },
    {
      name: 'help-center_new',
      path: '/help-center/new',
      component: 'self',
      meta: {
        title: 'New Ticket',
        i18nTitle: 'routes.help-center.new',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'help-center',
      },
    },
  ],
  meta: {
    title: 'Help Center',
    i18nTitle: 'routes.help-center._value',
    icon: {
      name: 'help',
      width: 12,
      height: 17
    },
    order: 13,
  },
}

export default helpCenter
