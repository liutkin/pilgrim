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

const getRandomSecondsDelay = (): number => random(0, 1500) / 1000
</script>

<template>
    <div class="grid place-content-center h-screen">
        <ul>
            <li v-for="(rows, rowIdx) in tiles" :key="rowIdx" class="flex">
                <ul class="flex">
                    <li v-for="tile in rows as Tile[]" :key="tile.id">
                        <MapTile
                            v-bind="tile"
                            class="tile"
                            :style="{ animationDelay: `${getRandomSecondsDelay()}s` }"
                        />
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.tile {
    width: 2.5rem;
    height: 2.5rem;
    animation-name: fade-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    transform: translateY(25%);
    opacity: 0;
}

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(25%);
    }
    to {
        opacity: 1;
        transform: none;
    }
}
</style>
