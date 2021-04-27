<template>
  <nav id="nav">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>{{ name }}</p>
    <Questions msgg="test"/>
  </nav>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import Answers from "./components/Answers.vue";
import Questions from "./components/Questions.vue";

export default {
  name: "App",
  data() { return {
    name: '',
    };
  },
  components: {
    //Answers,
    Questions,
  },
  created(){
    this.name = this.$faker.name.firstName()
    console.log(this.$faker)
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
