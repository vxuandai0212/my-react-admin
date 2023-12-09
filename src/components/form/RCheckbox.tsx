import { useTranslation } from 'react-i18next'
import RIcon from '@/components/icon/RIcon'

interface Props {
  label?: string
  value: Array<any>
  disabled?: boolean
  options: RCheckboxOptions[]
  updateValue: (value: any) => void
  className?: string
}

const RCheckbox: React.FC<Props> = ({
  label,
  value,
  disabled,
  options,
  updateValue,
  className
}) => {
  const { t } = useTranslation()

  const setValue = (v: any) => {
    if (disabled) return
    updateValue(v)
  }

  function isActive(v: any) {
    return value.indexOf(v) !== -1
  }

  function outerCheckboxBackground(v: any) {
    return isActive(v) ? '#1B51E5' : '#EEE'
  }

  const listOptions = options.map((item) => (
    <div
      key={item.key}
      className={`flex gap-10 items-center ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      onClick={() => setValue(item.value)}
    >
      <div
        className={`flex justify-center items-center rounded-4 width-20 height-20 transition ${
          disabled ? 'opacity70' : ''
        }`}
        style={{
          background: `${outerCheckboxBackground(item.value)}`,
        }}
      >
        <RIcon
          icon='tick'
          className={`${disabled ? 'opacity70' : ''} ${isActive(item.value) ? 'fill-white' : 'fill-#EEE'}`}
          width='10.728px'
          height='8px'
        />
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
      {label ? (
        <div
          className='mb-17 color-primary-grey font-size-14 font-400 line-height-21 cursor-default'
        >
          {label}
        </div>
      ) : null}
      <div className='flex flex-col gap-10'>{listOptions}</div>
    </div>
  )
}

export default RCheckbox
