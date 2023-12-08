import IconButton from '@/components/button/IconButton'
import { LineChart } from '@/components/chart/LineChart'
import { BarLoading } from '@/components/loading/BarLoading'
import SimpleTab from '@/components/tab/SimpleTab'
import { useLoading } from '@/hooks'
import { fetchReportVisit } from '@/service'
import { DatePicker, DatePickerProps } from 'antd'
import { RangePickerProps } from 'antd/es/date-picker'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const { RangePicker } = DatePicker

const Visit: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation()
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false)

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

  const [chartData, setChartDataState] = useState<any>()
  function setChartData(data: ApiReport.Visit) {
    const { x, y } = data
    const { domestic, abroad } = y
    const mapData = {
      legend: [
        t('page.report.visitChart.legend.abroad'),
        t('page.report.visitChart.legend.domestic'),
      ],
      x,
      y: [
        {
          name: t('page.report.visitChart.legend.abroad'),
          data: abroad,
        },
        {
          name: t('page.report.visitChart.legend.domestic'),
          data: domestic,
        },
      ],
      yAxis: {
        name: t('page.report.visitChart.unit'),
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

  const onChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string
  ) => {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  const onOk = (
    value: DatePickerProps['value'] | RangePickerProps['value']
  ) => {
    console.log('onOk: ', value)
  }

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
            onClick={() => setShowDatePicker(true)}
            icon='date'
            className='grow-0 shrink-0'
          />
          <RangePicker
            open={showDatePicker}
            onOpenChange={(visible) => setShowDatePicker(visible)}
            showTime={{ format: 'HH:mm' }}
            format='YYYY-MM-DD HH:mm'
            onChange={onChange}
            onOk={onOk}
          />
        </div>
      </div>
      {loading ? (
        <BarLoading className='height-320 grow' />
      ) : (
        <LineChart option={chartData} className='height-320 grow' />
      )}
    </div>
  )
}

export default Visit
