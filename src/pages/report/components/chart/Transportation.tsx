import IconButton from '@/components/button/IconButton'
import { PieChart } from '@/components/chart/PieChart'
import { BarLoading } from '@/components/loading/BarLoading'
import SimpleTab from '@/components/tab/SimpleTab'
import { useLoading } from '@/hooks'
import { fetchTransportation } from '@/service'
import { DatePicker, DatePickerProps } from 'antd'
import { RangePickerProps } from 'antd/es/date-picker'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const { RangePicker } = DatePicker

const Transportation: React.FC<{ className?: string }> = ({ className }) => {
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

  const I18N_MAP: { [key: string]: I18nType.I18nKey } = {
    car: 'page.report.transportationChart.car',
    bicycle: 'page.report.transportationChart.bicycle',
    bus: 'page.report.transportationChart.bus',
    train: 'page.report.transportationChart.train',
    walking: 'page.report.transportationChart.walking',
  }

  const [chartData, setChartDataState] = useState<any>()

  function setChartData(data: ApiReport.Transportation[]) {
    const mapData = {
      name: t('page.report.transportationChart.title'),
      data: data.map((i) => {
        i.name = t(I18N_MAP[i.name])
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
      <div className='flex gap-8 p-0-23-0-28 items-center overflow-x-no-scrollbar relative'>
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
      {loading ? (
        <BarLoading className='height-320 grow' />
      ) : (
        <PieChart option={chartData} className='height-320 grow' />
      )}
    </div>
  )
}

export default Transportation
