import IconButton from '@/components/button/IconButton'
import { LineChart, LineChartProps } from '@/components/chart/LineChart'
import { BarLoading } from '@/components/loading/BarLoading'
import { useLoading } from '@/hooks'
import { fetchSpreadConsumption } from '@/service'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SpreadConsumption: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation()

  const [fromDate, setFromDate] = useState<number>(
    dayjs().startOf('day').valueOf()
  )
  const [toDate, setToDate] = useState<number>(dayjs().endOf('day').valueOf())

  const { loading, startLoading, endLoading } = useLoading(false)

  const [chartData, setChartDataState] = useState<LineChartProps['option']>()
  function setChartData(data: ApiReport.SpreadConsumption) {
    const { x, y } = data
    const { margarine, lowfat, butter } = y
    const mapData = {
      legend: [
        'page.report.spreadConsumptionChart.legend.margarine',
        'page.report.spreadConsumptionChart.legend.lowfat',
        'page.report.spreadConsumptionChart.legend.butter',
      ],
      x,
      y: [
        {
          name: 'page.report.spreadConsumptionChart.legend.margarine',
          data: margarine,
        },
        {
          name: 'page.report.spreadConsumptionChart.legend.lowfat',
          data: lowfat,
        },
        {
          name: 'page.report.spreadConsumptionChart.legend.butter',
          data: butter,
        },
      ],
      yAxis: {
        name: 'page.report.spreadConsumptionChart.unit',
      },
    }
    setChartDataState(mapData)
  }

  async function getChartData() {
    startLoading()
    const { data } = await fetchSpreadConsumption(fromDate, toDate)
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
      <div className='flex justify-between items-center p-0-23-0-28 relative'>
        <div className='color-primary-dark font-size-18 font-700 line-height-27'>
          {t('page.report.spreadConsumptionChart.title')}
        </div>
        <IconButton icon='date' className='grow-0 shrink-0' />
      </div>
      {loading ? (
        <BarLoading className='height-320 grow flex justify-center items-center w-full' />
      ) : (
        chartData && (
          <LineChart option={chartData} className='height-320 grow overflow-hidden' />
        )
      )}
    </div>
  )
}

export default SpreadConsumption
