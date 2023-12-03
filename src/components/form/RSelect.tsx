import { Dropdown, MenuProps } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import RIcon from '@/components/icon/RIcon'

interface Props {
  label: I18nType.I18nKey
  value: any
  rules?: any
  icon?: LocalIcon
  placeholder: I18nType.I18nKey
  disabled?: boolean
  options: MenuProps['items']
  onUpdateValue: (v: string) => void
}

const RSelect: React.FC<Props> = ({
  label,
  value,
  rules,
  icon,
  placeholder,
  disabled,
  options,
  onUpdateValue,
}) => {
  const { t } = useTranslation()
  const [errorMessage, setErrorMessage] = useState<I18nType.I18nKey>(null!)
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

  const showError = () => (error ? 1 : 0)

  useEffect(() => {
    validate()
  }, [value, inputFocus])

  const color = () =>
    value && value.trim() !== '' ? 'var(--primary-dark)' : 'var(--primary-grey)'

  const borderBottomColor = () =>
    error ? 'var(--danger)' : inputFocus ? 'var(--primary)' : 'var(--outline)'

  const validate = () => {
    if (isRequired && !value && firstFocus) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
    onUpdateValue(key)
  }

  return (
    <div>
      <div
        className={`color-primary-grey font-size-14 font-400 line-height-21 cursor-default ${
          isRequired ? 'required' : ''
        }`}
      >
        {t(label)}
      </div>
      <Dropdown
        menu={{ items: options, selectable: true, onSelect: onSelect }}
        trigger={['click']}
        overlayStyle={{ maxHeight: '265px', overflowY: 'auto' }}
      >
        <div
          className='transition border-bottom-solid border-bottom-1 p-6-0-17-0 flex flex-row gap-2'
          style={{ borderBottomColor: borderBottomColor() }}
        >
          <input
            className='__input__ flex-grow border-none color-primary-dark font-size-14 font-700'
            type='text'
            placeholder={t(placeholder)}
            value={value}
            disabled={disabled}
            onFocus={() => {
              setInputFocus(true)
              setFirstFocus(true)
            }}
            onBlur={() => setInputFocus(false)}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              onUpdateValue(e.target.value)
            }
          />
          {icon ? (
            <div
              className={`flex justify-center items-center width-18 height-18 ${
                disabled ? 'opacity70' : ''
              }`}
            >
              <RIcon icon={icon} fill={color()} />
            </div>
          ) : null}
        </div>
      </Dropdown>
      <div
        className='color-danger font-size-14 font-400 line-height-21 transition'
        style={{ opacity: showError() }}
      >
        {t(errorMessage)}
      </div>
    </div>
  )
}

export default RSelect
