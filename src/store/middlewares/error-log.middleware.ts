import { useNotification } from '@/hooks/use-notification'
import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit'

export const errorLoggingMiddleware: Middleware =
  () => (next) => (action: any) => {
    if (isRejectedWithValue(action)) {
      useNotification.error({ message: action.payload })
    }

    return next(action)
  }
