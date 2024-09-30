<script setup lang="ts">
import {ref} from 'vue'

let count = ref(0)

function desc() {
	count.value--
}

function insc() {
	count.value++
}

</script>

<template>
	<input type="button" value="-" @click="desc"/>
	<h1>{{ count }}</h1>
	<input type="button" value="+" @click="insc"/>
</template>

<style scoped>

</style>
