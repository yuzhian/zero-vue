import { createStore, createLogger, Store } from 'vuex'

import account from './modules/account'

const debug: boolean = !import.meta.env.PROD

export default createStore({
  modules: { account },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
}) as Store<any>
