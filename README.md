# vuex
```
https://segmentfault.com/a/1190000014775073
https://blog.csdn.net/mjzhang1993/article/details/78321903
https://blog.csdn.net/thatway_wp/article/details/79024849
 组件之间的数据传递:
    父子组件间的数据传递
    兄弟组件间的数据传递
    非直接关联性组件间的数据传递
解决方案：
    1）对于深层组件嵌套中的数据传递，使用这种通信方式则需要一层一层向下prop，改变时需要一层一层向上$emit。对于兄弟组件之间的数据传递，先要向上分发，再向下prop，过于繁琐且不易监控调试
    2）$root方式
    3）总线Bus方式。总线Bus的思路：将事件的注册和触发单独放在一个Vue实例中，点击按钮时触发指定的事件以驱动接下来的操作。Bus总线仅仅是用来驱动事件的，具体的数据操作还是在原有的组件中
    4）Vuex方式
 ```
npm install

serve with hot reload at localhost:8080
npm run dev

vuex是什么？
先引用vuex官网的话：

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
状态管理模式、集中式存储管理 一听就很高大上，蛮吓人的。在我看来 vuex 就是把需要共享的变量全部存储在一个对象里面，然后将这个对象放在顶层组件中供其他组件使用。这么说吧，将vue想作是一个js文件、组件是函数，那么vuex就是一个全局变量，只是这个“全局变量”包含了一些特定的规则而已。

在vue的组件化开发中，经常会遇到需要将当前组件的状态传递给其他组件。父子组件通信时，我们通常会采用 props + emit 这种方式。但当通信双方不是父子组件甚至压根不存在相关联系，或者一个状态需要共享给多个组件时，就会非常麻烦，数据也会相当难维护，这对我们开发来讲就很不友好。vuex 这个时候就很实用，不过在使用vuex之后也带来了更多的概念和框架，需慎重！
```
├── index.html
├── main.js
├── components
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── state.js          # 跟级别的 state
    ├── getters.js        # 跟级别的 getter
    ├── mutation-types.js # 根级别的mutations名称（官方推荐mutations方法名使用大写）
    ├── mutations.js      # 根级别的 mutation
    ├── actions.js        # 根级别的 action
    └── modules
        ├── m1.js         # 模块1
        └── m2.js         # 模块2
```
```
state (类似存储全局变量的数据)
getters (提供用来获取state数据的方法)
actions (提供跟后台接口打交道的方法，并调用mutations提供的方法)
mutations (提供存储设置state数据的方法)

组件Vue Component通过dispatch来调用actions提供的方法
而actions除了可以和api打交道外，还可以通过commit来调mutations提供的方法
最后mutaions将数据保存到state中
当然，Vue Components还以通过getters提供的方法获取state中的数据

Vuex的状态储存是响应式的，当 Vue 组件从 store 中读取状态时，若store中的状态发生变化，那么相应的组件也会得到高效更新
不能直接改变 store 中的状态，改变 store 中状态的唯一途径就是显式的提交（commit）mutation 这样可以更方便的跟踪状态的变化

```
