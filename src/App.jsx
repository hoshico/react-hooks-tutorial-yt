import { useEffect, useState, useContext, useRef, useReducer } from 'react'
import './App.css'
import ShinCodeContext from './main';

/*
  reducerを作成(コンポーネントの外に作成)
*/
const reducer = (state, action) => {
  switch(action.type) {
    // action名をincrementとする
    case "increment":
      return state + 1;
    // decrementの場合
    case "decrement":
      return state - 1;
    // 何もない場合
    default:
      return state
  }
}


function App() {
  const [count, setCount] = useState(0);
  /*
    useContextで呼び出すことで
    valueに指定したデータを使用することができる
  */
  const shincodeInfo = useContext(ShinCodeContext);

  /*
    useRef
    指定したHTMLのタグの情報を参照しにいく
  */
  const ref = useRef();

  /*
    useReducer
    useReducer()の
    第一引数はreducer
    第二引数は初期値

    dispatchはreducerに対して通知
  */
 const [state, dispatch] = useReducer(reducer, 0);

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

  const handleRef = () => {
    console.log(ref.current.value);
  };

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>UseRef</button>
      <hr />

      <h1>useReducer</h1>
      <p>カウント:{state}</p>
      {/*action名で通知を出す → reducerの中身が実行される*/}
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      {/*action名で通知を出す → reducerの中身が実行される*/}
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
    </div>
  )
}

export default App
