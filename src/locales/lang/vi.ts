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
      title: 'Đăng xuất',
      content: 'Bạn có muốn đăng xuất không?',
      confirm: 'Xác nhận',
      cancel: 'Hủy',
    },
    header: {
      search: {
        placeholder: 'Nhập từ khóa tìm kiếm',
      },
      create: {
        project: 'Thêm dự án',
        task: 'Thêm nhiệm vụ',
        contact: 'Thêm liên hệ',
        event: 'Thêm sự kiện',
        product: 'Thêm sản phẩm',
        invoice: 'Thêm hóa đơn',
      },
    },
    language: {
      change: 'Chọn ngôn ngữ',
    },
    tab: {
      day: 'Hôm nay',
      week: 'Trong tuần',
      month: 'Trong tháng',
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
      _value: 'Lịch',
      list: 'Lịch',
      new: 'Thêm sự kiện',
    },
    contact: {
      _value: 'Liên hệ',
      list: 'Liên hệ',
      new: 'Thêm liên hệ',
    },
    'file-browser': {
      _value: 'Tệp',
      list: 'Quản lý tệp',
      new: 'Tải lên',
    },
    'help-center': {
      _value: 'Khiếu nại',
      list: 'Quản lý khiếu nại',
      new: 'Thêm Ticket',
    },
    invoice: {
      _value: 'Hóa đơn',
      list: 'Quản lý hóa đơn',
      new: 'Thêm hóa đơn',
    },
    kanban: {
      _value: 'Kanban',
      list: 'Kanban',
      new: 'Thêm bảng Kanban',
    },
    message: {
      _value: 'Tin nhắn',
      list: 'Tin nhắn',
      new: 'Tin nhắn mới',
    },
    notification: {
      _value: 'Thông báo',
      list: 'Quản lý thông báo',
      new: 'Thêm thông báo',
    },
    product: {
      _value: 'Sản phẩm',
      list: 'Tất cả sản phẩm',
      new: 'Thêm sản phẩm',
    },
    project: {
      _value: 'Dự án',
      list: 'Quản lý dự án',
      new: 'Thêm dự án',
    },
    report: {
      _value: 'Báo cáo',
      list: 'Báo cáo',
    },
    task: {
      _value: 'Nhiệm vụ',
      list: 'Danh sách nhiệm vụ',
      new: 'Thêm nhiệm vụ',
    },
  },
  button: {
    login: 'Đăng nhập',
    signup: 'Đăng ký',
    send: 'Gửi',
  },
  page: {
    login: {
      common: {
        loginSuccess: 'Đăng nhập thành công',
        welcomeBack: 'Chào mừng trở lại, {userName}!',
      },
      welcome: 'Chào mừng.\nHãy đăng nhập để tiếp tục.',
      welcomeDescription: 'Nhập thông tin tại đây',
      loginWith: 'Đăng nhập thông qua',
      form: {
        email: {
          label: 'Email',
          placeholder: 'Nhập địa chỉ email...',
        },
        password: {
          label: 'Mật khẩu',
          placeholder: 'Nhập mật khẩu...',
        },
        rememberLogin: {
          label: 'Lưu trình duyệt',
        },
        recoverPassword: {
          label: 'Khôi phục mật khẩu',
        },
      },
      error: {
        email: {
          required: 'Email không được bỏ trống',
        },
        password: {
          required: 'Mật khẩu không được bỏ trống',
        },
      },
    },
    signup: {
      welcome: 'Chào mừng.\nĐăng ký để bắt đầu.',
      welcomeDescription: 'Nhập thông tin tại đây',
      loginWith: 'Đăng nhập thông qua',
      form: {
        fullname: {
          label: 'Họ và tên',
          placeholder: 'Nhập họ và tên...',
        },
        email: {
          label: 'Email',
          placeholder: 'Nhập địa chỉ email...',
        },
        password: {
          label: 'Mật khẩu',
          placeholder: 'Nhập mật khẩu...',
        },
        agreement: {
          label: 'Tôi đã đọc và đồng ý với điều khoản',
        },
      },
      error: {
        fullname: {
          required: 'Họ và tên không được bỏ trống',
        },
        email: {
          required: 'Email không được bỏ trống',
        },
        password: {
          required: 'Mật khẩu không được bỏ trống',
        },
      },
    },
    invoice: {
      progress: {
        title: 'Thông tin hóa đơn',
        description: 'Tổng hợp các hóa đơn đã tạo',
        all: 'Tất cả',
        scheduled: 'Lên lịch',
        unpaid: 'Chưa thanh toán',
        paid: 'Đã thanh toán',
        sale: 'Bán hàng',
        lead: 'Khách hàng',
        income: 'Lợi nhuận',
        duration: {
          week: 'Trong tuần',
          month: 'Trong tháng',
        },
      },
      tab: {
        all: 'Tất cả',
        draft: 'Nháp',
        scheduled: 'Lên lịch',
        paid: 'Đã thanh toán',
      },
      table: {
        header: {
          number: 'STT',
          date: 'Ngày tạo',
          customer: 'Khách hàng',
          status: 'Trạng thái',
          amount: 'Chi phí',
        },
      },
      status: {
        paid: 'Đã thanh toán',
        scheduled: 'Lên lịch',
        unpaid: 'Chưa thanh toán',
        pending: 'Hoãn',
        processing: 'Đang xử lý',
        finished: 'Hoàn thành',
      },
      command: {
        retry: 'Thử lại',
        edit: 'Chỉnh sửa',
        delete: 'Xóa',
        view: 'Xem',
      },
      detail: {
        label: 'Hóa đơn',
        description: {
          _value: 'Chi tiết',
          item: 'Sản phẩm',
          hour: 'Thời gian',
          rate: 'Chi phí',
          amount: 'Tổng',
          from: 'Người gửi',
          to: 'Người nhận',
          subtotal: 'Tổng trước thuế',
          tax: 'Thuế',
          total: 'Tổng sau thuế',
        },
        activity: 'Hoạt động',
        common: {
          button: {
            saveAndSend: 'Lưu và gửi',
            cancel: 'Hủy',
          },
          tab: {
            billTo: {
              title: 'Người nhận',
              description: 'Thông tin khách hàng',
            },
            from: {
              title: 'Người gửi',
              description: 'Thông tin của bạn',
            },
            description: {
              title: 'Mô tả',
              description: 'Thêm sản phẩm',
            },
            saveAsDraft: {
              title: 'Lưu bản nháp',
              description: 'Cập nhật và gửi lần khác',
            },
            deleteInvoice: {
              title: 'Xóa hóa đơn',
              description: 'Xóa hóa đơn hiện tại',
            },
          },
        },
        descriptionSection: {
          item: 'Công việc',
          remove: 'Xóa',
          itemDescription: {
            title: 'Mô tả công việc',
            placeholder: 'Nhập mô tả công việc',
          },
          hour: {
            title: 'Thời gian',
            placeholder: 'Nhập thời gian',
          },
          rate: {
            title: 'Chi phí',
            placeholder: 'Nhập chi phí',
          },
          addNewItem: 'Thêm công việc',
          subTotal: 'Tổng (trước thuế)',
          tax: 'Thuế',
          total: 'Tổng',
        },
        billTo: {
          uploadImage: 'Tải lên ảnh',
          invoiceNumber: {
            title: 'Mã hóa đơn',
            placeholder: 'Nhập mã hóa đơn',
          },
          template: {
            title: 'Mẫu hóa đơn',
            placeholder: 'Chọn mẫu hóa đơn',
          },
          companyName: {
            title: 'Công ty',
            placeholder: 'Nhập tên công ty',
          },
          date: {
            title: 'Thời gian',
            placeholder: 'Nhập thời gian',
          },
          businessAddress: {
            title: 'Địa chỉ làm việc',
            placeholder: 'Nhập địa chỉ làm việc',
          },
          country: {
            title: 'Quốc gia',
            placeholder: 'Nhập tên quốc gia',
          },
          city: {
            title: 'Thành phố',
            placeholder: 'Nhập tên thành phố',
          },
          phoneNumber: {
            title: 'Số điện thoại',
            placeholder: 'Nhập số điện thoại',
          },
          email: {
            title: 'Địa chỉ email',
            placeholder: 'Nhập địa chỉ email',
          },
          taxRate: {
            title: 'Thuế',
            placeholder: 'Nhập % thuế',
          },
        },
      },
    },
    report: {
      visitChart: {
        title: 'Lượt khách tham quan',
        legend: {
          abroad: 'Du lịch nước ngoài',
          domestic: 'Du lịch trong nước',
        },
        unit: '(khách)',
      },
      transportationChart: {
        title: 'Các phương thức di chuyển',
        car: 'Ô tô',
        bicycle: 'Xe đạp',
        bus: 'Xe buýt',
        train: 'Tàu',
        walking: 'Đi bộ',
      },
      spreadConsumptionChart: {
        title: 'Tiêu thụ',
        legend: {
          margarine: 'Bơ thực vật',
          lowfat: 'Ít béo',
          butter: 'Bơ',
        },
        unit: '(gam)',
      },
      smokingChart: {
        men: 'Đàn ông',
        women: 'Phụ nữ',
        menSale: 'Đàn ông',
        womenSale: 'Phụ nữ',
        unit: 'Doanh thu bán hàng ($)',
      },
      saleChart: {
        housing: 'Nhà ở',
        food: 'Thực phẩm',
        clothing: 'Quần áo',
        travelOrTransport: 'Di chuyển / Du lịch',
        entertainment: 'Giải trí',
        luxuryGood: 'Đồ xa xỉ',
        title: 'Biểu đồ chi tiêu',
      },
      roadTransportSpendChart: {
        italia: 'Ý',
        portugal: 'Bồ Đào Nha',
        uk: 'Anh',
        usa: 'Mỹ',
        unit: 'Ngân sách dành cho hạ tầng giao thông (%)',
      },
      airPollutantChart: {
        title: 'Nguồn ô nhiễm không khí',
        legend: {
          transport: 'Giao thông',
          industry: 'Công nghiệp',
          airPollutant: 'Chất gây ô nhiễm',
          household: 'Gia đình',
        },
        unit: '(tấn)',
      },
      welcome: 'Chào mừng',
      latestUpdate: {
        title: 'Cập nhật mới nhất',
        itemSale: 'Bán sản phẩm',
        newLeadCreated: 'Thêm mới khách hàng tiềm năng',
        itemUploadComplete: 'Tải lên tệp',
        emailNotificationSent: 'Gửi thông báo email',
      },
      upComingEvent: {
        title: 'Các sự kiện sắp tới',
      },
      popularCategory: {
        title: 'Danh mục phổ biến',
        description: 'Khám phá danh mục sản phẩm',
        electronic: 'Điện tử',
        accessory: 'Trang sức',
        digitalGood: 'Thiết bị công nghệ',
      },
    },
  },
}

export default locale
