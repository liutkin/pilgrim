import { pipe, tap } from 'ramda'
import findTile from '@/utils/findTile'
import { type Tile } from '@/interfaces/Tile'

export default (tiles: Tile[][], coords: number[]): Tile[][] =>
    pipe(
        tap((tiles: Tile[][]) => {
            console.log('coords', coords)
            const tile = findTile(tiles, { key: 'coords', value: coords })
            console.log('tile', tile)
        })
    )(tiles)
