declare namespace Service {
  type RequestErrorType = 'axios' | 'http' | 'backend'

  interface RequestError {
    type: RequestErrorType
    code: string | number
    msg: string
  }

  interface BackendResultConfig {
    codeKey: string
    dataKey: string
    msgKey: string
    successCode: number | string
  }

  interface SuccessResult<T = any> {
    error: null
    data: T
  }

  interface FailedResult {
    error: RequestError
    data: null
  }

  type RequestResult<T = any> = SuccessResult<T> | FailedResult

  type MultiRequestResult<T extends any[]> = T extends [
    infer First,
    ...infer Rest
  ]
    ? [First] extends [any]
      ? Rest extends any[]
        ? [Service.RequestResult<First>, ...MultiRequestResult<Rest>]
        : [Service.RequestResult<First>]
      : Rest extends any[]
      ? MultiRequestResult<Rest>
      : []
    : []

  type ServiceAdapter<T = any, A extends any[] = any> = (...args: A) => T

  interface MockServiceResult<T = any> {
    code: string | number
    data: T
    message: string
  }

  interface MockOption {
    url: Record<string, any>
    body: Record<string, any>
    query: Record<string, any>
    headers: Record<string, any>
  }
}
