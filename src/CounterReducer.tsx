import { useReducer } from "react";

interface CounterState {
  value: number;
}

interface BasicCounterAction {
  type: 'INCREMENT' | 'DECREMENT';
}

interface SetCounterAction {
  type: 'SET';
  payload: number;
}

type CounterAction = BasicCounterAction | SetCounterAction

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }

    case 'DECREMENT':
      return { value: state.value - 1 }

    case 'SET':
      return { value: action.payload || 0 }

    default:
      return state;
  }
}

const CounterReducer = () => {

  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const increment = () => dispatch({type: 'INCREMENT'});
  const decrement = () => dispatch({type: 'DECREMENT'});
  const reset = () => dispatch({type: 'SET', payload: 0})
  const set = (n: number) => dispatch({type: 'SET', payload: n});

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.value}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
    </main>
  );
};
export default CounterReducer;