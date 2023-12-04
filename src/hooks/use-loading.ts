import { useBoolean } from '@/hooks'

export function useLoading(initValue = false) {
  const {
    bool: loading,
    setTrue: startLoading,
    setFalse: endLoading,
  } = useBoolean(initValue)

  return {
    loading,
    startLoading,
    endLoading,
  }
}
