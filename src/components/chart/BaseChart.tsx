import React, { CSSProperties, useEffect, useRef } from 'react'
import { EChartsOption } from 'echarts-for-react'
import ReactECharts from 'echarts-for-react'
import { useTranslation } from 'react-i18next'

export interface BaseChartProps {
  option?: EChartsOption
  onEvents?: Record<string, (e: any) => void>
  width?: string | number
  height?: string | number
  style?: CSSProperties
  className?: string
}

export const BaseChart: React.FC<BaseChartProps> = ({
  option,
  width,
  height,
  onEvents,
  style,
  ...props
}) => {
  const chartHeight = height || '400px'

  const eChartRef = useRef<any>(null!)

  const { i18n } = useTranslation()

  useEffect(() => {
    eChartRef.current.resize()
  }, [i18n.language])

  return (
    <ReactECharts
      {...props}
      ref={eChartRef}
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
