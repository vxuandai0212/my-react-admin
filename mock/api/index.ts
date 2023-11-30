import { MockMethod } from 'vite-plugin-mock'
import auth from './auth'
import invoice from './invoice'
import report from './report'

export default [...auth, ...invoice, ...report] as MockMethod[]
