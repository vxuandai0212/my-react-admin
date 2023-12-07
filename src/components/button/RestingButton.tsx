import { useTranslation } from 'react-i18next'

interface Props {
  label: I18nType.I18nKey
  className?: string
  onClick: () => void
}

const RestingButton: React.FC<Props> = ({ label, className, onClick }) => {
  const { t } = useTranslation()
  return (
    <div
      className={`cursor-pointer hover:background-color-primary-hover hover:color-white color-primary background-color-primary-resting font-size-14 font-700 rounded-8 transition ${className}`}
      onClick={onClick}
    >
      {t(label)}
    </div>
  )
}

export default RestingButton
