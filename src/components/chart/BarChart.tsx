import React from 'react'
import { BaseChart, BaseChartProps } from '@/components/chart/BaseChart'

interface BarChartProps extends BaseChartProps {
  option: {
    dimensions: string[]
    source: { [key: string]: any }
    yAxis?: {
      name?: string
    }
  }
}

export const BarChart: React.FC<BarChartProps> = ({ option, ...props }) => {
  const defaultBarOption = {
    grid: {
      bottom: '20px',
      right: '20px',
    },
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: option.dimensions,
      source: option.source,
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        fontStyle: 'normal',
        fontFamily: 'Lato',
        fontSize: 13,
        fontWeight: 400,
      },
    },
    yAxis: {
      name: option.yAxis?.name,
      axisLabel: {
        fontStyle: 'normal',
        fontFamily: 'Lato',
        fontSize: 13,
        fontWeight: 400,
      },
      nameLocation: 'end',
      nameTextStyle: {
        fontStyle: 'normal',
        fontFamily: 'Lato',
        fontSize: 13,
        fontWeight: 400,
        align: 'left',
      },
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: option.dimensions.map(() => ({
      type: 'bar',
      itemStyle: {
        borderRadius: [6.5, 6.5, 0, 0],
      },
      barWidth: '5',
    })),
  }
  return <BaseChart {...props} option={{ ...defaultBarOption }} />
}
