import { viteMockServe } from 'vite-plugin-mock'

export default (viteEnv: ImportMetaEnv) => {
  const enable = viteEnv.VITE_ENABLE_MOCK === 'Y'

  return viteMockServe({
    mockPath: 'mock',
    prodEnabled: enable,
    injectCode: `
			import { setupMockServer } from '../mock';
			setupMockServer();
		`,
  })
}
