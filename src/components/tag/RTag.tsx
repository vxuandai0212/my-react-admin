import { useTranslation } from 'react-i18next'

interface Props {
  label: I18nType.I18nKey
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  className?: string
}

const RTag: React.FC<Props> = ({ label, type, className }) => {
  const { t } = useTranslation()
  const BACKGROUND_COLOR = {
    primary: 'primary-resting',
    success: 'sucess-light',
    warning: 'warning-light',
    danger: 'danger-light',
    info: 'background-light',
    default: 'secondary',
  }

  const TEXT_COLOR = {
    primary: 'primary-hard',
    success: 'success-hard',
    warning: 'warning',
    danger: 'danger',
    info: 'primary-grey',
    default: 'default',
  }

  const backgroundColor = () => BACKGROUND_COLOR[type!]

  const textColor = () => TEXT_COLOR[type!]
  return (
    <div
      className={`width-145 height-36 rounded-8 flex justify-center items-center font-size-14 font-700 cursor-default ${className}`}
      style={{
        backgroundColor: `var(--${backgroundColor})`,
        color: `var(--${textColor})`,
      }}
    >
      {t(label)}
    </div>
  )
}

export default RTag
