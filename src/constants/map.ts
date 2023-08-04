import { Size } from '@/enums/Map'

export const SIZE = {
    [Size.SM]: {
        LENGTH: {
            MIN: 4,
            MAX: 10,
        },
        WIDTH: {
            MIN: 4,
            MAX: 10,
        },
    },
    [Size.MD]: {
        LENGTH: {
            MIN: 10,
            MAX: 20,
        },
        WIDTH: {
            MIN: 10,
            MAX: 20,
        },
    },
    [Size.LG]: {
        LENGTH: {
            MIN: 20,
            MAX: 30,
        },
        WIDTH: {
            MIN: 15,
            MAX: 20,
        },
    },
}
