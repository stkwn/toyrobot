export const tableSize = [5, 5];
export const commandLists = [
  {
    id: 1,
    name: "place",
    params: "x,y,facing",
    desp: "Place the toy robot on the grid location, face the direction provided.",
  },
  {
    id: 2,
    name: "move",
    desp: "Move the robot 1 grid in the direction it is facing.",
  },
  {
    id: 3,
    name: "left",
    desp: "Rotate the robot 90 \u25CB anticlockwise.",
  },
  {
    id: 4,
    name: "right",
    desp: "Rotate the robot 90 \u25CB",
  },
  {
    id: 5,
    name: "report",
    desp: "Outputs the robots current grid location and facing direction",
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
};