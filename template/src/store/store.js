import Vue from 'vue'
import Vuex from 'vuex'

// Globals
import * as actions from './actions'

// Modules
// import module from './modules/module'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {}
})