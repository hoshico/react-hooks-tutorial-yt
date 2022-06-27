import { useEffect, useState, useContext } from 'react'
import './App.css'
import ShinCodeContext from './main';


function App() {
  const [count, setCount] = useState(0);
  /*
    useContextで呼び出すことで
    valueに指定したデータを使用することができる
  */
  const shincodeInfo = useContext(ShinCodeContext);

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
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>
    </div>
  )
}

export default App
