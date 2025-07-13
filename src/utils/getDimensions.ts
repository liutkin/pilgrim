import { random } from 'radash'

import { SIZE } from '@/constants/map'
import { Size } from '@/enums/Map'

export default (size: Size): { length: number; width: number } => ({
    length: random(SIZE[size].LENGTH.MIN, SIZE[size].LENGTH.MAX),
    width: random(SIZE[size].WIDTH.MIN, SIZE[size].WIDTH.MAX),
})
