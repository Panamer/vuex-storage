<template>
  <div class="hello">
    <!-- <h1>{{name}}, {{age}}</h1>
    <h2>{{other}}</h2> -->
    <button @click="handleClick">commit</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';

  export default {

      methods: {
          handleClick() {
            this.setName("Marry");
            this.setAge(18);
          },
          ...mapMutations({
              setName: 'SET_NAME',
              setAge: 'SET_AGE'
          }),
          ...mapActions([
              "nameAsyn"
          ])
      }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
