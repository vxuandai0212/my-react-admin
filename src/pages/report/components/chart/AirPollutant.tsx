import IconButton from '@/components/button/IconButton'
import { LineChart, LineChartProps } from '@/components/chart/LineChart'
import { BarLoading } from '@/components/loading/BarLoading'
import SimpleTab from '@/components/tab/SimpleTab'
import { useLoading } from '@/hooks'
import { fetchAirPollutant } from '@/service'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const AirPollutant: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation()

  const dateFilters: Tab.SimpleTabItem[] = [
    {
      label: 'common.tab.day',
      value: 'day',
    },
    {
      label: 'common.tab.week',
      value: 'week',
    },
    {
      label: 'common.tab.month',
      value: 'month',
    },
  ]

  const [fromDate, setFromDate] = useState<number>(
    dayjs().startOf('day').valueOf()
  )
  const [toDate, setToDate] = useState<number>(dayjs().endOf('day').valueOf())

  function changeFilterTab(v: 'day' | 'week' | 'month') {
    if (v === 'day') {
      setFromDate(dayjs().startOf('day').valueOf())
      setToDate(dayjs().endOf('day').valueOf())
    } else if (v === 'week') {
      setFromDate(dayjs().startOf('week').valueOf())
      setToDate(dayjs().endOf('week').valueOf())
    } else if (v === 'month') {
      setFromDate(dayjs().startOf('month').valueOf())
      setToDate(dayjs().endOf('month').valueOf())
    }
    getChartData()
  }

  const { loading, startLoading, endLoading } = useLoading(false)

  const [chartData, setChartDataState] = useState<LineChartProps['option']>()
  function setChartData(data: ApiReport.AirPollutant) {
    const { x, y } = data
    const { transport, industry, airPollutant, household } = y
    const mapData = {
      legend: [
        'page.report.airPollutantChart.legend.transport',
        'page.report.airPollutantChart.legend.industry',
        'page.report.airPollutantChart.legend.airPollutant',
        'page.report.airPollutantChart.legend.household',
      ],
      x,
      y: [
        {
          name: 'page.report.airPollutantChart.legend.transport',
          data: transport,
        },
        {
          name: 'page.report.airPollutantChart.legend.industry',
          data: industry,
        },
        {
          name: 'page.report.airPollutantChart.legend.airPollutant',
          data: airPollutant,
        },
        {
          name: 'page.report.airPollutantChart.legend.household',
          data: household,
        },
      ],
      yAxis: {
        name: 'page.report.airPollutantChart.unit',
      },
    }
    setChartDataState(mapData)
  }

  async function getChartData() {
    startLoading()
    const { data } = await fetchAirPollutant(fromDate, toDate)
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
      <div className='flex justify-between items-center p-0-23-0-28 <md:gap-20 relative'>
        <div className='cursor-default color-primary-dark font-size-18 font-700 line-height-27'>
          {t('page.report.airPollutantChart.title')}
        </div>
        <div className='flex gap-8 items-center overflow-x-no-scrollbar'>
          <SimpleTab
            tabs={dateFilters}
            onChooseTab={changeFilterTab}
            activeTab={'day'}
          />
          <IconButton icon='date' className='grow-0 shrink-0' />
        </div>
      </div>
      {loading ? (
        <BarLoading className='height-320 grow flex justify-center items-center w-full' />
      ) : (
        chartData && (
          <LineChart option={chartData} className='height-320 w-full overflow-hidden' />
        )
      )}
    </div>
  )
}

export default AirPollutant
