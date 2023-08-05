import { random } from 'radash'

/**
 * Length and width are 1-indexed map dimensions.
 * X relates to width, Y relates to length.
 */
export default (mapLength: number, mapWidth: number): number[] => [
    random(1, mapWidth),
    random(1, mapLength),
]
