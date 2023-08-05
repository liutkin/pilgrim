import { flatten, find, pipe, equals } from 'ramda'
import { type Tile } from '@/interfaces/Tile'

export default (tiles: Tile[][], predicate: { key: string; value: unknown }): Tile =>
    pipe(
        flatten,
        find((tile: Tile) => equals(tile[predicate.key], predicate.value))
    )(tiles) as Tile
