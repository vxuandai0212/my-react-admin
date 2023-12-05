import React from 'react'
import { BaseChart, BaseChartProps } from '@/components/chart/BaseChart'
import { COLOR } from '@/utils'

interface PieChartProps extends BaseChartProps {
  option: {
    name: string
    data: { name: string; value: number }[]
  }
}

export const PieChart: React.FC<PieChartProps> = ({ option, ...props }) => {
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
        name: name,
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
  return <BaseChart {...props} option={{ ...defaultPieOption }} />
}
