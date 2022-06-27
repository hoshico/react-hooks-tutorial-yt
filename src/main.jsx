import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/*
  useContext
  ①グローバルなデータを用意(shincodeInfo)
  ②providerで全体をラップする
  ③valueで共有したいデータを指定
  ④createContextを外部で使用できるようにする
*/
const shincodeInfo = {
  name: "shincode",
  age: 24,
};
/*
  createContext(関数)を使用して
  グローバルに扱えるcontextを生成できる
*/
const ShinCodeContext = createContext(shincodeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShinCodeContext.Provider value={shincodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShinCodeContext.Provider>
)

export default ShinCodeContext;