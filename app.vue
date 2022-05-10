<template>
	<div>
		<label>test</label>
	</div>
</template>

<script setup>
import { fetchWithCookie } from "./utils/fetchApi";

const result = await fetchWithCookie("/api/test", {
	method: `GET`,
	headers: useRequestHeaders(),
});
</script>
