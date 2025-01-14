import { useReducer } from "react";

// type CounterAction = {
//   type: 'INCREMENT' | 'DECREMENT' | 'SET';
//   payload?: number;
// }
type CounterState = {
  value: number;
}
type BasicCounterAction = {
  type: 'INCREMENT' | 'DECREMENT';
}
type SetCounterAction = {
  type: 'SET';
  payload: number;
}
type CounterAction = BasicCounterAction | SetCounterAction;

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'SET':
      return { value: (action.payload) };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const inc = () => dispatch({ type: 'INCREMENT' });
  const dec = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'SET', payload: 0 });
  const set = (n: number) => dispatch({ type: 'SET', payload: n });

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.value}</p>
      <section className="controls">
        <button onClick={inc}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={dec}>Decrement</button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
