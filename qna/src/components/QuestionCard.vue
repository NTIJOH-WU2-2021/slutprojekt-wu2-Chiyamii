<template>
    <!--<router-link to="/{{ index }}">-->
        <ul>
            <p>{{ que.name }}</p>
            <h2>{{ que.question }}</h2>
            <p>{{ que.description }}</p>    
        </ul>
    <!--</router-link>-->
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