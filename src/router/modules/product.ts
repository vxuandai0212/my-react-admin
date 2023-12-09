const product = {
  name: 'product',
  path: '/product',
  component: 'basic',
  children: [
    {
      name: 'product',
      path: '/product',
      component: 'self',
      meta: {
        title: 'Product',
        i18nTitle: 'routes.product.list',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'product',
      },
    },
    {
      name: 'product_new',
      path: '/product/new',
      component: 'self',
      meta: {
        title: 'New Product',
        i18nTitle: 'routes.product.new',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'product',
      },
    },
  ],
  meta: {
    title: 'Products',
    i18nTitle: 'routes.product._value',
    icon: {
      name: 'product',
      width: 16,
      height: 18
    },
    order: 8,
  },
}

export default product
