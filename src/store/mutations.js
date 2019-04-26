/**
 * 在组件内通过commit调用mutations的方法改变store的状态，同时各组件都会跟着变化
 */

import * as types from './mutation-types.js';

export default {
    [types.SET_NAME](state, name) {
        state.name = name;
    },
    [types.SET_AGE](state, age) {
        state.age = age;
    }
};