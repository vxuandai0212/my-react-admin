import enUS from 'antd/locale/en_US'
import viVN from 'antd/locale/vi_VN'
import datepickerEnUS from 'antd/es/date-picker/locale/en_US'
import datepickerViVN from 'antd/es/date-picker/locale/vi_VN'
import { Locale } from 'antd/es/locale/index'
import { PickerLocale } from 'antd/es/date-picker/generatePicker/index'
import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import locales from '@/locales/locale'
import { reduce } from 'lodash-es'

export const ANT_MAP_LOCALE: {
  [key: string]: Locale
} = {
  en: enUS,
  vi: viVN,
}

export const ANT_DATE_MAP_LOCALE: {
  [key: string]: PickerLocale
} = {
  en: datepickerEnUS,
  vi: datepickerViVN,
}

const resources: Resource = reduce(
  locales,
  (result: Resource, value, key) => {
    result[key] = { translation: value }
    return result
  },
  {}
)

export function setupI18n() {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false,
    },
  })
}
