module.exports = {
  routeModel: {
    calendar: [
      {
        name: "calendar",
        path: "/calendar",
        i18nTitle: "routes.calendar._value",
        icon: {
          name: "calendar",
          width: 16,
          height: 17,
        },
        order: 5,
        level: 1,
      },
      {
        name: "calendar_new",
        path: "/calendar/new",
        i18nTitle: "routes.calendar.new",
        activeMenu: "calendar",
        level: 2,
      },
    ],
    contact: [
      {
        name: "contact",
        path: "/contact",
        i18nTitle: "routes.contact._value",
        icon: {
          name: "contact",
          width: 18,
          height: 19,
        },
        order: 6,
        level: 1,
      },
      {
        name: "contact_new",
        path: "/contact/new",
        i18nTitle: "routes.contact.new",
        activeMenu: "contact",
        level: 2,
      },
    ],
    dashboard: [
      {
        name: "dashboard",
        path: "/dashboard",
        i18nTitle: "routes.dashboard._value",
        icon: {
          name: "dashboard",
          width: 18,
          height: 15,
        },
        order: 1,
        level: 1,
      },
    ],
    "file-browser": [
      {
        name: "file-browser",
        path: "/file-browser",
        i18nTitle: "routes.file-browser._value",
        icon: {
          name: "file",
          width: 16,
          height: 20,
        },
        order: 10,
        level: 1,
      },
      {
        name: "file-browser_new",
        path: "/file-browser/new",
        i18nTitle: "routes.file-browser.new",
        activeMenu: "file-browser",
        level: 2,
      },
    ],
    "help-center": [
      {
        name: "help-center",
        path: "/help-center",
        i18nTitle: "routes.help-center._value",
        icon: {
          name: "help",
          width: 12,
          height: 17,
        },
        order: 13,
        level: 1,
      },
      {
        name: "help-center_new",
        path: "/help-center/new",
        i18nTitle: "routes.help-center.new",
        activeMenu: "help-center",
        level: 2,
      },
    ],
    invoice: [
      {
        name: "invoice",
        path: "/invoice",
        i18nTitle: "routes.invoice._value",
        icon: {
          name: "invoice",
          width: 14,
          height: 19,
        },
        order: 9,
        level: 1,
      },
      {
        name: "invoice_new",
        path: "/invoice/new",
        i18nTitle: "routes.invoice.new",
        activeMenu: "invoice",
        level: 2,
      },
    ],
    kanban: [
      {
        name: "kanban",
        path: "/kanban",
        i18nTitle: "routes.kanban._value",
        icon: {
          name: "kanban",
          width: 20,
          height: 16,
        },
        order: 4,
        level: 1,
      },
      {
        name: "kanban_new",
        path: "/kanban/new",
        i18nTitle: "routes.kanban.new",
        activeMenu: "kanban",
        level: 2,
      },
    ],
    message: [
      {
        name: "message",
        path: "/message",
        i18nTitle: "routes.message._value",
        icon: {
          name: "message",
          width: 20,
          height: 18,
        },
        order: 7,
        level: 1,
      },
      {
        name: "message_new",
        path: "/message/new",
        i18nTitle: "routes.message.new",
        activeMenu: "message",
        level: 2,
      },
    ],
    notification: [
      {
        name: "notification",
        path: "/notification",
        i18nTitle: "routes.notification._value",
        icon: {
          name: "notification",
          width: 18,
          height: 19,
        },
        order: 11,
        level: 1,
      },
      {
        name: "notification_new",
        path: "/notification/new",
        i18nTitle: "routes.notification.new",
        activeMenu: "notification",
        level: 2,
      },
    ],
    product: [
      {
        name: "product",
        path: "/product",
        i18nTitle: "routes.product._value",
        icon: {
          name: "product",
          width: 16,
          height: 18,
        },
        order: 8,
        level: 1,
      },
      {
        name: "product_new",
        path: "/product/new",
        i18nTitle: "routes.product.new",
        activeMenu: "product",
        level: 2,
      },
    ],
    project: [
      {
        name: "project",
        path: "/project",
        i18nTitle: "routes.project._value",
        icon: {
          name: "project",
          width: 20,
          height: 16,
        },
        order: 2,
        level: 1,
      },
      {
        name: "project_new",
        path: "/project/new",
        i18nTitle: "routes.project.new",
        activeMenu: "project",
        level: 2,
      },
    ],
    report: [
      {
        name: "report",
        path: "/report",
        i18nTitle: "routes.report._value",
        icon: {
          name: "report",
          width: 18,
          height: 17,
        },
        order: 12,
        level: 1,
      },
    ],
    task: [
      {
        name: "task",
        path: "/task",
        i18nTitle: "routes.task._value",
        icon: {
          name: "task",
          width: 16,
          height: 19,
        },
        order: 3,
        level: 1,
      },
      {
        name: "task_new",
        path: "/task/new",
        i18nTitle: "routes.task.new",
        activeMenu: "task",
        level: 2,
      },
    ],
  },
}
