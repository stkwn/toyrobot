import React, { useState } from "react";
import {
  tableSize,
  facing,
  errorMessages,
} from "../utils/constants";
import { checkCommand, checkParams } from "../utils/helpers";

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

    const {command,param,checkResult} = checkCommand(commandStr);
    setCommandStr('')
    if (checkResult.value) {return setError({...checkResult})};

    if (!robot && command !=="PLACE")  {
      return setError({value:true, info: errorMessages.wrongBegin})
    } 

    if (!robot && command === "PLACE") {
      const check = checkParams(param);
      if (!check.checkResult.value) {
          console.log(check)
          setRobot({...check.info});
          setOutput("Success");
      } else {
        return setError({value:true, info: errorMessages.wrongBegin})
      }
    }
    
    setError({value:false, info:""})

    switch (command) {
      case "PLACE":  {
        const check = checkParams(param);
        if (!check.checkResult.value) {
          setRobot(check.info);
          setOutput("Success");
        } else {
          setError(check.checkResult)
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
        setOutput("success");    
        if (robot.facing === 'NORTH') {
          yLocation++;
          if (yLocation >= tableSize) {
            yLocation = tableSize-1;
            setOutput("failed")
          } 
        }
        if (robot.facing === 'SOUTH') {
          yLocation--;
          if (yLocation <= 0) {yLocation=0;setOutput("failed") } 
        }
        if (robot.facing === 'EAST') {
          xLocation++;
          if (xLocation >= tableSize) {xLocation = tableSize+1; setOutput("failed")} 
        }
        if (robot.facing === 'WEST') {
          xLocation--;
          if (xLocation <= 0) {xLocation =0; setOutput("failed")} 
        }
        setRobot({...robot, x:xLocation,y:yLocation});  
        break;
      }

      default:
        break;
    }
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
          <p><strong>Error Message :   </strong>
          {error && error.info}
          </p>
        </div>
        <div className="section-center">
          <h1 className="text-center">Onput Window</h1>
          <h2 className="text-center">{output}</h2>
        </div>
      </div>
    </>
  );
}
