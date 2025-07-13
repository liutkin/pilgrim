<script lang="ts" setup>
import { ref } from 'vue'
import { random } from 'radash'
import { pipe } from 'ramda'
import getDimensions from '@/utils/getDimensions.ts'
import getTiles from '@/utils/getTiles.ts'
import getRandomMapSize from '@/utils/getRandomMapSize.ts'
import setHeroCoords from '@/utils/setHeroCoords.ts'
import getRandomCoords from '@/utils/getRandomCoords.ts'
import MapTile from '@/components/MapTile.vue'
import type { Tile } from '@/types/Tile.ts'

const size = getRandomMapSize()
const { length, width } = getDimensions(size)
const heroStartingCoords = getRandomCoords(length, width)

const tiles = pipe(getTiles, ref)(length, width)
setHeroCoords(heroStartingCoords, tiles)
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
                            :style="{ animationDelay: `${random(0, 1500) / 1000}s` }"
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
