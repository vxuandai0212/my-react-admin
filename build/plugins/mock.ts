import { viteMockServe } from 'vite-plugin-mock'

export default () => {
  return viteMockServe({
    mockPath: 'mock',
    prodEnabled: true,
    injectCode: `
			import { setupMockServer } from '../mock';
			setupMockServer();
		`,
  })
}
