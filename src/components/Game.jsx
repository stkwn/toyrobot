import React, { useState } from "react";
import {
  tableSize,
  commandLists,
  facing,
  errorMessages,
} from "../utils/constants";

const commands = commandLists.map((command) => command.name);

const checkPlaceParams = (param) =>{
    console.log(param);
    const location = param.split(',');
      // param should be 3
      if (location.length >3) { return {value:true, info: errorMessages.wrongParams}
      }
    


      //param should be north/west/east/south
      if (!facing.includes(location[2].toUpperCase())) return {checkResult:false, value:{value:true, info: errorMessages.wrongParams}};
      ////////////// need to handle " " or ' ';

      //param should be integer
      if (!Number.isInteger(parseInt(location[0])) || !Number.isInteger(parseInt(location[0]))) {
        return {checkResult:false, info:{value:true, info: errorMessages.wrongParams} }}
      //param should be inside the table
      if (location[0] > tableSize[0] && location[0] < 0) {
        return {checkResult:false,info:{value:true, info: errorMessages.wrongParams}};
      } 
      if (location[1] > tableSize[1] && location[1] < 0) {
        return {checkResult:false, info:{value:true, info: errorMessages.wrongParams}};
      } 
      return{checkResult:true, info:{x:location[0],y:location[1],facing:location[2].toUpperCase()}};
}


export default function Game() {
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState({});
  const [output, setOutput] = useState('');
  const [commandStr, setCommandStr] = useState("");
 

  const handleChange = (e) => {
    setCommandStr(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setError({value:false, info:""});

    const command = commandStr.substring(0,commandStr.indexOf("("));

    // if commands not include the comand
    if (!commands.includes(command)) {
      return setError({value:true, info: errorMessages.wrongCommands})
    } 
    // if commans not include the ()
    if (commandStr.indexOf("(") ===-1 ||  commandStr.indexOf(")")===-1) {
      return setError({value:true, info: errorMessages.wrongCommandFormat})
    } 

    // take the param out
    const param = commandStr.substring(commandStr.indexOf("(")+1, commandStr.indexOf(')'))

    if (command !== 'place' && param) {setError({value:true, info: errorMessages.noParams})}

    if (!robot && command !=="place")  {
      return setError({value:true, info: errorMessages.wrongBegin})
    } 


    //now we can play the robot;
    console.log('play the robot');
    console.log(command);
    console.log(param);

    switch (command.toUpperCase()) {
      case "PLACE":  {
        const check = checkPlaceParams(param);
        if (check.checkResult) {
          setRobot(check.info);
          setOutput("Success");
        } else {
          setError(check.info)
          setOutput("Failed");
       }
        break;
      };
      case "REPORT": {
        setOutput(`${robot.x},${robot.y},${robot.facing}`)
        break;
      }
      case "LEFT":{ 
        let facingIndex = facing.indexOf(robot.facing) - 1;
        if (facingIndex === -1) {facingIndex = facing.length -1};
        setRobot({...robot,facing:facing[facingIndex]})
                  setOutput("Success");
        break;
      };
      case "RIGHT": {
        let facingIndex = facing.indexOf(robot.facing) + 1;
        if (facingIndex === facing.length) facingIndex = 0;
        setRobot({...robot,facing:facing[facingIndex]})   
        setOutput("Success");   
        break;  
      }

      case "MOVE":{
        let xLocation = robot.x;
        let yLocation = robot.y;
        if (robot.facing === 'NORTH') {
          yLocation++;
          if (yLocation >= tableSize[1]) {yLocation = tableSize[1]-1} 
        }
        if (robot.facing === 'SOUTH') {
          yLocation--;
          if (yLocation <= 0) {yLocation=0} 
        }
        if (robot.facing === 'EAST') {
          xLocation++;
          if (xLocation >= tableSize[0]) {xLocation = tableSize[0]+1} 
        }
        if (robot.facing === 'WEST') {
          xLocation--;
          if (xLocation <= 0) {xLocation =0} 
        }
        setRobot({...robot, x:xLocation,y:yLocation});  
        setOutput("success");              
        break;
      }
      default:
        break;
    }

    setCommandStr('')
  }

  return (
    <>
      <div className="section section-center flexcontainer ">
        <div className="section-center">
          <h1 className="text-center">Command Window</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="commandInput">please input your commands:</label>
            <input
              className="input"
              id="commandInput"
              placeholder={!robot? "begin with place(x,y,facing) command":"enter your next command"}
              value={commandStr}
              onChange={handleChange}
            ></input>
            <button className="btn" type="submit">
              Submit Commands
            </button>
          </form>
          {error && error.info}
        </div>
        <div className="section-center">
          <h1 className="text-center">Onput Window</h1>
          <h2 className="text-center">{output}</h2>
        </div>
      </div>
    </>
  );
}
