<template>
    <div id="questions">
        <h1>{{ msg }}</h1>
        <QuestionCard v-for="(que, index) in previous_questions" v-bind:key="index" v-bind:que="que"></QuestionCard>
        <button @click="toggleShow" class="btn-push">Ask a question</button>
        <form id="questionform" style="display:none;" v-on:submit.prevent="add_question" v-on:submit="clear">
            <label for="text1">Question:</label>
            <textarea rows="1" cols="50" name="text1" form="questionform" v-model="question"></textarea>
            <label for="text2">Description:</label>
            <textarea rows="4" cols="50" name="text2" form="questionform" v-model="description"></textarea>
            <input type="submit" value="Submit" class="btn-push">
        </form>
    </div>
</template>

<script>
import QuestionCard from './QuestionCard.vue';
export default {
    components: { QuestionCard },
    name: "Questions",
    data() { return {
        name: '',
        question: '',
        description: '',
        comments: [],
        previous_questions: [],
        };
    },
    props: {
        msg: String
    },
    methods: {
        add_question: function() {
            this.previous_questions.push({name: this.name, question: this.question, description: this.description})
            localStorage.setItem('previous_questions', JSON.stringify(this.previous_questions))
        },
        clear: function() {
            this.name = '',
            this.question = '',
            this.description = ''
        },
        toggleShow: function() {
            var x = document.getElementById("questionform")
            if (x.style.display == "none") {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
        },
    },
    created() {
        this.previous_questions = JSON.parse(localStorage.getItem('previous_questions'))
        this.name = this.$faker.name.firstName()
        console.log(this.$faker)
    },
}
</script>

<style>
#questionform {
    display: none;
    flex-direction: column;
    align-items: center;
}
.btn-push {
  position: relative;
  top: 0px;
  font-family: "Open Sans";
  text-decoration: none;
  font-size: 3vh;
  background: #f7f7f7;
  padding: 1vh 2vh;
  margin: 3vh;
  border: 1px solid #c4c4c4;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 5px 0px #c4c4c4;
  -moz-box-shadow: 0px 5px 0px #c4c4c4;
  -ms-box-shadow: 0px 5px 0px #c4c4c4;
  -o-box-shadow: 0px 5px 0px #c4c4c4;
  box-shadow: 0px 5px 0px #c4c4c4;
  color: #222;
  text-shadow: 1px 1px 1px #fff;
  -webkit-transition: All 250ms ease;
  -moz-transition: All 250ms ease;
  -o-transition: All 250ms ease;
  -ms-transition: All 250ms ease;
  transition: All 250ms ease;
}
.btn-push:active {
  position: relative;
  top: 5px;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  -ms-box-shadow: none !important;
  -o-box-shadow: none !important;
  box-shadow: none !important;
  -webkit-transition: All 250ms ease;
  -moz-transition: All 250ms ease;
  -o-transition: All 250ms ease;
  -ms-transition: All 250ms ease;
  transition: All 250ms ease;
}
</style>