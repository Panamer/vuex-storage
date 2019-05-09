/**
 * 创建store 然后需要在main.js里全局注册
 */
import vue from 'vue';
import vuex from 'vuex';
import state from './state.js';
import * as getters from './getters.js';
import * as storage from './plugins/storage.js';
import mutations from './mutations.js';
import actions from './actions.js';
// import m1 from './modules/m1.js';
// import m2 from './modules/m2.js';
import createLogger from 'vuex/dist/logger'; // 修改日志

vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production'; // 开发环境中为true，否则为false

const store = new vuex.Store({
    state,
    getters,
    mutations,
    actions,
    // modules: {
    //     m1,
    //     m2
    // },
    plugins: debug ? [createLogger(), storage.setState] : [] // 开发环境下显示vuex的状态修改
});
const storageState = storage.getState()
storageState && store.replaceState(storageState)

export default store;
