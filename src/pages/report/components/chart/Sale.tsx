import { PolarBarChart } from '@/components/chart/PolarBarChart'
import { BarLoading } from '@/components/loading/BarLoading'
import { useLoading } from '@/hooks'
import { fetchSale } from '@/service'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Sale: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation()
  const { loading, startLoading, endLoading } = useLoading(false)

  const [chartData, setChartDataState] = useState<any>()

  const I18N_MAP: { [key: string]: I18nType.I18nKey } = {
    housing: 'page.report.saleChart.housing',
    food: 'page.report.saleChart.food',
    clothing: 'page.report.saleChart.clothing',
    travelOrTransport: 'page.report.saleChart.travelOrTransport',
    entertainment: 'page.report.saleChart.entertainment',
    luxuryGood: 'page.report.saleChart.luxuryGood',
  }

  function setChartData(data: ApiReport.Sale) {
    const { dimensions, source } = data
    const mapData = {
      dimensions: dimensions.map((i) => t(I18N_MAP[i])),
      source,
    }
    setChartDataState(mapData)
  }

  async function getChartData() {
    startLoading()
    const { data } = await fetchSale()
    if (data) {
      setTimeout(() => {
        setChartData(data)
        endLoading()
      }, 1000)
    }
  }

  function init() {
    getChartData()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div className={`${className}`}>
      <div className='flex items-center justify-center'>
        <div className='cursor-default color-primary-dark font-size-18 font-700 line-height-27'>
          {t('page.report.saleChart.title')}
        </div>
      </div>
      <div className='flex justify-center items-center grow'>
        {loading ? (
          <BarLoading className='height-320 grow' />
        ) : (
          <PolarBarChart option={chartData} className='height-270 grow' />
        )}
      </div>
    </div>
  )
}

export default Sale
