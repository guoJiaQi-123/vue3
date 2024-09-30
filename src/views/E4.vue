<script setup lang="ts">
import {computed, ref} from 'vue'

const firstName = ref("张")
const lastName = ref("三")
const fullName = computed(() => {
	console.log("inner")
	return firstName.value + lastName.value
})
</script>

<template>
	<h1>{{ fullName }}</h1>
	<h1>{{ fullName }}</h1>
	<h1>{{ fullName }}</h1>
	<h1>{{ fullName }}</h1>
</template>

<style scoped>

</style>
