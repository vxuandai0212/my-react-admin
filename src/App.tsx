import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import type { DatePickerProps, MenuProps } from 'antd'
import { ConfigProvider, DatePicker } from 'antd'
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
import RSelect from './components/form/RSelect'
import RDatepicker from './components/form/RDatepicker'
import AddButton from './components/button/AddButton'
import HamburgerMenu from './components/button/HamburgerMenu'
import LangButton from './components/button/LangButton'
import PrimaryButton from './components/button/PrimaryButton'
import RestingButton from './components/button/RestingButton'
import { useLoading } from './hooks'
import { fetchPopularCategory } from './service'
import CategoryCard from './components/card/CategoryCard'
import SimpleSearch from './components/search/SimpleSearch'
import { AppRouter } from './router/AppRouter'

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

  const [dropdownValue, setDropdownValue] = useState<string>('')
  const dropdownOptions: MenuProps['items'] = [
    {
      key: 'Option 1',
      label: 'Option 1',
    },
    {
      key: 'Option 2',
      label: 'Option 2',
    },
    {
      key: 'Option 3',
      label: 'Option 3',
    },
    {
      key: 'Option 4',
      label: 'Option 4',
    },
    {
      key: 'Option 5',
      label: 'Option 5',
    },
    {
      key: 'Option 6',
      label: 'Option 6',
    },
    {
      key: 'Option 7',
      label: 'Option 7',
    },
    {
      key: 'Option 8',
      label: 'Option 8',
    },
    {
      key: 'Option 9',
      label: 'Option 9',
    },
    {
      key: 'Option 10',
      label: 'Option 10',
    },
  ]

  const [datePickerValue, setDatePickerValue] = useState<number>()

  const { loading, startLoading, endLoading } = useLoading(false)

  const I18N_MAP: { [key: string]: I18nType.I18nKey } = {
    electronic: 'page.report.popularCategory.electronic',
    accessory: 'page.report.popularCategory.accessory',
    'digital-good': 'page.report.popularCategory.digitalGood',
  }

  const ICON_MAP: { [key: string]: LocalIcon } = {
    electronic: 'laptop',
    accessory: 'diamond',
    'digital-good': 'keyboard',
  }

  const ICON_FILL_COLOR = {
    electronic: 'primary',
    accessory: 'danger',
    'digital-good': 'primary-grey',
  }

  const ICON_BACKGROUND_COLOR = {
    electronic: 'primary-resting',
    accessory: 'danger-light',
    'digital-good': 'background-2',
  }

  const [categoryCardData, setCategoryCardData] =
    useState<Card.CategoryCard[]>()

  function setData(value: ApiReport.PopularCategory[]) {
    const temp = value.map(function (i): Card.CategoryCard {
      return {
        icon: ICON_MAP[i.type],
        title: I18N_MAP[i.type],
        value: i.value,
        iconFillColor: ICON_FILL_COLOR[i.type],
        iconBackgroundColor: ICON_BACKGROUND_COLOR[i.type],
      }
    })
    setCategoryCardData(temp)
  }

  async function getData() {
    startLoading()
    const { data } = await fetchPopularCategory()
    if (data) {
      setTimeout(() => {
        setData(data)
        endLoading()
      }, 1000)
    }
  }

  function init() {
    getData()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <ConfigProvider locale={ANT_MAP_LOCALE[i18n.language]}>
      <AppRouter />
    </ConfigProvider>
  )
}

export default App
