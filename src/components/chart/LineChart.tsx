import React from 'react'
import { BaseChart, BaseChartProps } from '@/components/chart/BaseChart'
import { COLOR } from '@/utils'
import { useTranslation } from 'react-i18next'

export interface LineChartProps extends BaseChartProps {
  className?: string
  option: {
    legend: string[]
    x: string[] | number[]
    y: {
      name: string
      data: any[]
    }[]
    yAxis?: {
      name?: any
    }
  }
}

export const LineChart: React.FC<LineChartProps> = ({ option, ...props }) => {
  const {t} = useTranslation()
  const defaultLineOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: option.legend.map(i => t(i)),
      textStyle: {
        fontStyle: 'normal',
        fontFamily: 'Lato',
        fontSize: 14,
        fontWeight: 400,
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: option.x,
        axisLabel: {
          fontStyle: 'normal',
          fontFamily: 'Lato',
          fontSize: 13,
          fontWeight: 400,
        },
      },
    ],
    yAxis: [
      {
        name: t(option.yAxis?.name),
        type: 'value',
        axisLabel: {
          fontStyle: 'normal',
          fontFamily: 'Lato',
          fontSize: 13,
          fontWeight: 400,
        },
        nameTextStyle: {
          fontStyle: 'normal',
          fontFamily: 'Lato',
          fontSize: 13,
          fontWeight: 400,
          align: 'left',
        },
      },
    ],
    series: option.y.map((i, index) => ({
      color: COLOR[index],
      name: t(i.name),
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: COLOR[index],
            },
            {
              offset: 1,
              color: '#fff',
            },
          ],
        },
      },
      emphasis: {
        focus: 'series',
      },
      data: i.data,
    })),
  }
  return <BaseChart {...props} option={{ ...defaultLineOption }} />
}
