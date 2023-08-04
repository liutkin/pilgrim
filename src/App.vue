<script lang="ts" setup>
import { ref } from 'vue'
import { draw, keys, random } from 'radash'
import { pipe } from 'ramda'

import generateMap from '@/utils/generateMap'

import MapTile from '@/components/MapTile.vue'

import { Size } from '@/enums/Map'
import type { Tile } from '@/interfaces/Tile'

const mapSize = pipe(keys, draw)(Size)
const tiles = pipe(generateMap, ref)(mapSize as Size)

const getRandomDelay = (): number => random(0, 1500) / 1000
</script>

<template>
    <div class="grid place-content-center h-screen">
        <ul>
            <li v-for="(rows, rowIdx) in tiles" :key="rowIdx" class="flex">
                <ul class="flex">
                    <MapTile
                        v-for="(tile, columnIdx) in rows as Tile[]"
                        :key="tile.id"
                        v-bind="tile"
                        class="animate-fade w-10 h-10 opacity-0"
                        :style="{ animationDelay: `${getRandomDelay()}s` }"
                        :class="(rowIdx + columnIdx) % 2 === 0 ? 'bg-blue-400' : 'bg-blue-200'"
                    />
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.animate-fade {
    animation-name: fade-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
