<template>
    <div class="questions">
        <h3>{{ author }}</h3>
        <p>{{ question }}</p>
    </div>
</template>

<script>
export default {
    name: "Questions",
    props: {
        author: String,
        question: String,
    },
}
</script>

<style>

</style>