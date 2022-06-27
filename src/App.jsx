import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count => count + 1 );
    
  } 
  /* 
    useEffect
    第一引数のコールバック関数の中ではset関数は使わない(依存関係のあるもの)
    第二引数空の配列を渡すことでページがマウントされたタイミングで発火される
    React18だとuseEffectが2回発火する(main.js内のstrictモードの場合)
  */
  useEffect(() => {
    console.log("hello Hooks")
  }, [count]);

  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
    </div>
  )
}

export default App
