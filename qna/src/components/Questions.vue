<template>
    <div id="questions">
        <h1>{{ msgg }}</h1>
        <form>
            <input type="text" v-model="author">
            <input type="text" v-model="question">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    name: "Questions",
    data() { return {
        author: '',
        question: '',
        };
    },
    props: {
        msgg: String
    }
}
</script>

<style>

</style>