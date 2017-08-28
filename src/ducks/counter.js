// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const INCREMENT_NUMBER = 'INCREMENT_NUMBER';
const DECREMENT_NUMBER = 'DECREMENT_NUMBER';

export function increment(amount){
    return{
        type: INCREMENT_NUMBER,
        payload: amount
    }
}

export function decrement(amount){
    return{
        type: DECREMENT_NUMBER,
        payload: amount
    }
}

let inititalState = {
    counter: 0
}

function reducer(state = inititalState, action){
    switch(action.type){
        case INCREMENT_NUMBER:
            let startingValue = state.counter;
            let nextValue = action.payload;
            let total = startingValue + nextValue;
            return Object.assign({}, state, {counter: total});
        case DECREMENT_NUMBER:
            return Object.assign({}, state, {counter: state.counter - action.payload});
    }
    return state;
}

export default reducer;