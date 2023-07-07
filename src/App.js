import logo from './logo.svg';
import './App.css';
import s from "./style.module.css"
import { useState } from 'react';

function App() {
  const Execute=()=>{
    setInput(eval(Input))
  }
  
  
  const Handler=(a)=>{
    setInput(Input+a)

  }

   const [Input,setInput]=useState('')

  return (
    <div>
      <div>
      <div className={s.line}>
      <input 
      onChange={(e)=>{/^\d+$/.test(e.target.value)?setInput(e.target.value):setInput(Input)}} 
      value={Input} className={s.Input} />
      </div>
      <div style={{marginLeft: "-139px"}} className={s.line}>
      <div onClick={()=>{setInput('')}} className={s.erase}>C</div>
      <div onClick={()=>{setInput(Input.slice(0,Input.length-1))}} className={s.erase}>←</div>
      </div>

      <div className={s.line}>
      <div onClick={()=>{Handler(1)}} className={s.digit}>1</div>
      <div onClick={()=>{Handler(2)}} className={s.digit}>2</div>
      <div onClick={()=>{Handler(3)}} className={s.digit}>3</div>
      <div onClick={()=>{Handler("+")}} style={{ backgroundColor: "orange" }} className={s.digit}>+</div>
      </div>

    </div><div className={s.line}>

        <div onClick={()=>{Handler(4)}} className={s.digit}>4</div>
        <div onClick={()=>{Handler(5)}} className={s.digit}>5</div>
        <div onClick={()=>{Handler(6)}} className={s.digit}>6</div>
        <div onClick={()=>{Handler("-")}} style={{ backgroundColor: "orange" }} className={s.digit}>-</div>
      </div><div className={s.line}>

        <div onClick={()=>{Handler(7)}} className={s.digit}>7</div>
        <div onClick={()=>{Handler(8)}} className={s.digit}>8</div>
        <div onClick={()=>{Handler(9)}} className={s.digit}>9</div>
        <div onClick={()=>{Handler("/")}} style={{ backgroundColor: "orange" }} className={s.digit}>/</div>
      </div><div className={s.line}>

        <div onClick={()=>{Handler(0)}} className={s.digit}>0</div>
        <div onClick={Execute} className={s.eq}>=</div>
        <div onClick={()=>{Handler("*")}} style={{ backgroundColor: "orange" }} className={s.digit}>*</div>
      </div>

   </div>
   
  );
}

export default App;
