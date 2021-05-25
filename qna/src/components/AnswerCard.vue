<template>
    <ul>
        <p>{{ answ.answer }}</p> 
        <p class="name">Posted by: {{ answ.name }}</p>
        <hr> 
    </ul>
</template>

<script>
export default({
    name: "AnswerCard",
    props: ['answ'],
})
</script>

<style>
    ul {
        padding: 0;
    }
    .name {
        text-align: right;
    }
</style>