import IconButton from '@/components/button/IconButton'
import { LineChart, LineChartProps } from '@/components/chart/LineChart'
import { BarLoading } from '@/components/loading/BarLoading'
import SimpleTab from '@/components/tab/SimpleTab'
import { useLoading } from '@/hooks'
import { fetchReportVisit } from '@/service'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Visit: React.FC<{ className?: string }> = ({ className }) => {
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
  function setChartData(data: ApiReport.Visit) {
    const { x, y } = data
    const { domestic, abroad } = y
    const mapData = {
      legend: [
        'page.report.visitChart.legend.abroad',
        'page.report.visitChart.legend.domestic',
      ],
      x,
      y: [
        {
          name: 'page.report.visitChart.legend.abroad',
          data: abroad,
        },
        {
          name: 'page.report.visitChart.legend.domestic',
          data: domestic,
        },
      ],
      yAxis: {
        name: 'page.report.visitChart.unit',
      },
    }
    setChartDataState(mapData)
  }

  async function getChartData() {
    startLoading()
    const { data } = await fetchReportVisit(fromDate, toDate)
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
          {t('page.report.visitChart.title')}
        </div>
        <div className='flex gap-8 items-center overflow-x-no-scrollbar'>
          <SimpleTab
            onChooseTab={(v) => changeFilterTab(v)}
            tabs={dateFilters}
            activeTab={'day'}
          />
          <IconButton
            icon='date'
            className='grow-0 shrink-0'
          />
        </div>
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

export default Visit
