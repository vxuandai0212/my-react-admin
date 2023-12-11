import { getServiceEnvConfig } from '../../../.env-config'
import { createRequest } from './request'

const { url, proxyPattern } = getServiceEnvConfig(import.meta.env)

const isHttpProxy = true

export const request = createRequest({
  baseURL: isHttpProxy ? proxyPattern : url,
})

export const mockRequest = createRequest({ baseURL: '/mock' })
