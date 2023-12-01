import { useTranslation } from 'react-i18next'

interface Options {
  key: any
  label: I18nType.I18nKey
  value: any
}

interface Props {
  label: I18nType.I18nKey
  value: any
  disabled?: boolean
  options: Options[]
  onChooseOption: (v: any) => void
}

const RRadio: React.FC<Props> = ({
  label,
  value,
  disabled,
  options,
  onChooseOption,
}) => {
  const { t } = useTranslation()
  const setValue = (v: any) => {
    if (disabled) return
    onChooseOption(v)
  }

  const isActive = (v: any) => {
    return v === value
  }

  const innerRadioBackground = (v: any) => {
    return v === value ? '#FFF' : '#EEE'
  }

  const outerRadioBackground = (v: any) => {
    return v === value ? '#1B51E5' : '#EEE'
  }
  const outerRadioBorderRadius = (v: any) => {
    return v === value ? '10px' : '4px'
  }

  const listOptions = options.map((item) => (
    <div
      key={item.key}
      className={`flex gap-10 items-center ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={() => setValue(item.value)}
    >
      <div
        className={`flex justify-center items-center width-20 height-20 transition ${
          disabled ? 'opacity70' : ''
        }`}
        style={{
          background: outerRadioBackground(item.value),
          borderRadius: outerRadioBorderRadius(item.value),
        }}
      >
        <div
          className={`width-8 height-8 rounded-10 transition ${
            disabled ? 'opacity70' : ''
          }`}
          style={{ background: innerRadioBackground(item.value) }}
        ></div>
      </div>
      <div
        className={`font-size-14 mt-3 font-700 transition ${
          isActive(item.value) ? 'color-primary-dark' : 'color-primary-grey'
        } ${disabled ? 'opacity70' : ''}`}
      >
        {t(item.label)}
      </div>
    </div>
  ))

  return (
    <div>
      <div className='mb-17 color-primary-grey font-size-14 font-400 line-height-21 cursor-default'>
        {t(label)}
      </div>
      <div className='flex flex-col gap-10'>{listOptions}</div>
    </div>
  )
}

export default RRadio
