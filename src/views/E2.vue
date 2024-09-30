<script setup lang="ts">
import {ref} from "vue";

let path = ref("src/assets/vue.svg")
</script>

<template>
	<img :src="path" alt="vue"/>
</template>

<style scoped>

</style>
