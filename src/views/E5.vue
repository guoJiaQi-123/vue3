<script setup lang="ts">
import axios from "../api/myAxios.ts"
import {onMounted, ref} from "vue"

const count = ref(0)

// console.log(import.meta.env.VITE_BACKEND_API_BASE_URL)
async function getStudentCount() {
	const resp = await axios.get("/api/students");
	console.log(resp.data.data.length);
	count.value = resp.data.data.length
}

onMounted(() => { // onMounted 指 vue 组件生成的 html 代码片段，挂载完毕后被执行
	getStudentCount()
})

</script>

<template>
	<h1>学生人数{{ count }}</h1>
</template>

<style scoped>

</style>
