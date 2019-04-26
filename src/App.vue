<!--
   使用vue-bus有两点需要注意，第一是$bus.on应该在created钩子内使用，如果在mounted使用，它可能接收不到其他组件来自created钩子内发出的事件；
   第二点是使用了$bus.on在beforeDestory钩子里应该需要使用$bus.off解除，因为组件销毁后，就没有必要把监听的句柄存储在vue-bus里面了
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    当前number是: {{number}}
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        number: 0
      }
    },
    methods: {
      handleAddCallback(num) {
        this.number += num
      }
    },
    created() {
      // 接受数据
      this.$bus.on('add', this.handleAddCallback)
    },
    // 解除监听
    beforeDestroy() {
      this.$bus.off('add', this.handleAddCallback)
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
