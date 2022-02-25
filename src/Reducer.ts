import { State, Action, ActionKind } from "./ComponentReducer"

const counterReducer = (state: State, action: Action) => {

    const {type, payload} = action;
    
    switch (type) {
        case ActionKind.increase:
            return {
                ...state,
                value: state.value + payload
            }
    
        case ActionKind.decrease:
            return {
                ...state,
                value: state.value - payload
            }
        default:
            return state;
    }
}

export default counterReducer