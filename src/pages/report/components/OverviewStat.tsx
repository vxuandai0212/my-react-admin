import ProgressCard from '@/components/card/ProgressCard'
import { fetchOverviewStat } from '@/service'
import { useEffect, useState } from 'react'

const OverviewStat = () => {
  const progressCards: Card.ProgressCard[] = [
    {
      label: 'page.invoice.progress.sale',
      description: 'page.invoice.progress.duration.week',
      value: 0,
      progressColor: 'primary',
      trend: 'up',
      percent: 0,
      backgroundColor: 'white',
    },
    {
      label: 'page.invoice.progress.lead',
      description: 'page.invoice.progress.duration.month',
      value: 0,
      progressColor: 'warning',
      trend: 'down',
      percent: 0,
      backgroundColor: 'white',
    },
    {
      label: 'page.invoice.progress.income',
      description: 'page.invoice.progress.duration.week',
      valuePrefix: '$',
      value: 0,
      progressColor: 'danger',
      trend: 'up',
      percent: 0,
      backgroundColor: 'white',
    },
  ]

  const I18N_MAP: { [key: string]: I18nType.I18nKey } = {
    sale: 'page.invoice.progress.sale',
    lead: 'page.invoice.progress.lead',
    profit: 'page.invoice.progress.income',
    weekly: 'page.invoice.progress.duration.week',
    monthly: 'page.invoice.progress.duration.month',
  }

  const COLOR_MAP: {
    [key: string]: 'primary' | 'warning' | 'danger' | 'success'
  } = {
    sale: 'primary',
    lead: 'warning',
    profit: 'danger',
  }

  const [data, setStateData] = useState<Card.ProgressCard[]>(progressCards)

  function setData(value: ApiReport.OverviewStat[]) {
    const mapData = value.map(function (i): Card.ProgressCard {
      const label = I18N_MAP[i.type]
      let description = I18N_MAP[i.duration]
      let value: number | string = i.currentValue
      let valueType: Card.ProgressCard['valueType'] = 'number'
      if (i.type === 'sale' || i.type === 'profit') {
        valueType = 'currency'
      }
      let progressColor = COLOR_MAP[i.type]
      let trend: Card.ProgressCard['trend'] =
        i.currentValue > i.previousDurationValue ? 'up' : 'down'
      let percent = (i.currentValue / i.targetValue) * 100
      let backgroundColor = 'white'

      return {
        label,
        description,
        value,
        valueType,
        progressColor,
        trend,
        percent,
        backgroundColor,
      }
    })
    setStateData(mapData)
  }

  async function getChartData() {
    const { data } = await fetchOverviewStat()
    if (data) {
      setTimeout(() => {
        setData(data)
      }, 1000)
    }
  }

  function init() {
    getChartData()
  }

  useEffect(() => {
    init()
  }, [])

  return data.map((item) => (
    <ProgressCard
      key={item.label}
      className='col-span-1 <lg:col-span-3'
      {...item}
    />
  ))
}

export default OverviewStat
