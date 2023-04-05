export const tableSize = 5;
export const commandLists = [
  {
    id: 1,
    name: "PLACE",
    params: "x,y,facing",
    desp: "The robot will be placed according to x,y and facing the direction provided.",
  },
  {
    id: 2,
    name: "MOVE",
    desp: "The robot will move forward one space in the direction it is facing.",
  },
  {
    id: 3,
    name: "LEFT",
    desp: "Rotate the robot 90 \u00ba anticlockwise.",
  },
  {
    id: 4,
    name: "RIGHT",
    desp: "Rotate the robot 90 \u00ba. ",
  },
  {
    id: 5,
    name: "REPORT",
    desp: "Outputs the robots current grid location and facing direction. ",
  },
];

export const facing = ["EAST", "SOUTH", "WEST", "NORTH"];

export const errorMessages = {
  wrongBegin: "Start the game by place(x,y,facing) commands.",
  wrongCommandFormat: "Commands should have () in the end.",
  wrongCommands: "Error Commands. Only 5 commands acceptable.",
  emptyParams: "Should provide correct params",
  noParams: "no params acceptable for this command",
  wrongParams: "wrong command params format",
  sizeTooBig: "the location is out of the table size",
};
