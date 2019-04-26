/**
 * 获取state的方法，可以作为公用的计算属性
 * @param {*} state 
 */
export const name = (state) => {
    return state.name;
}

export const age = (state) => {
    return state.age
}

export const other = (state) => {
    return `My name is ${state.name}, I am ${state.age}.`;
}