<template>
  <div>
    <nav>
      <h1>Q&A</h1>
      <p>Username: {{ name }}</p>
    </nav>
    <section>
      <Questions msg="Questions:"/>
      <Answers/>
    </section>
  </div>
</template>

<script>
import Answers from "./components/Answers.vue";
import Questions from "./components/Questions.vue";

export default {
  name: "App",
  data() { return {
    name: '',
    };
  },
  components: {
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
}

body {
  margin: 0;
}

nav {
  background: cornflowerblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

section {
  padding: 0 15rem;
}
</style>
