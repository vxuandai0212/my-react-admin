import EventCard from '@/components/card/EventCard'
import { BarLoading } from '@/components/loading/BarLoading'
import { Dates, useLoading } from '@/hooks'
import { fetchUpcomingEvent } from '@/service'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const UpcomingEvent = () => {
  const { t } = useTranslation()

  const { loading, startLoading, endLoading } = useLoading(false)

  const [data, setStateData] = useState<Card.EventCard[]>()

  function setData(value: ApiReport.UpcomingEvent[]) {
    const mapData = value.map(function (i): Card.EventCard {
      const diff = Math.ceil(Dates.getToday().diff(i.startAt, 'minutes', true))
      let color: Card.EventCard['color'] = 'primary'
      if (diff < 60) {
        color = 'danger'
      }
      return {
        date: i.startAt,
        title: i.title as any,
        description: i.description as any,
        color,
      }
    })
    setStateData(mapData)
  }

  async function getData() {
    startLoading()
    const { data } = await fetchUpcomingEvent()
    if (data) {
      setTimeout(() => {
        setData(data)
        endLoading()
      }, 1000)
    }
  }

  function init() {
    getData()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div className='2xl:col-span-3 <lg:col-span-3 col-span-1 flex flex-col gap-18 2xl:p-20-23-20-28 p-28-23-28-28 background-color-white rounded-12'>
      <div className='color-primary-dark font-size-16 font-700 line-height-24'>
        {t('page.report.upComingEvent.title')}
      </div>
      {loading ? (
        <BarLoading />
      ) : (
        <div className='flex flex-col gap-9'>
          {data?.map((item) => (
            <EventCard key={item.title} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default UpcomingEvent
