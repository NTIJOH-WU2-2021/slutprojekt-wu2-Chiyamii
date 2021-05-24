<template>
        <ul>
            <h2>{{ que.question }}</h2>
            <p>{{ que.description }}</p> 
            <p>Posted by: {{ que.name }}</p>
            <hr> 
        </ul>
</template>

<script>
export default {
    name: "QuestionCard",
    props: ['que'],
}

</script>

<style>
    ul{
        padding: 0;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
</style>