<template>
    <div id="answers">
        <AnswerCard v-for="(answ, index) in previous_answers" v-bind:key="index" v-bind:answ="answ"></AnswerCard>
        <form id="answerform" v-on:submit.prevent="add_answer">
            <label for="text2">Answer:</label>
            <textarea rows="4" cols="50" name="text3" form="userform" v-model="answer"></textarea>
            <input type="submit" value="Submit">
        </form>
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
            previous_answers: [],
        }
    },
    methods: {
        add_answer: function() {
            this.previous_answers.push({name: this.name, answer: this.answer})
            localStorage.setItem('previous_answers', JSON.stringify(this.previous_questions))
        },
    },
    // created() {
    //     this.previous_answers = JSON.parse(localStorage.getItem('previous_answers'))
    //     this.name = this.$faker.name.firstName()
    //     console.log(this.$faker)
    // },
};
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
