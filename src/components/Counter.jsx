import React, { useState, useRef, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>

      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
