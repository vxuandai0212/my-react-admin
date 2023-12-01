import { useEffect, useState } from 'react'
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
import { mockRequest } from '@/service/request'
import { BarLoading } from './components/loading/BarLoading'
import RIcon from '@/components/icon/RIcon'
import RCheckbox from './components/form/RCheckbox'
import RInput from './components/form/RInput'
import RRadio from './components/form/RRadio'
import RToggle from './components/form/RToggle'

function App() {
  console.log('re-render app')
  const [count, setCount] = useState(0)

  const { i18n } = useTranslation()

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  useEffect(() => {
    mockRequest.post<ApiReport.OverviewStat[]>('/reports/overview-stat')
  }, [])

  const [checkboxValue, setCheckboxValue] = useState<Array<number>>([1])
  function handleCheckboxValue(v: any) {
    if (checkboxValue.indexOf(v) === -1) {
      const newArr: number[] = [...checkboxValue, v]
      setCheckboxValue(newArr)
    } else {
      const newArr = checkboxValue.filter((i) => i !== v)
      setCheckboxValue(newArr)
    }
  }

  const checkboxOptions: {
    key: any
    label: I18nType.I18nKey
    value: any
  }[] = [
    {
      key: 1,
      value: 1,
      label: 'page.login.form.rememberLogin.label',
    },
  ]

  const [inputValue, setInputValue] = useState<string>('')
  const rules: any = {
    email: [
      {
        required: true,
        trigger: ['blur', 'input'],
        message: 'page.login.error.email.required',
      },
    ],
    password: [
      {
        required: true,
        trigger: ['blur', 'change'],
        message: 'page.login.error.password.required',
      },
    ],
  }

  const [radioInput, setRadioInput] = useState<string>('')
  const radioOptions: {
    key: any
    label: I18nType.I18nKey
    value: any
  }[] = [
    {
      key: 1,
      value: 1,
      label: 'page.login.form.rememberLogin.label',
    },
    {
      key: 2,
      value: 2,
      label: 'page.login.form.rememberLogin.label',
    },
  ]

  const [toggleValue, setToggleValue] = useState<boolean>(false)

  return (
    <ConfigProvider locale={ANT_MAP_LOCALE[i18n.language]}>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          {/* <img src={reactLogo} className='logo react' alt='React logo' /> */}
          <RIcon className='fill-primary-dark' width='16px' icon='add' />
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
      <BarLoading />
      <RCheckbox
        options={checkboxOptions}
        updateValue={handleCheckboxValue}
        value={checkboxValue}
      />
      <div className='flex flex-col gap-5'>
        <RInput
          label='page.login.form.email.label'
          rules={rules.email}
          icon='email'
          placeholder='page.login.form.email.placeholder'
          type='text'
          value={inputValue}
          onInput={setInputValue}
        />
        <RRadio
          label='page.login.form.email.label'
          onChooseOption={setRadioInput}
          options={radioOptions}
          value={radioInput}
        />
        <RToggle
          label='page.invoice.command.view'
          onUpdateValue={setToggleValue}
          value={toggleValue}
        />
      </div>
    </ConfigProvider>
  )
}

export default App
