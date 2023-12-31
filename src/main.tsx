import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import App from './App.tsx'
import i18next from 'i18next'
import setupAssets from './plugins/assets.ts'
import { setupI18n } from './locales/index.ts'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

async function setupApp() {
  setupAssets()
  setupI18n()
}

setupApp()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
)
