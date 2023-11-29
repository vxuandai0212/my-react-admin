import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import type { DatePickerProps } from 'antd'
import { ConfigProvider, DatePicker } from 'antd'
import './App.css'
import Weather from './Weather'
import { ANT_DATE_MAP_LOCALE, ANT_MAP_LOCALE } from '@/locales'
import { useTranslation } from 'react-i18next'
import 'dayjs/locale/en'
import 'dayjs/locale/fr'
import 'dayjs/locale/es'
import 'dayjs/locale/vi'
import { ReactSVG } from 'react-svg'

function App() {
  const [count, setCount] = useState(0)

  const { i18n } = useTranslation()

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <ConfigProvider locale={ANT_MAP_LOCALE[i18n.language]}>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          {/* <img src={reactLogo} className='logo react' alt='React logo' /> */}
          <ReactSVG className={'fill-red-500'} src={reactLogo} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <Weather />
      <DatePicker
        locale={ANT_DATE_MAP_LOCALE[i18n.language]}
        onChange={onChange}
      />
    </ConfigProvider>
  )
}

export default App
