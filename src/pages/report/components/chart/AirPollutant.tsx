import IconButton from '@/components/button/IconButton'
import { LineChart } from '@/components/chart/LineChart'
import { BarLoading } from '@/components/loading/BarLoading'
import SimpleTab from '@/components/tab/SimpleTab'
import { useLoading } from '@/hooks'
import { fetchAirPollutant } from '@/service'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DatePicker } from 'antd'
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker'

const { RangePicker } = DatePicker

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

  const [chartData, setChartDataState] = useState<any>()
  function setChartData(data: ApiReport.AirPollutant) {
    const { x, y } = data
    const { transport, industry, airPollutant, household } = y
    const mapData = {
      legend: [
        t('page.report.airPollutantChart.legend.transport'),
        t('page.report.airPollutantChart.legend.industry'),
        t('page.report.airPollutantChart.legend.airPollutant'),
        t('page.report.airPollutantChart.legend.household'),
      ],
      x,
      y: [
        {
          name: t('page.report.airPollutantChart.legend.transport'),
          data: transport,
        },
        {
          name: t('page.report.airPollutantChart.legend.industry'),
          data: industry,
        },
        {
          name: t('page.report.airPollutantChart.legend.airPollutant'),
          data: airPollutant,
        },
        {
          name: t('page.report.airPollutantChart.legend.household'),
          data: household,
        },
      ],
      yAxis: {
        name: t('page.report.airPollutantChart.unit'),
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

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false)

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
          {t('page.report.airPollutantChart.title')}
        </div>
        <div className='flex gap-8 items-center overflow-x-no-scrollbar'>
          <SimpleTab
            tabs={dateFilters}
            onChooseTab={changeFilterTab}
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

export default AirPollutant
