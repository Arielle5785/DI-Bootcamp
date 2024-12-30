import { INCREMENT, DECREMENT, CHANGETITLE } from "./actions";

const initialState = {
    count: 5,
    title: 'The Reducer'
}

export const counterReducer = (state = initialState, action) => {
    // {
    //     if (action.type === INCREMENT) {
    //         return { ...state, count: state.count + 1 };
    //     }
    //     else if (action.type === DECREMENT) {
    //         return { ...state, count: state.count - 1 };
    //     }
    //     return state
    // }

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case CHANGETITLE:
            return{...state, title: state.title}
        default:
            return state;
    }
}
