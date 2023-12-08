import { BarChart } from '@/components/chart/BarChart'
import { BarLoading } from '@/components/loading/BarLoading'
import { useLoading } from '@/hooks'
import { fetchRoadTransportSpend } from '@/service'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const RoadTransport: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation()
  const { loading, startLoading, endLoading } = useLoading(false)

  const [chartData, setChartDataState] = useState<any>()

  const I18N_MAP: { [key: string]: I18nType.I18nKey } = {
    italia: 'page.report.roadTransportSpendChart.italia',
    portugal: 'page.report.roadTransportSpendChart.portugal',
    uk: 'page.report.roadTransportSpendChart.uk',
    usa: 'page.report.roadTransportSpendChart.usa',
  }

  function setChartData(data: ApiReport.RoadTransportSpend) {
    const { dimensions, source } = data
    const mapData = {
      dimensions,
      source: source.map((i) => {
        i.country = t(I18N_MAP[i.country])
        return i
      }),
      yAxis: {
        name: t('page.report.roadTransportSpendChart.unit'),
      },
    }
    setChartDataState(mapData)
  }

  async function getChartData() {
    startLoading()
    const { data } = await fetchRoadTransportSpend()
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
    <div className={`flex justify-center items-end ${className}`}>
      {loading ? (
        <BarLoading className='height-320 grow' />
      ) : (
        <BarChart option={chartData} className='height-270 grow' />
      )}
    </div>
  )
}

export default RoadTransport
