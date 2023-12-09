import React, { useEffect, useState } from 'react'
import { BaseChart, BaseChartProps } from '@/components/chart/BaseChart'
import { useTranslation } from 'react-i18next'

export interface BarChartProps extends BaseChartProps {
  option: {
    dimensions: string[]
    source: { [key: string]: any }
    yAxis?: {
      name?: any
    }
  }
}

export const BarChart: React.FC<BarChartProps> = ({ option, ...props }) => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const source: any = []
    for (let i = 0; i < option.source.length; i++) {
      const opt = Object.assign({}, option.source[i])
      opt.country = t(opt.country)
      source.push(opt)
    }

    setBarOption((prevState) => ({
      ...prevState,
      dataset: {
        ...prevState.dataset,
        source,
      },
      yAxis: {
        ...prevState.yAxis,
        name: t(option.yAxis?.name),
      },
    }))
  }, [i18n.language])

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
      name: t(option.yAxis?.name),
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

  const [barOption, setBarOption] = useState(defaultBarOption)

  return <BaseChart {...props} option={{ ...barOption }} />
}
