import React, { useEffect, useState } from 'react'
import { BaseChart, BaseChartProps } from '@/components/chart/BaseChart'
import { COLOR } from '@/utils'
import { useTranslation } from 'react-i18next'

export interface PolarBarProps extends BaseChartProps {
  option: {
    dimensions: string[]
    source: number[]
  }
}

export const PolarBarChart: React.FC<PolarBarProps> = ({
  option,
  ...props
}) => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setPolarBarOption((prevState) => ({
      ...prevState,
      radiusAxis: {
        ...prevState.radiusAxis,
        data: option.dimensions.map((i) => t(i)),
      },
    }))
  }, [i18n.language])

  const defaultPolarBarOption = {
    polar: {
      radius: [40, '100%'],
    },
    angleAxis: {
      max: 100,
      startAngle: 90,
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      splitArea: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    radiusAxis: {
      type: 'category',
      data: option.dimensions,
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      splitArea: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    tooltip: {},
    series: {
      type: 'bar',
      data: option.source.map((item, index) => ({
        value: item,
        itemStyle: {
          color: COLOR[index],
          borderRadius: [6.5, 6.5, 6.5, 6.5],
        },
      })),
      barWidth: '10',
      showBackground: true,
      backgroundStyle: {
        color: '#EEEEEE',
      },
      coordinateSystem: 'polar',
    },
  }

  const [polarBarOption, setPolarBarOption] = useState(defaultPolarBarOption)

  return <BaseChart {...props} option={{ ...polarBarOption }} />
}
