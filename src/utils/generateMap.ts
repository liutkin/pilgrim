import { list, uid, random } from 'radash'

import { Size } from '@/enums/Map'
import { SIZE } from '@/constants/map'
import type { Tile } from '@/interfaces/Tile'

export default (size: Size): Tile[][] => {
    const length = random(SIZE[size].LENGTH.MIN, SIZE[size].LENGTH.MAX)
    const width = random(SIZE[size].WIDTH.MIN, SIZE[size].WIDTH.MAX)

    return list(1, width).map((_, x) =>
        list(1, length).map((_, y) => ({
            coords: [x + 1, y + 1],
            id: uid(16),
            discovered: false,
            lit: false,
        })),
    )
}
