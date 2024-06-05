<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <GroupStatus /> 
    <ChatWeb /> 
  </div>
</template>

<script>
import GroupStatus from './GroupStatus.vue'; // Correct relative path
import ChatWeb from './ChatWeb.vue'; // Correct relative path

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    GroupStatus,
    ChatWeb
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
