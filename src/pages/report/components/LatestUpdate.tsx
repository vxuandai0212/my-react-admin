import ItemCard from '@/components/card/ItemCard'
import { BarLoading } from '@/components/loading/BarLoading'
import { useLoading } from '@/hooks'
import { fetchLatestUpdate } from '@/service'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LatestUpdate = () => {
  const { t } = useTranslation()
  const { loading, startLoading, endLoading } = useLoading(false)

  const I18N_MAP: { [key: string]: I18nType.I18nKey } = {
    'item-sale': 'page.report.latestUpdate.itemSale',
    'lead-created': 'page.report.latestUpdate.newLeadCreated',
    'item-upload-complete': 'page.report.latestUpdate.itemUploadComplete',
    'email-notification-sent': 'page.report.latestUpdate.emailNotificationSent',
  }

  const ICON_MAP: { [key: string]: LocalIcon } = {
    'item-sale': 'cart',
    'lead-created': 'create',
    'item-upload-complete': 'upload',
    'email-notification-sent': 'notification',
  }

  const [data, setStateData] = useState<Card.ItemCard[]>()

  function setData(value: ApiReport.LatestUpdate[]) {
    const mapData = value.map(function (i): Card.ItemCard {
      let label = I18N_MAP[i.type]
      let valueType: Card.ItemCard['valueType'] = 'number'
      if (i.type === 'item-sale') {
        valueType = 'currency'
      } else {
        valueType = 'datetime'
      }
      return {
        label,
        value: i.value as number,
        code: i.code,
        valueType,
        icon: ICON_MAP[i.type],
      }
    })
    setStateData(mapData)
  }

  async function getData() {
    startLoading()
    const { data } = await fetchLatestUpdate()
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
        {t('page.report.latestUpdate.title')}
      </div>
      {loading ? (
        <BarLoading />
      ) : (
        <div className='flex flex-col gap-9'>
          {data?.map((item) => (
            <ItemCard key={item.label} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default LatestUpdate
