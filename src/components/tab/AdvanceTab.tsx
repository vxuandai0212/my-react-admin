import { useTranslation } from 'react-i18next'
import RIcon from '../icon/RIcon'

interface Props {
  tabs: Tab.AdvanceTabItem[]
  active?: any
  onChooseTab: (v: any) => void
}

const AdvanceTab: React.FC<Props> = ({ tabs, active, onChooseTab }) => {
  const { t } = useTranslation()
  const renderTabs = tabs.map((item, index) => {
    return (
      <div
        key={item.key}
        onClick={() => onChooseTab(item.key)}
        className={`p-26-33-26-33 flex gap-21 items-center cursor-pointer transition ${
          index < tabs.length - 1
            ? 'border-bottom-1 border-bottom-solid border-bottom-color-EEE'
            : ''
        }`}
      >
        <RIcon
          icon={item.icon}
          className={`width-22 transition ${
            item.key === active ? 'fill-primary' : 'fill-primary-grey'
          }`}
        />
        <div className='flex flex-col gap-3'>
          <div
            className={`font-size-14 font-700 transition ${
              item.key === active ? 'color-primary' : 'color-primary-dark'
            }`}
          >
            {t(item.label)}
          </div>
          <div className='font-size-12 font-400 color-primary-grey'>
            {t(item.description)}
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className='rounded-12 border-1 border-solid border-color-resting-outline background-color-white flex flex-col'>
      {renderTabs}
    </div>
  )
}

export default AdvanceTab
