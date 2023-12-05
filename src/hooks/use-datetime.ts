import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useTranslation } from 'react-i18next'

dayjs.extend(relativeTime)

export function useDatetime() {
  const { i18n } = useTranslation()

  function datetime(value: any) {
    return dayjs(value).locale(i18n.language)
  }

  function now() {
    return dayjs().locale(i18n.language)
  }

  function timeFromNow(value: any) {
    return dayjs(value).locale(i18n.language).fromNow(true)
  }

  return {
    now,
    datetime,
    timeFromNow,
  }
}
