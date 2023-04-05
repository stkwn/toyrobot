import React from "react";
import { commandLists, facing } from "../utils/constants";

export default function Header() {
  return (
    <div className="section header">
      <div className="section-center">
        <h1 className="text-center">Welcome to Toy Robot Game</h1>
        {/* List the control commands */}
        <div>
          <h3>Control the robot using below commands</h3>
          <ul>
            {commandLists.map((command) => {
              return (
                <li key={command.id}>
                  <p>
                    <span>{command.id} -- </span>
                    <strong>
                      {command.name}({command.params ? `${command.params}` : ``}
                      )
                    </strong>
                    <span> -- {command.desp}</span>
                  </p>
                </li>
              );
            })}
          </ul>
          <h4>Tips: </h4>
          <ul>
            <li>
              Commands is <strong>CASE INSENSITIVE</strong>;{" "}
            </li>
            <li>Invalid commands will be discarded; </li>
            <li>Facing value :<strong>{facing.map((face, index) => `"${face}",`)}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
