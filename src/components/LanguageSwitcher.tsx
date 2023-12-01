import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const handleLanguageChange = (e: any) => {
    const newLang = e.target.value
    i18n.changeLanguage(newLang)
  }

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value='en'>English</option>
      <option value='vi'>Tiếng Việt</option>
    </select>
  )
}

export default LanguageSwitcher
