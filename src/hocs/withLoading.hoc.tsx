import { BarLoading } from '@/components/loading/BarLoading'
import React, { Suspense } from 'react'

type ReturnType<T> = (props: T) => JSX.Element

export const withLoading = <T extends object>(
  Component: React.ComponentType<T>
): ReturnType<T> => {
  return (props: T) => (
    <Suspense fallback={<BarLoading />}>
      <Component {...props} />
    </Suspense>
  )
}
