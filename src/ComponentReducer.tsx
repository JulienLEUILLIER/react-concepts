import React, { useReducer } from 'react'
import counterReducer from './Reducer';

export enum ActionKind {
    increase = 'INCREASE',
    decrease = 'DECREASE'
}

export interface State {
    value: number
}

export interface Action {
    type: ActionKind
    payload: number,
}

const ComponentReducer = () => {

    const initialCounterState: State = {
        value: 0
    };

    const increaseAction: Action = {
        type: ActionKind.increase,
        payload: 1
    }

    const decreaseAction: Action = {
        type: ActionKind.decrease,
        payload: 1
    }
    
    const [state, dispatch] = useReducer(counterReducer, initialCounterState)

    return (
        <div>
            Count: {state.value}
            <button onClick={() => dispatch(increaseAction)}>+</button>
            <button onClick={() => dispatch(decreaseAction)}>-</button>
        </div>
    )
}

export default ComponentReducer