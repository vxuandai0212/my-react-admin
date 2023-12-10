type AvailableRoute =
  | 'calendar'
  | 'contact'
  | 'dashboard'
  | 'file-browser'
  | 'help-center'
  | 'invoice'
  | 'kanban'
  | 'message'
  | 'notification'
  | 'product'
  | 'project'
  | 'report'
  | 'task'

interface RouteModel {
  name: string
  path: string
  i18nTitle: I18nType.I18nKey
  activeMenu?: string
  icon?: {
    name: LocalIcon
    width: number
    height: number
  }
  order?: number
  level: number
}
