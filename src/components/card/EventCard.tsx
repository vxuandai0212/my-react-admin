import { useDatetime } from '@/hooks/use-datetime'
import RIcon from '../icon/RIcon'
import { useTranslation } from 'react-i18next'

const COLOR = {
  primary: '#5E81F4',
  success: '#7CE7AC',
  danger: '#FF808B',
  warning: '#F4BE5E',
}

const EventCard: React.FC<Card.EventCard> = ({
  date,
  title,
  description,
  color,
}) => {
  const { t } = useTranslation()
  const { datetime } = useDatetime()

  const formatDate = () => datetime(date).format('hh:mm A')
  return (
    <div className='p-16-14-16-21 background-color-background-1 flex flex-col gap-4 rounded-12 transition'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-6 items-center'>
          <div
            className='width-8 height-8 rounded-50'
            style={{ backgroundColor: `${COLOR[color]}` }}
          ></div>
          <div className='color-primary font-size-12 font-799 line-height-18'>
            {formatDate()}
          </div>
        </div>
        <RIcon className='fill-primary-grey width-14' icon='three-dot' />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='color-primary-dark font-size-14 font-700 line-height-21'>
          {t(title)}
        </div>
        <div className='color-primary-grey font-size-12 font-400 line-height-18'>
          {t(description)}
        </div>
      </div>
    </div>
  )
}

export default EventCard
