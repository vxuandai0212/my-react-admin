import type { PluginOption } from 'vite'
import UnoCSS from 'unocss/vite'
import progress from 'vite-plugin-progress'
import react from '@vitejs/plugin-react'
import mock from './mock'
import visualizer from './visualizer'
import { compress } from './compress'

export function setupVitePlugins(
  viteEnv: ImportMetaEnv
): (PluginOption | PluginOption[])[] {
  const plugins = [UnoCSS(), mock(), progress(), react()]

  if (viteEnv.VITE_VISUALIZER === 'Y') {
    plugins.push(visualizer as PluginOption)
  }
  if (viteEnv.VITE_COMPRESS === 'Y') {
    plugins.push(compress(viteEnv))
  }

  return plugins
}
