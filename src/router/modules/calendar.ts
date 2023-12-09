const calendar = {
  name: 'calendar',
  path: '/calendar',
  component: 'basic',
  children: [
    {
      name: 'calendar_new',
      path: '/calendar/new',
      component: 'self',
      meta: {
        title: 'New Event',
        i18nTitle: 'routes.calendar.new',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'calendar',
      },
    },
  ],
  meta: {
    title: 'Calendar',
    i18nTitle: 'routes.calendar._value',
    headerTitle: 'Calendar',
    i18nHeaderTitle: 'routes.calendar.headerTitle',
    requiresAuth: true,
    keepAlive: true,
    icon: {
      name: 'calendar',
      width: 16,
      height: 17
    },
    order: 5,
  },
}

export default calendar
