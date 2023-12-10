import { useTranslation } from 'react-i18next'

interface Props {
  label: I18nType.I18nKey
  className?: string
  onClick: () => void
}

const PrimaryButton: React.FC<Props> = ({ label, className, onClick }) => {
  const { t } = useTranslation()
  return (
    <div
      className={`cursor-pointer font-700 hover:background-color-primary-hover rounded-8 font-size-14 background-color-primary color-white transition ${className}`}
      onClick={() => onClick()}
    >
      {t(label)}
    </div>
  )
}

export default PrimaryButton
