import { LineChart, LineChartProps } from '@/components/chart/LineChart'
import { BarLoading } from '@/components/loading/BarLoading'
import { useLoading, useNumber } from '@/hooks'
import { fetchSmoking } from '@/service'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Smoking: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation()
  const { moneyFormat } = useNumber()

  const { loading, startLoading, endLoading } = useLoading(false)

  const [chartData, setChartDataState] = useState<LineChartProps['option']>()

  const [fromDate, setFromDate] = useState<number>(
    dayjs().startOf('day').valueOf()
  )
  const [toDate, setToDate] = useState<number>(dayjs().endOf('day').valueOf())
  const [menSale, setMenSale] = useState<string>()
  const [womenSale, setWomenSale] = useState<string>()

  function setChartData(data: ApiReport.Smoking) {
    const { x, y, totalMen, totalWomen } = data
    setMenSale(moneyFormat('currency', 'USD', totalMen))
    setWomenSale(moneyFormat('currency', 'USD', totalWomen))
    const { men, women } = y
    const mapData = {
      legend: [
        'page.report.smokingChart.men',
        'page.report.smokingChart.women',
      ],
      x,
      y: [
        {
          name: 'page.report.smokingChart.men',
          data: men,
        },
        {
          name: 'page.report.smokingChart.women',
          data: women,
        },
      ],
      yAxis: {
        name: 'page.report.smokingChart.unit',
      },
    }
    setChartDataState(mapData)
  }

  async function getChartData() {
    startLoading()
    const { data } = await fetchSmoking(fromDate, toDate)
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
      {loading ? (
        <BarLoading className='height-320 grow flex justify-center items-center w-full' />
      ) : (
        chartData && (
          <>
            <LineChart option={chartData} className='height-270 grow overflow-hidden' />
            <div className='height-75 border-top-1 border-top-solid border-top-color-border flex'>
              <div className='flex flex-col justify-center items-center grow border-right-1 border-right-solid border-right-color-border'>
                <div className='color-primary-dark font-size-16 font-700 line-height-24'>
                  {menSale}
                </div>
                <div className='color-primary-grey font-size-14 font-400 line-height-21'>
                  {t('page.report.smokingChart.menSale')}
                </div>
              </div>
              <div className='flex flex-col justify-center items-center grow'>
                <div className='color-primary-dark font-size-16 font-700 line-height-24'>
                  {womenSale}
                </div>
                <div className='color-primary-grey font-size-14 font-400 line-height-21'>
                  {t('page.report.smokingChart.womenSale')}
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  )
}

export default Smoking
