import enUS from 'antd/locale/en_US'
import esES from 'antd/locale/es_ES'
import frFR from 'antd/locale/fr_FR'
import viVN from 'antd/locale/vi_VN'
import datepickerEnUS from 'antd/es/date-picker/locale/en_US'
import datepickerEsES from 'antd/es/date-picker/locale/es_ES'
import datepickerFrFR from 'antd/es/date-picker/locale/fr_FR'
import datepickerViVN from 'antd/es/date-picker/locale/vi_VN'
import { Locale } from 'antd/es/locale/index'
import { PickerLocale } from 'antd/es/date-picker/generatePicker/index'
import i18next from 'i18next'

export const ANT_MAP_LOCALE: {
  [key: string]: Locale
} = {
  en: enUS,
  es: esES,
  fr: frFR,
  vi: viVN,
}

export const ANT_DATE_MAP_LOCALE: {
  [key: string]: PickerLocale
} = {
  en: datepickerEnUS,
  es: datepickerEsES,
  fr: datepickerFrFR,
  vi: datepickerViVN,
}

export function setupI18n() {
  i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
  })
}
