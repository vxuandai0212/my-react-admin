import IconButton from '@/components/button/IconButton'
import { PieChart, PieChartProps } from '@/components/chart/PieChart'
import { BarLoading } from '@/components/loading/BarLoading'
import SimpleTab from '@/components/tab/SimpleTab'
import { useLoading } from '@/hooks'
import { fetchTransportation } from '@/service'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

const Transportation: React.FC<{ className?: string }> = ({ className }) => {
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

  const [, setFromDate] = useState<number>(dayjs().startOf('day').valueOf())
  const [, setToDate] = useState<number>(dayjs().endOf('day').valueOf())

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

  const I18N_MAP: { [key: string]: I18nType.I18nKey } = {
    car: 'page.report.transportationChart.car',
    bicycle: 'page.report.transportationChart.bicycle',
    bus: 'page.report.transportationChart.bus',
    train: 'page.report.transportationChart.train',
    walking: 'page.report.transportationChart.walking',
  }

  const [chartData, setChartDataState] = useState<PieChartProps['option']>()

  function setChartData(data: ApiReport.Transportation[]) {
    const mapData = {
      name: 'page.report.transportationChart.title',
      data: data.map((i) => {
        i.name = I18N_MAP[i.name]
        return i
      }),
    }
    setChartDataState(mapData)
  }

  async function getChartData() {
    startLoading()
    const { data } = await fetchTransportation()
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
      <div className='flex gap-8 p-0-23-0-28 items-center overflow-x-no-scrollbar relative'>
        <SimpleTab
          onChooseTab={(v) => changeFilterTab(v)}
          tabs={dateFilters}
          activeTab={'day'}
        />
        <IconButton icon='date' className='grow-0 shrink-0' />
      </div>
      {loading ? (
        <BarLoading className='height-320 grow flex justify-center items-center w-full' />
      ) : (
        chartData && (
          <PieChart
            option={chartData}
            className='height-320 grow overflow-hidden'
          />
        )
      )}
    </div>
  )
}

export default Transportation
