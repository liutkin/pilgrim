<script lang="ts" setup>
import { random, draw } from 'radash'

import { type Tile } from '@/interfaces/Tile'

const bgSrc = `/img/floors/floor${random(1, 6)}.png`
const rotation = draw([0, 90, 180, 270])

const props = defineProps<Tile>()
</script>

<template>
    <div class="relative">
        <div v-if="props.hero">Hero</div>
        <div
            :style="{
                backgroundImage: `url('${bgSrc}')`,
                transform: `rotate(${rotation}deg)`,
            }"
            class="tile absolute inset-0"
        />
    </div>
</template>

<style scoped>
.tile {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
}
</style>
