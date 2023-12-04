import { useTranslation } from 'react-i18next'

interface Props {
  label: I18nType.I18nKey
  className?: string
}

const RestingButton: React.FC<Props> = ({ label, className }) => {
  const { t } = useTranslation()
  return (
    <div
      className={`cursor-pointer hover:background-color-primary-hover hover:color-white color-primary background-color-primary-resting font-size-14 font-700 rounded-8 transition ${className}`}
    >
      {t(label)}
    </div>
  )
}

export default RestingButton
