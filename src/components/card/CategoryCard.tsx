import { useNumber } from '@/hooks/use-number'
import { useTranslation } from 'react-i18next'
import RIcon from '@/components/icon/RIcon'

const CategoryCard: React.FC<Card.CategoryCard> = ({
  title,
  value,
  icon,
  iconFillColor = 'primary',
  iconBackgroundColor = 'primary-resting',
}) => {
  const { t } = useTranslation()
  const { numberFormat } = useNumber()
  const formatValue = () => numberFormat(value)

  return (
    <div className='background-color-background-1 p-22-24-20-30 flex justify-between items-center rounded-12 transition'>
      <div className='flex flex-col'>
        <div className='color-primary-dark font-size-18 font-700 line-height-27'>
          {formatValue()}
        </div>
        <div className='color-primary-grey font-size-14 font-400 line-height-21'>
          {t(title)}
        </div>
      </div>
      <div
        className='flex justify-center items-center rounded-10 width-56 height-56'
        style={{ backgroundColor: `var(--${iconBackgroundColor})` }}
      >
        <RIcon
          className='width-20'
          fill={`var(--${iconFillColor})`}
          icon={icon}
        />
      </div>
    </div>
  )
}

export default CategoryCard
