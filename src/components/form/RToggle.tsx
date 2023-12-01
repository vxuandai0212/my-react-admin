import { useTranslation } from 'react-i18next'
import RIcon from '../icon/RIcon'

interface Props {
  label: I18nType.I18nKey
  value: boolean
  disabled?: boolean
  onUpdateValue: (v: any) => void
}

const NToggle: React.FC<Props> = ({
  label,
  value,
  disabled,
  onUpdateValue,
}) => {
  const { t } = useTranslation()
  const outerCheckboxBackground = () => (value ? '#1B51E5' : '#EEEEEE')

  const toggle = () => {
    if (disabled) return
    onUpdateValue(!value)
  }
  return (
    <div>
      <div
        className={`flex gap-18 items-center ${
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={toggle}
      >
        <div
          className={`relative rounded-12 width-40 height-22 transition ${
            disabled ? 'opacity70' : ''
          }`}
          style={{
            background: outerCheckboxBackground(),
          }}
        >
          <RIcon
            className={`ease-linear duration-150 delay-0 absolute top-3 ${
              value ? 'left-20' : 'left-4'
            } ${disabled ? 'opacity70' : ''}`}
            width='16px'
            height='16px'
            fill={value ? 'white' : '#98A9BC'}
            icon='oval'
          />
        </div>
        <div
          className={`font-size-14 mt-3 font-700 ${
            value ? 'color-primary-dark' : 'color-primary-grey'
          } ${disabled ? 'opacity70' : ''}`}
        >
          {t(label)}
        </div>
      </div>
    </div>
  )
}

export default NToggle
