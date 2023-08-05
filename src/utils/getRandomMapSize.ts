import { draw, keys } from 'radash'

import { Size } from '@/enums/Map'

export default (): Size => draw(keys(Size)) as Size
