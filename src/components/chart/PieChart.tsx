import React, { useEffect, useState } from 'react'
import { BaseChart, BaseChartProps } from '@/components/chart/BaseChart'
import { COLOR } from '@/utils'
import { useTranslation } from 'react-i18next'

export interface PieChartProps extends BaseChartProps {
  option: {
    name: string
    data: { name: string; value: number }[]
  }
}

export const PieChart: React.FC<PieChartProps> = ({ option, ...props }) => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const data: any = []
    for (let i = 0; i < option.data.length; i++) {
      const opt = t(option.data[i].name)
      const item = {
        name: opt,
        value: option.data[i].value,
      }
      data.push(item)
    }

    setPieOption((prevState) => ({
      ...prevState,
      series: [
        {
          color: option.data.map((_item, index) => COLOR[index]),
          name: t(option.name),
          type: 'pie',
          radius: ['45%', '75%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 1,
          },
          bottom: 30,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '12',
            },
          },
          labelLine: {
            show: false,
          },
          data,
        },
      ],
    }))
  }, [i18n.language])

  const defaultPieOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: '1%',
      left: 'center',
      itemStyle: {
        borderWidth: 0,
      },
    },
    series: [
      {
        color: option.data.map((_item, index) => COLOR[index]),
        name: t(option.name),
        type: 'pie',
        radius: ['45%', '75%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 1,
        },
        bottom: 30,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '12',
          },
        },
        labelLine: {
          show: false,
        },
        data: option.data,
      },
    ],
  }

  const [pieOption, setPieOption] = useState(defaultPieOption)

  return <BaseChart {...props} option={{ ...pieOption }} />
}
