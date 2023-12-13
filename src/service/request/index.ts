import { getServiceEnvConfig } from '../../../.env-config'
import { createRequest } from './request'

const { url, proxyPattern } = getServiceEnvConfig(import.meta.env)

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y'

const BASE_URL =
  import.meta.env.VITE_ENABLE_MOCK === 'Y'
    ? '/mock'
    : import.meta.env.VITE_BACKEND_URL

export const request = createRequest({
  baseURL: isHttpProxy ? proxyPattern : url,
})

export const mockRequest = createRequest({ baseURL: BASE_URL })
