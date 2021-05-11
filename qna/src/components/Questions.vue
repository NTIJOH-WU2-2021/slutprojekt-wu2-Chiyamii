<template>
    <div id="questions">
        <h1>{{ msg }}</h1>
        <QuestionCard v-for="(que, index) in previous_questions" v-bind:key="index" v-bind:que="que"></QuestionCard>
        <form id="userform" v-on:submit.prevent="add_question">
            <label for="text1">Question:</label>
            <textarea rows="1" cols="50" name="text1" form="userform" v-model="question"></textarea>
            <label for="text2">Description:</label>
            <textarea rows="4" cols="50" name="text2" form="userform" v-model="description"></textarea>
            <input type="submit" value="Submit">
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
        previous_questions: [],
        destinationId: this.$route.params.id,
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
    },
    created() {
        this.previous_questions = JSON.parse(localStorage.getItem('previous_questions'))
        this.name = this.$faker.name.firstName()
        console.log(this.$faker)
    },
}
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>