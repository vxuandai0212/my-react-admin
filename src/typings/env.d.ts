type ServiceEnvType = 'dev' | 'test' | 'prod'

interface ServiceEnvConfig {
  url: string
}

interface ServiceEnvConfigWithProxyPattern extends ServiceEnvConfig {
  proxyPattern: '/proxy-pattern'
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_DESC: string
  readonly VITE_ROUTE_HOME_PATH: string
  readonly VITE_SERVICE_ENV?: ServiceEnvType
  readonly VITE_HTTP_PROXY?: 'Y' | 'N'
  readonly VITE_VISUALIZER?: 'Y' | 'N'
  readonly VITE_COMPRESS?: 'Y' | 'N'
  readonly VITE_COMPRESS_TYPE?:
    | 'gzip'
    | 'brotliCompress'
    | 'deflate'
    | 'deflateRaw'
  readonly VITE_ENABLE_MOCK?: 'Y' | 'N'
  readonly VITE_BACKEND_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
