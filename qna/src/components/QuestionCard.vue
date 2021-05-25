<template>
        <ul>
            <h2>{{ que.question }}</h2>
            <p>{{ que.description }}</p> 
            <p class="name">Posted by: {{ que.name }}</p>
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
    }
    .name {
        text-align: right;
    }
</style>