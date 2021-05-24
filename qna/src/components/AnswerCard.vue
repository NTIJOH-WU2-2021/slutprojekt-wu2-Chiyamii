<template>
    <ul>
        <p>{{ answ.answer }}</p> 
        <p>Posted by: {{ answ.name }}</p>
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
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}
</style>