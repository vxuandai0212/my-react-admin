declare namespace Card {
  interface ProgressCard {
    label: I18nType.I18nKey
    description: I18nType.I18nKey
    valuePrefix?: string
    value: number | string
    valueType?: 'currency' | 'number'
    currencyType?: 'USD' | 'VND'
    progressColor: 'primary' | 'warning' | 'danger' | 'success'
    trend: 'up' | 'down'
    percent: number
    backgroundColor?: string
    className?: string
  }

  interface CategoryCard {
    title: I18nType.I18nKey
    value: number
    icon: LocalIcon
    iconFillColor: string
    iconBackgroundColor: string
  }

  interface ItemCard {
    label: I18nType.I18nKey
    value: number
    valueType?: 'number' | 'currency' | 'datetime'
    code?: string
    icon: LocalIcon
  }

  interface EventCard {
    date: number
    title: I18nType.I18nKey
    description: I18nType.I18nKey
    color: 'primary' | 'success' | 'danger' | 'warning'
  }
}

declare namespace Tab {
  interface SimpleTabItem {
    label: I18nType.I18nKey
    value: any
  }

  interface SimpleTab {
    tabs: SimpleTabItem[]
    activeTab: any
    onChooseTab: (v: any) => void
    className?: string
  }

  interface AdvanceTabItem {
    key: any
    label: I18nType.I18nKey
    description: I18nType.I18nKey
    icon: LocalIcon
  }
}

declare namespace Table {
  interface Format {
    type: 'datetime' | 'currency'
    value: any
  }

  interface Header {
    key?: string
    label: string
    type: 'text' | 'tag' | 'icon-text' | 'image-text'
    format?: Format
    style?: 'italic' | 'bold'
    align?: 'left' | 'center' | 'right'
    showLabel?: boolean
    width?: number
  }
}

type InputType = 'text' | 'password'

interface RCheckboxOptions {
  key: any
  label: I18nType.I18nKey
  value: any
}

type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      children?: ReactNode
    }
  : T & {
      children?: ReactNode
    }

type LocalIcon =
  | 'add'
  | 'arrow'
  | 'attach'
  | 'bill'
  | 'business'
  | 'calendar'
  | 'caret-down'
  | 'cart'
  | 'company'
  | 'contact'
  | 'create'
  | 'dashboard'
  | 'date'
  | 'delete'
  | 'description'
  | 'diamond'
  | 'dropbox'
  | 'email'
  | 'emoticon'
  | 'facebook'
  | 'file'
  | 'from'
  | 'fullname'
  | 'google'
  | 'hamburger'
  | 'help'
  | 'hour'
  | 'invoice'
  | 'kanban'
  | 'keyboard'
  | 'language'
  | 'laptop'
  | 'message'
  | 'money'
  | 'notification'
  | 'oval'
  | 'password'
  | 'phone'
  | 'product'
  | 'project'
  | 'rate'
  | 'report'
  | 'save'
  | 'search'
  | 'task'
  | 'three-dot'
  | 'tick'
  | 'twitter'
  | 'upload'
