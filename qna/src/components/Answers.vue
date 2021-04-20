<template>
    <div class="answers">
        <h3>{{ author }}</h3>
        <p>{{ answer }}</p>
    </div>
</template>

<script>
export default {
    name: "Answers",
    props: {
        author: String,
        answer: String,
    },
};
</script>

<style>

</style>
