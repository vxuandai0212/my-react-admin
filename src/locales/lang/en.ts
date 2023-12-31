const locale: I18nType.Schema = {
  system: {
    title: 'My Vue Admin',
  },
  common: {
    add: 'Add',
    addSuccess: 'Add Success',
    edit: 'Edit',
    editSuccess: 'Edit Success',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    batchDelete: 'Batch Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
    pleaseCheckValue: 'Please check the value is valid',
    action: 'Action',
    logout: {
      title: 'Logout',
      content: 'Do you sure want to logout?',
      confirm: 'Confirm',
      cancel: 'Cancel',
    },
    header: {
      search: {
        placeholder: 'Start typing...',
      },
      create: {
        project: 'New Project',
        task: 'New Task',
        contact: 'New Contact',
        event: 'New Event',
        product: 'New Product',
        invoice: 'New Invoice',
      },
    },
    language: {
      change: 'Change language',
    },
    tab: {
      day: 'Day',
      week: 'Week',
      month: 'Month',
    },
  },
  routes: {
    document: {
      _value: 'Document',
      vue: 'Vue Document',
      vite: 'Vite Document',
      naive: 'NaiveUI Document',
      project: 'Project Document',
      'project-link': 'Project Document(href)',
    },
    component: {
      _value: 'Component',
      button: 'Button',
      card: 'Card',
      table: 'Table',
    },
    plugin: {
      _value: 'Plugin',
      charts: {
        _value: 'Chart',
        echarts: 'ECharts',
        antv: 'AntV',
      },
      copy: 'Copy',
      editor: {
        _value: 'Editor',
        quill: 'Quill',
        markdown: 'Markdown',
      },
      icon: 'Icon',
      map: 'Map',
      print: 'Print',
      swiper: 'Swiper',
      video: 'Video',
    },
    'auth-demo': {
      _value: 'Auth Demo',
      permission: 'Toggle Permission',
      super: 'Super Auth',
    },
    function: {
      _value: 'Function',
      tab: 'System Tab',
    },
    exception: {
      _value: 'Exception',
      403: '403',
      404: '404',
      500: '500',
    },
    'multi-menu': {
      _value: 'Multi Degree Menu',
      first: {
        _value: 'First Degree',
        second: 'Second Degree',
        'second-new': {
          _value: 'Second Degree With Children',
          third: 'Third Degree',
        },
      },
    },
    management: {
      _value: 'System Management',
      auth: 'Auth',
      role: 'Role',
      route: 'Route',
      user: 'User',
    },
    about: 'About',
    dashboard: {
      _value: 'Dashboard',
    },
    calendar: {
      _value: 'Calendar',
      list: 'Calendar',
      new: 'New Event',
    },
    contact: {
      _value: 'Contacts',
      list: 'Contact',
      new: 'New Contact',
    },
    'file-browser': {
      _value: 'File Browser',
      list: 'File Browser',
      new: 'Upload File',
    },
    'help-center': {
      _value: 'Help Center',
      list: 'Help Center',
      new: 'New Ticket',
    },
    invoice: {
      _value: 'Invoices',
      list: 'Invoice',
      new: 'New Invoice',
    },
    kanban: {
      _value: 'Kanban',
      list: 'Kanban',
      new: 'New Kanban',
    },
    message: {
      _value: 'Messages',
      list: 'Message',
      new: 'New Message',
    },
    notification: {
      _value: 'Notifications',
      list: 'Notification',
      new: 'New Event',
    },
    product: {
      _value: 'Products',
      list: 'Product',
      new: 'New Product',
    },
    project: {
      _value: 'Projects',
      list: 'Project',
      new: 'New Project',
    },
    report: {
      _value: 'Reports',
      list: 'Report',
    },
    task: {
      _value: 'Tasks',
      list: 'Task',
      new: 'New Task',
    },
  },
  button: {
    login: 'Sign In',
    signup: 'Sign Up',
    send: 'Send',
  },
  page: {
    login: {
      common: {
        loginSuccess: 'Login success',
        welcomeBack: 'Welcome back, {userName}!',
      },
      welcome: 'Welcome to our CRM.\nSign In to see latest updates.',
      welcomeDescription: 'Enter your details to proceed further',
      loginWith: 'Or sign in with',
      form: {
        email: {
          label: 'Email',
          placeholder: 'Start typing...',
        },
        password: {
          label: 'Password',
          placeholder: 'Start typing...',
        },
        rememberLogin: {
          label: 'Remember me',
        },
        recoverPassword: {
          label: 'Recover password',
        },
      },
      error: {
        email: {
          required: 'Please enter your email',
        },
        password: {
          required: 'Please enter your password',
        },
      },
    },
    signup: {
      welcome: 'Welcome to our CRM.\nSign Up to getting started.',
      welcomeDescription: 'Enter your details to proceed further',
      loginWith: 'Or sign in with',
      form: {
        fullname: {
          label: 'Full name',
          placeholder: 'Start typing...',
        },
        email: {
          label: 'Email',
          placeholder: 'Start typing...',
        },
        password: {
          label: 'Password',
          placeholder: 'Start typing...',
        },
        agreement: {
          label: 'I agree with terms & conditions',
        },
      },
      error: {
        fullname: {
          required: 'Please enter your full name',
        },
        email: {
          required: 'Please enter your email',
        },
        password: {
          required: 'Please enter your password',
        },
      },
    },
    invoice: {
      progress: {
        title: 'Invoices breakdown',
        description: 'Learn more about invoices created',
        all: 'All Invoices',
        scheduled: 'Scheduled',
        unpaid: 'Unpaid',
        paid: 'Paid',
        sale: 'Sales',
        lead: 'Leads',
        income: 'Income',
        duration: {
          week: 'Week comparison',
          month: 'Month comparison',
        },
      },
      tab: {
        all: 'All',
        draft: 'Draft',
        scheduled: 'Scheduled',
        paid: 'Paid',
      },
      table: {
        header: {
          number: 'Number',
          date: 'Date',
          customer: 'Customer',
          status: 'Status',
          amount: 'Amount',
        },
      },
      status: {
        paid: 'Paid',
        scheduled: 'Scheduled',
        unpaid: 'Unpaid',
        pending: 'Pending',
        processing: 'Processing',
        finished: 'Finished',
      },
      command: {
        retry: 'Retry',
        edit: 'Edit',
        delete: 'Delete',
        view: 'View',
      },
      detail: {
        label: 'Invoice',
        description: {
          _value: 'Description',
          item: 'Item',
          hour: 'Hours',
          rate: 'Rate',
          amount: 'Amount',
          from: 'From',
          to: 'Bill to',
          subtotal: 'Subtotal',
          tax: 'Tax',
          total: 'Total',
        },
        activity: 'Activities',
        common: {
          button: {
            saveAndSend: 'Save & Send',
            cancel: 'Cancel',
          },
          tab: {
            billTo: {
              title: 'Bill To',
              description: "Set your customer's details",
            },
            from: {
              title: 'From',
              description: 'Set your personal details',
            },
            description: {
              title: 'Description',
              description: 'Add products or items',
            },
            saveAsDraft: {
              title: 'Save As a Draft',
              description: 'Edit and send this invoice later',
            },
            deleteInvoice: {
              title: 'Delete Invoice',
              description: 'Hide & disable current invoice',
            },
          },
        },
        descriptionSection: {
          item: 'Item',
          remove: 'Remove',
          itemDescription: {
            title: 'Item description',
            placeholder: 'Start typing...',
          },
          hour: {
            title: 'Hours',
            placeholder: 'Nhập thời gian',
          },
          rate: {
            title: 'Rate',
            placeholder: 'Start typing...',
          },
          addNewItem: 'Add new item',
          subTotal: 'Subtotal',
          tax: 'Tax',
          total: 'Total',
        },
        billTo: {
          uploadImage: 'Upload image',
          invoiceNumber: {
            title: 'Invoice number',
            placeholder: 'Start typing...',
          },
          template: {
            title: 'Template',
            placeholder: 'Start typing...',
          },
          companyName: {
            title: 'Company name',
            placeholder: 'Start typing...',
          },
          date: {
            title: 'Date',
            placeholder: 'Start typing...',
          },
          businessAddress: {
            title: 'Business address',
            placeholder: 'Start typing...',
          },
          country: {
            title: 'Country',
            placeholder: 'Start typing...',
          },
          city: {
            title: 'City',
            placeholder: 'Start typing...',
          },
          phoneNumber: {
            title: 'Phone number',
            placeholder: 'Start typing...',
          },
          email: {
            title: 'Email',
            placeholder: 'Start typing...',
          },
          taxRate: {
            title: 'Tax rate',
            placeholder: 'Start typing...',
          },
        },
      },
    },
    report: {
      visitChart: {
        title: 'Visits',
        legend: {
          abroad: 'Abroad tourism',
          domestic: 'Domestic tourism',
        },
        unit: '(visitor)',
      },
      transportationChart: {
        title: 'Transportation usage',
        car: 'Car',
        bicycle: 'Bicycle',
        bus: 'Bus',
        train: 'Train',
        walking: 'Walking',
      },
      spreadConsumptionChart: {
        title: 'Consumption of Spreads',
        legend: {
          margarine: 'Margarine',
          lowfat: 'Low Fat',
          butter: 'Butter',
        },
        unit: '(gam)',
      },
      smokingChart: {
        men: 'Men',
        women: 'Women',
        menSale: 'Men Sale',
        womenSale: 'Women Sale',
        unit: 'Money spend on smoking ($)',
      },
      saleChart: {
        housing: 'Housing',
        food: 'Food',
        clothing: 'Clothing',
        travelOrTransport: 'Travel / Transport',
        entertainment: 'Entertainment',
        luxuryGood: 'Luxury Good',
        title: 'Sale',
      },
      roadTransportSpendChart: {
        italia: 'Italia',
        portugal: 'Portugal',
        uk: 'UK',
        usa: 'USA',
        unit: 'Percentage country budget for road and transportation (%)',
      },
      airPollutantChart: {
        title: 'Source of air pollution',
        legend: {
          transport: 'Transport',
          industry: 'Industry',
          airPollutant: 'Air pollutant',
          household: 'Household',
        },
        unit: '(tons)',
      },
      welcome: 'Welcome',
      latestUpdate: {
        title: 'Latest updates',
        itemSale: 'Item sale',
        newLeadCreated: 'New lead created',
        itemUploadComplete: 'Items upload complete',
        emailNotificationSent: 'Email notifications sent',
      },
      upComingEvent: {
        title: 'Upcoming events',
      },
      popularCategory: {
        title: 'Popular categories',
        description: 'Explore most popular product categories',
        electronic: 'Electronics',
        accessory: 'Accessories',
        digitalGood: 'Digital goods',
      },
    },
  },
}

export default locale
