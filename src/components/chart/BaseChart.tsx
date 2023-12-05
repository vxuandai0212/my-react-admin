import React, { CSSProperties, useEffect, useState } from 'react'
import { EChartsOption } from 'echarts-for-react'
import ReactECharts from 'echarts-for-react'
import { BarLoading } from '@/components/loading/BarLoading'

export interface BaseChartProps {
  option?: EChartsOption
  onEvents?: Record<string, (e: any) => void>
  width?: string | number
  height?: string | number
  style?: CSSProperties
  classname?: string
}

export const BaseChart: React.FC<BaseChartProps> = ({
  option,
  width,
  height,
  onEvents,
  style,
  ...props
}) => {
  const [loading, setLoading] = useState(true)

  const chartHeight = height || '400px'

  useEffect(() => {
    // TODO FIXME workaround to make sure that parent container is initialized before the chart
    setTimeout(() => {
      setLoading(false)
    }, 1000 / 2)
  }, [])

  return loading ? (
    <BarLoading />
  ) : (
    <ReactECharts
      {...props}
      option={{ ...option }}
      style={{
        ...style,
        height: chartHeight,
        minHeight: height === '100%' ? 400 : 'unset',
        width,
        zIndex: 0,
      }}
      onEvents={onEvents}
    />
  )
}
