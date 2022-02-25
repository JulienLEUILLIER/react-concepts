import React, { useState } from 'react'

const Counter:React.FC = () => {

    const [count, setCount] = useState(0);

    const changeCount = (event:React.ChangeEvent<HTMLInputElement>) => {
        setCount(+event.target.value);
    }

    return (
      <main>
        <h1>Days Since Last Incident</h1>
        <p>{count}</p>
        <section>
          <button onClick = {() => setCount(count + 1)}>Increment</button>
          <button onClick = {() => setCount(0)}>Reset</button>
          <button onClick = {() => setCount(count - 1)}>Decrement</button>
        </section>
        <section>
          <form onSubmit={(event: React.FormEvent) => {
              event.preventDefault();
              console.log(event.target)}}>
            <label htmlFor="set-to">Set Count</label>
            <input id="set-to" value={count} onChange={changeCount} type="number" />
          </form>
        </section>
      </main>
    );
  };

export default Counter