import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from './features/counter/counterSlice';
const App = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [val, setVal] = useState(0);
    return (
      <div className="App">
        <h1>Counter Example!</h1>
        <br></br>
        
        <h3>Counter : {count}</h3>
        <button onClick={()=>dispatch(increment())}>ADD</button>
        <button onClick={()=>dispatch(decrement())}>SUBTRACT</button>
        <input value={val} onChange={(e)=>setVal(e.target.value)}></input>
        <button onClick={()=>dispatch(incrementByValue(Number(val) || 0))}>ADD VALUE</button>

      </div>
    );

}

export default App;
