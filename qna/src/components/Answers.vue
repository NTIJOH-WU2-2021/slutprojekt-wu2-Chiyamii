<template>
    <div id="answers">
        <button @click="toggleShow" class="btn-push">Comment</button>
        <form id="answerform" style="display:none;" v-on:submit.prevent="add_answer" v-on:submit="clear">
            <label for="text2">Answer:</label>
            <textarea rows="4" cols="50" name="text3" form="answerform" v-model="answer"></textarea>
            <input type="submit" value="Submit" class="btn-push">
        </form>
        <AnswerCard v-for="(answ, index) in previous_answers" v-bind:key="index" v-bind:answ="answ"></AnswerCard>
    </div>
</template>

<script>
import AnswerCard from './AnswerCard.vue';
export default {
    components: { AnswerCard },
    name: "Answers",
    data() { return {
            name: '',
            answer: '',
            previous_answers: [{"name":"Nikki","answer":"Yes"}],
        }
    },
    methods: {
        add_answer: function() {
            this.previous_answers.push({name: this.name, answer: this.answer})
            localStorage.setItem('previous_answers', JSON.stringify(this.previous_answers))
        },
        clear: function() {
            this.name = '',
            this.answer = ''
        },
        toggleShow: function() {
            var x = document.getElementById("answerform")
            if (x.style.display == "none") {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
        }
    },
    created() {
            this.previous_answers = JSON.parse(localStorage.getItem('previous_answers'))
            this.name = this.$faker.name.firstName()
            console.log(this.$faker)
            
        
    },
};
</script>

<style>
#answerform {
    display: flex;
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
