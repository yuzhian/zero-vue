import { createStore, createLogger, Store } from 'vuex'

import account from './modules/account'
import permission from './modules/permission'

const debug: boolean = !import.meta.env.PROD

export default createStore({
  modules: { account, permission },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
}) as Store<any>
