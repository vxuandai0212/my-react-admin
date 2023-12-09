import { BarChart, BarChartProps } from '@/components/chart/BarChart'
import { BarLoading } from '@/components/loading/BarLoading'
import { useLoading } from '@/hooks'
import { fetchRoadTransportSpend } from '@/service'
import { useEffect, useState } from 'react'

const RoadTransport: React.FC<{ className?: string }> = ({ className }) => {
  const { loading, startLoading, endLoading } = useLoading(false)

  const [chartData, setChartDataState] = useState<BarChartProps['option']>()

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
        i.country = I18N_MAP[i.country]
        return i
      }),
      yAxis: {
        name: 'page.report.roadTransportSpendChart.unit',
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
        <BarLoading className='height-320 grow flex justify-center items-center w-full' />
      ) : (
        chartData && <BarChart option={chartData} className='height-270 w-full overflow-hidden' />
      )}
    </div>
  )
}

export default RoadTransport
