import { useNumber, Dates } from '@/hooks'
import { useTranslation } from 'react-i18next'
import RIcon from '../icon/RIcon'

const ItemCard: React.FC<Card.ItemCard> = ({
  label,
  value,
  valueType = 'number',
  code,
  icon,
}) => {
  const { t } = useTranslation()
  const { moneyFormat, numberFormat } = useNumber()

  const formatValue = () => {
    if (valueType === 'currency') {
      return `+${moneyFormat('currency', 'USD', value)}`
    } else if (valueType === 'datetime') {
      return Dates.timeFromNow(value)
    } else {
      return numberFormat(value)
    }
  }

  const formatLabel = () => {
    if (label === 'page.report.latestUpdate.itemSale') {
      return `${t(label)} #${code}`
    } else {
      return t(label)
    }
  }
  return (
    <div className='p-17-20-17-17 background-color-background-1 flex justify-between items-center rounded-12 transition'>
      <div className='flex gap-13 items-center'>
        <div className='flex items-center justify-center width-38 height-38 rounded-8 background-color-primary-resting'>
          <RIcon className='fill-primary width-16' icon={icon} />
        </div>
        <div className='color-primary-dark font-size-14 font-700 line-height-21'>
          {formatLabel()}
        </div>
      </div>
      <div className='color-primary-grey font-size-12 font-700 line-height-18'>
        {formatValue()}
      </div>
    </div>
  )
}

export default ItemCard
