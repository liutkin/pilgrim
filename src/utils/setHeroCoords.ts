import { type Ref } from 'vue'
import { pipe, tap } from 'ramda'
import findTile from '@/utils/findTile'
import { type Tile } from '@/types/Tile'

// export default (coords: number[]): ((tiles: Tile[][]) => Tile[][]) =>
//     pipe(
//         tap((tiles: Tile[][]) => {
//             const tile = findTile(tiles, { key: 'coords', value: coords })
//             tile.hero = true
//         })
//     )

export default (coords: number[], tiles: Ref<Tile[][]>): any => {}
