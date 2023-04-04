import React, { useState } from "react";
import { checkParams } from "../utils/helpers";


export default function Sandbox() {
  const [str,setStr] = useState('');

  const handleSubmit =(e) =>{
    e.preventDefault();
    const result = checkParams(str);
    console.log(result)
  } 

  return (
    <div className="section section-center">
      <h1>Sandbox</h1>
      <form onSubmit={handleSubmit}>
      <input
        placeholder="enter"
        value={str}
        onChange={e => setStr(e.target.value)}
      >
      </input>
      </form>

    </div>
  );
}
