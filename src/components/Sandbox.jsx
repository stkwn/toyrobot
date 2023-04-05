// import React, { useState } from "react";
// import { checkParams } from "../utils/helpers";

// //make it easy of using this sandbox to check some new util function,
// //should remove it later
// //add it to gitignore later

// export default function Sandbox() {
//   const [str,setStr] = useState('');

//   const handleSubmit =(e) =>{
//     e.preventDefault();
//     const result = checkParams(str);
//     console.log(result)
//   } 

//   return (
//     <div className="section section-center">
//       <h1>Sandbox</h1>
//       <form onSubmit={handleSubmit}>
//       <input
//         placeholder="enter"
//         value={str}
//         onChange={e => setStr(e.target.value)}
//       >
//       </input>
//       </form>

//     </div>
//   );
// }

import React from 'react'
import { tableSize } from './../utils/constants';
import {BsRobot} from 'react-icons/bs'

export default function Sandbox() {

// function container( ) {
//   const rowdivs = Array(tableSize)
//     .fill()
//     .map((_, index) => <div key={index} className='tableTop_box'>{index}</div>);
  
//   const tabledivs = Array(tableSize)
//     .fill()
//     .map((_, index) => <div key={index} className='tableTop_row'>{rowdivs}</div>);
    
//     return <div className='grid'>{tabledivs}</div>;
// }
const rotate ={
  "EAST": "rotate_east",
  "WEST": "rotate_west",
  "SOUTH": "rotate_south",
  "NORTH": "rotate_north"
}

function container (x,y,facing) {
  const active = ( y===0  ? (x === 0 ? 0 :x ) : (y*tableSize-1+x+1));
  const roateclassName = rotate[facing];
   console.log(active)

  const divs = Array(tableSize*tableSize).fill().map((_,index) => 
  <div key={index} className={index === active ? `square active ${roateclassName}`:`square ` }>
    {<BsRobot />}
  </div>)

  return <div className='tableTop_container'>{divs}</div>
}
  return (<>  
      {container(4,4,"SOUTH")}
  </>
  )
}
