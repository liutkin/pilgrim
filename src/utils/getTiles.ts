import { list, uid } from 'radash'
import type { Tile } from '@/interfaces/Tile'

export default (length: number, width: number): Tile[][] =>
    list(1, width).map((_, x) =>
        list(1, length).map((_, y) => ({
            coords: [x + 1, y + 1],
            id: uid(16),
            discovered: false,
            hero: false,
        }))
    )
