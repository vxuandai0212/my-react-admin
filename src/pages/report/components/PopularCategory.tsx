import CategoryCard from '@/components/card/CategoryCard'
import { BarLoading } from '@/components/loading/BarLoading'
import { useLoading } from '@/hooks'
import { fetchPopularCategory } from '@/service'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const PopularCategory = () => {
  const { t } = useTranslation()
  const { loading, startLoading, endLoading } = useLoading(false)

  const I18N_MAP: { [key: string]: I18nType.I18nKey } = {
    electronic: 'page.report.popularCategory.electronic',
    accessory: 'page.report.popularCategory.accessory',
    'digital-good': 'page.report.popularCategory.digitalGood',
  }

  const ICON_MAP: { [key: string]: LocalIcon } = {
    electronic: 'laptop',
    accessory: 'diamond',
    'digital-good': 'keyboard',
  }

  const ICON_FILL_COLOR = {
    electronic: 'primary',
    accessory: 'danger',
    'digital-good': 'primary-grey',
  }

  const ICON_BACKGROUND_COLOR = {
    electronic: 'primary-resting',
    accessory: 'danger-light',
    'digital-good': 'background-2',
  }

  const [data, setStateData] = useState<Card.CategoryCard[]>()

  function setData(value: ApiReport.PopularCategory[]) {
    const mapData = value.map(function (i): Card.CategoryCard {
      return {
        icon: ICON_MAP[i.type],
        title: I18N_MAP[i.type],
        value: i.value,
        iconFillColor: ICON_FILL_COLOR[i.type],
        iconBackgroundColor: ICON_BACKGROUND_COLOR[i.type],
      }
    })
    setStateData(mapData)
  }

  async function getData() {
    startLoading()
    const { data } = await fetchPopularCategory()
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
      <div className='flex flex-col'>
        <div className='color-primary-dark font-size-16 font-700 line-height-24'>
          {t('page.report.popularCategory.title')}
        </div>
        <div className='color-primary-grey font-size-14 font-400 line-height-21'>
          {t('page.report.popularCategory.description')}
        </div>
      </div>
      {loading ? (
        <BarLoading />
      ) : (
        <div className='flex flex-col gap-9'>
          {data?.map((item) => (
            <CategoryCard key={item.title} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PopularCategory
