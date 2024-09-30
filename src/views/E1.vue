<script setup lang="ts">
import {ref, reactive} from 'vue'

let u1 = ref({name: '张三'}) // 可以包装对象也可以包装基本数据类型
let u2 = reactive({name: '李四'}) // 只能包装对象

function test() {
	console.log(u1.value)
	console.log(u2)
}

test()

</script>

<template>
	<h2 class="ref">{{ u1.name }}</h2>
	<h2 class="reactive">{{ u2.name }}</h2>
</template>

<style>
.ref {
	color: lightcoral;
}

.reactive {
	color: deepskyblue;
}
</style>
