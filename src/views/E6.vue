<script setup lang="ts">

import {ref} from "vue";
import axios from "axios";

const student = ref({
	name: "",
	age: 18,
	sex: "男"
})

async function addStudent() {
	console.log(student.value)
	const resp = await axios.post("http://localhost:8080/api/students", student.value);
	console.log(resp.data.data);
}
</script>

<template>

	<div>
		<div>
			姓名：<input type="text" v-model="student.name"/>
		</div>
		<div>
			<label for="">请选择性别</label>
			男 <input type="radio" value="男" v-model="student.sex"/>
			女 <input type="radio" value="女" v-model="student.sex"/>
		</div>
		<div>
			年龄：<input type="text" v-model="student.age"/>
		</div>
		<input type="button" value="添加" @click="addStudent">
	</div>
</template>

<style scoped>

</style>
