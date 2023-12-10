import { ANT_MAP_LOCALE } from '@/locales'
import { useTranslation } from 'react-i18next'
import { ConfigProvider } from 'antd'

import { AppRouter } from './router/AppRouter'

function App() {
  const { i18n } = useTranslation()

  return (
    <ConfigProvider locale={ANT_MAP_LOCALE[i18n.language]}>
      <AppRouter />
    </ConfigProvider>
  )
}

export default App
