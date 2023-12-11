import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { localStg } from '@/utils'
import { Dates } from '@/hooks/use-datetime'

export const useLanguage = (): {
  language: I18nType.LangType
  setLanguage: (locale: I18nType.LangType) => Promise<void>
} => {
  const { i18n } = useTranslation()

  const handleChangeLanguage = useCallback(
    async (locale: I18nType.LangType) => {
      Dates.setLocale(locale)
      localStg.set('lang', locale)
      await i18n.changeLanguage(locale)
    },
    [i18n]
  )

  return useMemo(
    () => ({
      language: i18n.language as I18nType.LangType,
      setLanguage: handleChangeLanguage,
    }),
    [handleChangeLanguage, i18n.language]
  )
}
