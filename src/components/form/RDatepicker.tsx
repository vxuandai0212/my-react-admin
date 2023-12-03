import { DatePicker, DatePickerProps } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './RDatepicker.css'

interface Props {
  label: I18nType.I18nKey
  value: any
  rules?: any
  placeholder: I18nType.I18nKey
  disabled?: boolean
  type: 'date' | 'week' | 'month' | 'quarter' | 'year'
  setDatePicker: (v: any) => void
}

const RDatepicker: React.FC<Props> = ({
  label,
  value,
  rules,
  placeholder,
  disabled,
  type,
  setDatePicker
}) => {
  const {t} = useTranslation()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [inputFocus, setInputFocus] = useState<boolean>(false)
  const [firstFocus, setFirstFocus] = useState<boolean>(false)
  const isRequired = useMemo(() => {
    if (rules && rules.length > 0) {
      for (let i = 0; i < rules.length; i++) {
        if ('required' in rules[i] && rules[i].required) {
          setErrorMessage(rules[i].message)
          return true
        }
      }
    }
    return false
  }, [rules])

  useEffect(() => {
    validate()
  }, [inputFocus, value])

  const onBlur = () => {
    setInputFocus(false)
  }

  const validate = () => {
    if (isRequired && !value && !inputFocus && firstFocus) {
      setError(true)
    } else {
      setError(false)
    }
  }


  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
    setDatePicker(date)
  }

const borderBottomColor = () =>
  error
    ? 'var(--danger)'
    : inputFocus
    ? 'var(--primary)'
    : 'var(--outline)'

  return (
    <div>
      <div
        className={`color-primary-grey font-size-14 font-400 line-height-21 cursor-default ${
          isRequired ? 'required' : ''
        }`}
      >
        {t(label)}
      </div>
      <div
        className='transition border-bottom-solid border-bottom-1 p-6-0-17-0 flex flex-row gap-2'
        style={{ borderBottomColor: borderBottomColor() }}
      >
        <DatePicker
          className='__input__ flex-grow border-none color-primary-dark font-size-14 font-700'
          onChange={onChange}
          picker={type}
          disabled={disabled}       
          placeholder={t(placeholder)}   
          onFocus={() => {setInputFocus(true); setFirstFocus(true)}}
          onBlur={() => onBlur()}
          value={value}
        />
      </div>
      <div
        className='color-danger font-size-14 font-400 line-height-21 transition'
        style={{ opacity: `${error ? 1 : 0}` }}
      >
        {t(errorMessage)}
      </div>
    </div>
  )
}

export default RDatepicker
