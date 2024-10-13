<script setup lang="ts">

import {useCounter, useMouse} from "@vueuse/core";

const {x, y} = useMouse();

const {count, inc, dec} = useCounter();

</script>

<template>

	<h3>x:{{ x }}</h3>
	<h3>y:{{ y }}</h3>

	<h3>{{ count }}</h3>
	<button type="button" @click="inc()">+</button>
	<button type="button" @click="dec()">-</button>
</template>

<style scoped>

</style>
