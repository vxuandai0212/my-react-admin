import { useNumber } from '@/hooks'
import { useTranslation } from 'react-i18next'
import RIcon from '../icon/RIcon'
import { Progress } from 'antd'


const COLOR = {
  primary: '#5E81F4',
  success: '#7CE7AC',
  danger: '#FF808B',
  warning: '#F4BE5E',
}

const ProgressCard: React.FC<Card.ProgressCard> = ({
  label,
  description,
  valuePrefix,
  value,
  valueType = 'number',
  currencyType = 'USD',
  progressColor = 'primary',
  trend = 'up',
  percent = 60,
  backgroundColor = 'background-extra-light',
  className
}) => {
  const { t } = useTranslation()
  const { numberFormat, moneyFormat } = useNumber()

  const trendColor = () => (trend === 'up' ? '#7CE7AC' : '#FF808B')

  const formatValue = () => {
    if (valueType === 'currency') {
      return moneyFormat('currency', currencyType, value as number)
    } else {
      return numberFormat(value as number)
    }
  }
  return (
    <div
      className={`height-98 p-14-22-20-26 flex flex-col grow gap-15 rounded-12 transition background-color-${backgroundColor} ${className}`}
    >
      <div className='flex justify-between items-center'>
        <div>
          <div className='color-primary-dark font-size-18 font-700 line-height-27'>
            {t(label)}
          </div>
          <div className='color-primary-grey font-size-14 font-400 line-height-21'>
            {t(description)}
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='color-primary-dark font-size-20 font-700 line-height-32'>
            {valuePrefix}
            {formatValue()}
          </div>
          <RIcon
            icon='arrow'
            width='12px'
            height='12px'
            className={`${trend === 'down' ? 'rotate-x-180' : ''} fill-${trendColor()}`}
          />
        </div>
      </div>
      <Progress
        type='line'
        strokeColor={COLOR[progressColor]}
        trailColor='#F6F6F6'
        percent={percent}
        showInfo={false}
        size={'small'}
      />
    </div>
  )
}

export default ProgressCard
