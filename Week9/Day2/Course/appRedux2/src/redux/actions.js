export const INCREMENT = 'add';
export const DECREMENT = 'minus';
export const CHANGETITLE = 'changeTitle'

export const add = () => {
    return {
        type:INCREMENT,
    }
} 

export const minus = () => {
    return {
        type:DECREMENT,
    }
} 

export const changeTitle = () => {
    return {
        type: CHANGETITLE,
    }
}
