const fileBrowser = {
  name: 'file-browser',
  path: '/file-browser',
  component: 'basic',
  children: [
    {
      name: 'file-browser',
      path: '/file-browser',
      component: 'self',
      meta: {
        title: 'File Browser',
        i18nTitle: 'routes.file-browser.list',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'file-browser',
      },
    },
    {
      name: 'file-browser_new',
      path: '/file-browser/new',
      component: 'self',
      meta: {
        title: 'Upload File',
        i18nTitle: 'routes.file-browser.new',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'file-browser',
      },
    },
  ],
  meta: {
    title: 'File Browser',
    i18nTitle: 'routes.file-browser._value',
    icon: {
      name: 'file',
      width: 16,
      height: 20
    },
    order: 10,
  },
}

export default fileBrowser
