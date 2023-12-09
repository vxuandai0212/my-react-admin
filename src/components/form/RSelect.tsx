import { Popover } from 'antd'
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
  options: any
  onUpdateValue: (v: string) => void
  className?: string
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
  className
}) => {
  const { t } = useTranslation()
  const [errorMessage, setErrorMessage] = useState<I18nType.I18nKey>(null!)
  const [error, setError] = useState<boolean>(false)
  const [inputFocus, setInputFocus] = useState<boolean>(false)
  const [firstFocus, setFirstFocus] = useState<boolean>(false)
  const [openPopover, setOpenPopover] = useState<boolean>(false)
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

  const renderContent = options?.map((item: any) => {
    const color =
      item.type === 'warning'
        ? 'warning'
        : item.type === 'danger'
        ? 'danger'
        : 'primary-dark'
    return (
      <div
        key={item?.key}
        style={{ color: `var(--${color})` }}
        className='cursor-pointer p-12-20-13-17 line-height-24 font-size-14 font-700 hover:color-primary width-300 hover:background-color-background-extra-light transition'
        onClick={() => {
          onUpdateValue(item.label)
          setOpenPopover(false)
        }}
      >
        {item.label}
      </div>
    )
  })

  const content = (
    <div style={{ maxHeight: '265px', overflowY: 'auto' }}>{renderContent}</div>
  )

  return (
    <div className={`${className}`}>
      <div
        className={`color-primary-grey font-size-14 font-400 line-height-21 cursor-default ${
          isRequired ? 'required' : ''
        }`}
      >
        {t(label)}
      </div>
      <Popover
        open={openPopover}
        content={content}
        trigger={'click'}
        onOpenChange={(visible) => setOpenPopover(visible)}
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
              <RIcon icon={icon} className={`fill-${color()}`} />
            </div>
          ) : null}
        </div>
      </Popover>
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
