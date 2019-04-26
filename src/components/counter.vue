<template lang="html">
  <div class="">
    <button type="button" @click="handleAdd">随机增加</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data() {
    return {

    }
  },
  created() {
    this.$bus.$emit('add', 10)
  },
  methods: {
    handleAdd() {
      const num = Math.floor(Math.random()*100 + 1)
      this.$bus.$emit('add', num)
    }
  }
}
</script>

<style lang="css">
</style>
