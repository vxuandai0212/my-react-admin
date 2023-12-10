import { BarLoading } from '@/components/loading/BarLoading'
import React, { Suspense } from 'react'

type ReturnType<T> = (props: T) => JSX.Element

export const withLoading = <T extends object>(
  Component: React.ComponentType<T>
): ReturnType<T> => {
  return (props: T) => (
    <Suspense fallback={<BarLoading className='flex items-center justify-center h-screen w-screen' />}>
      <Component {...props} />
    </Suspense>
  )
}
