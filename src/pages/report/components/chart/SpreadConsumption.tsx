import IconButton from '@/components/button/IconButton'
import { LineChart } from '@/components/chart/LineChart'
import { BarLoading } from '@/components/loading/BarLoading'
import { useLoading } from '@/hooks'
import { fetchSpreadConsumption } from '@/service'
import { DatePicker, DatePickerProps } from 'antd'
import { RangePickerProps } from 'antd/es/date-picker'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const { RangePicker } = DatePicker

const SpreadConsumption: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation()
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false)

  const [fromDate, setFromDate] = useState<number>(
    dayjs().startOf('day').valueOf()
  )
  const [toDate, setToDate] = useState<number>(dayjs().endOf('day').valueOf())

  const { loading, startLoading, endLoading } = useLoading(false)

  const [chartData, setChartDataState] = useState<any>()
  function setChartData(data: ApiReport.SpreadConsumption) {
    const { x, y } = data
    const { margarine, lowfat, butter } = y
    const mapData = {
      legend: [
        t('page.report.spreadConsumptionChart.legend.margarine'),
        t('page.report.spreadConsumptionChart.legend.lowfat'),
        t('page.report.spreadConsumptionChart.legend.butter'),
      ],
      x,
      y: [
        {
          name: t('page.report.spreadConsumptionChart.legend.margarine'),
          data: margarine,
        },
        {
          name: t('page.report.spreadConsumptionChart.legend.lowfat'),
          data: lowfat,
        },
        {
          name: t('page.report.spreadConsumptionChart.legend.butter'),
          data: butter,
        },
      ],
      yAxis: {
        name: t('page.report.spreadConsumptionChart.unit'),
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
      <div className='flex justify-between items-center p-0-23-0-28 relative'>
        <div className='color-primary-dark font-size-18 font-700 line-height-27'>
          {t('page.report.spreadConsumptionChart.title')}
        </div>
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
        <LineChart option={chartData} className='height-320 grow' />
      )}
    </div>
  )
}

export default SpreadConsumption
