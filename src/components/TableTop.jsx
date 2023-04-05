
import React from 'react'
import { tableSize } from './../utils/constants';
import {BsRobot} from 'react-icons/bs'

export default function TableTop({robot}) {

if (!robot) robot = {x:99,y:99,facing:'NORTH'}

const rotate ={
  "EAST": "rotate_east",
  "WEST": "rotate_west",
  "SOUTH": "rotate_south",
  "NORTH": "rotate_north"
}

function container (x,y,facing) {
  const active = ( y===0  ? (x === 0 ? 0 :x ) : (y*tableSize-1+x+1));
  const roateclassName = rotate[facing];

  const divs = Array(tableSize*tableSize).fill().map((_,index) => 
  <div key={index} className={index === active ? `square active ${roateclassName}`:`square ` }>
    {<BsRobot />}
  </div>)

  return divs
}
  return (<div className='tableTop_container'>  
      {container(robot.x,robot.y,robot.facing)}
  </div>
  )
}
