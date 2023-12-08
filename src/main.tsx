import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import App from './App.tsx'
import i18next from 'i18next'
import { BarLoading } from './components/loading/BarLoading.tsx'
import setupAssets from './plugins/assets.ts'
import { setupI18n } from './locales/index.ts'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

async function setupApp() {
  setupAssets()

  // setupStore(app)

  // vue custom directives
  // setupDirectives(app)

  // vue router
  // await setupRouter(app)

  setupI18n()
}

setupApp()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <Suspense fallback={<BarLoading />}>
          <App />
        </Suspense>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
)
