const task = {
  name: 'task',
  path: '/task',
  component: 'basic',
  children: [
    {
      name: 'task',
      path: '/task',
      component: 'self',
      meta: {
        title: 'Task',
        i18nTitle: 'routes.task.list',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'task',
      },
    },
    {
      name: 'task_new',
      path: '/task/new',
      component: 'self',
      meta: {
        title: 'New Task',
        i18nTitle: 'routes.task.new',
        requiresAuth: true,
        keepAlive: true,
        activeMenu: 'task',
      },
    },
  ],
  meta: {
    title: 'Tasks',
    i18nTitle: 'routes.task._value',
    icon: {
      name: 'task',
      width: 16,
      height: 19
    },
    order: 3,
  },
}

export default task
