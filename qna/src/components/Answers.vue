<template>
    <div id="answers">
        <form id="answerform" v-on:submit.prevent="add_answer">
            <label for="text2">Answer:</label>
            <textarea rows="4" cols="50" name="text3" form="userform" v-model="answer"></textarea>
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    name: "Answers",
    data() { return {
            answer: '',
        }
    },
};
</script>

<style>

</style>
