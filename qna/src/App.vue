<template>
  <img alt="Vue logo" src="./assets/logo.png" />
<!--<p>{{ $faker().name.firstName() }}</p>-->
  <Questions></Questions>
  <Answers></Answers>
  <p>{{ name }}</p>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import Answers from "./components/Answers.vue";
import Questions from "./components/Questions.vue";

export default {
  name: "App",
  data() {
    return {
      name: '',
    }
  },
  components: {
    //    HelloWorld,
    Answers,
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
