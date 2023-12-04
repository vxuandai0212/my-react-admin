import { useTranslation } from 'react-i18next'

export function useNumber() {
  const { i18n } = useTranslation()

  const LOCALE_MAP: { [key: string]: string } = {
    vi: 'vi-VN',
    en: 'en-US',
  }

  function moneyFormat(style: string, currency: string, value: number) {
    return new Intl.NumberFormat(LOCALE_MAP[i18n.language], {
      style,
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value)
  }

  function numberFormat(value: number) {
    return new Intl.NumberFormat(LOCALE_MAP[i18n.language], {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value)
  }
  return {
    moneyFormat,
    numberFormat,
  }
}
