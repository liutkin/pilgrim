<script lang="ts" setup>
const props = defineProps<{
    coords: [number, number]
    id: string
    discovered: boolean
    lit: boolean
}>()
</script>

<template>
    <li>{{ props.coords[0] }} {{ props.coords[1] }}</li>
</template>
