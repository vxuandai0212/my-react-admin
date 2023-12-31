import { useEffect, useMemo, useState } from 'react'
import RIcon from '@/components/icon/RIcon'
import { useTranslation } from 'react-i18next'

interface Props {
  label: I18nType.I18nKey
  rules?: any
  icon?: LocalIcon
  placeholder: I18nType.I18nKey
  type?: InputType
  disabled?: boolean,
  value: string,
  onInput: (e: string) => void
  className?: string
}

const RInput: React.FC<Props> = ({
  label,
  rules,
  icon,
  placeholder,
  type,
  disabled,
  value,
  onInput,
  className
}) => {
  const { t } = useTranslation()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [inputFocus, setInputFocus] = useState<boolean>(false)
  const [firstFocus, setFirstFocus] = useState<boolean>(true)

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
    if (isRequired && !value && !inputFocus && !firstFocus) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const borderBottomColor = () =>
    error ? 'var(--danger)' : inputFocus ? 'var(--primary)' : 'var(--outline)'

  const color = () =>
    value && value.trim() !== '' ? 'primary-dark' : 'primary-grey'

  return (
    <div className={`${className}`}>
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
        <input
          className='__input__ flex-grow border-none color-primary-dark font-size-14 font-700'
          type={type}
          placeholder={t(placeholder)}
          value={value}
          disabled={disabled}
          onFocus={() => {setInputFocus(true); setFirstFocus(false)}}
          onBlur={() => onBlur()}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            onInput(e.target.value)
          }
        />
        {icon ? (
          <div
            className={`flex justify-center items-center width-18 height-18 ${
              disabled ? 'opacity70' : ''
            }`}
          >
            <RIcon className={`fill-${color()} transition`} icon={icon} height='16px' />
          </div>
        ) : null}
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

export default RInput
