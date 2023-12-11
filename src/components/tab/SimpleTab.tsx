import { useTranslation } from 'react-i18next'

const SimpleTab: React.FC<Tab.SimpleTab> = ({
  tabs,
  activeTab,
  onChooseTab,
  className = null,
}) => {
  const { t } = useTranslation()
  const renderTabs = tabs.map((item) => {
    return (
      <div
        key={item.label}
        className={`grow-0 shrink-0 hover:background-color-info hover:border-color-info hover:color-white cursor-pointer rounded-8 border-1 border-solid p-11-29-11-29 font-size-14 font-700 transition ${
          item.value === activeTab
            ? 'color-primary-dark border-color-resting-outline'
            : 'color-primary-grey border-color-white'
        }`}
        onClick={() => onChooseTab(item.value)}
      >
        {t(item.label)}
      </div>
    )
  })
  return <div className={`flex gap-6 overflow-x-no-scrollbar ${className}`}>{renderTabs}</div>
}

export default SimpleTab
