// src/components/Counter.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter: React.FC = () => {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
