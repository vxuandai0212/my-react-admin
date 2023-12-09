import { useBoolean } from '@/hooks'
import { useEffect } from 'react'

export function useLoading(initValue = false) {
  const {
    bool: loading,
    setTrue: startLoading,
    setFalse: endLoading,
  } = useBoolean(initValue)

  useEffect(() => {
  }, [loading])

  return {
    loading,
    startLoading,
    endLoading,
  }
}
