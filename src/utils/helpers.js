const commands = ["place", "move", "left", "right", "report"];

function checkCommand() {
  const regexPlace = new RegExp(
    `^(place)\\([1-4]),([1-4]),(north|west|east|south)\\)$)`,
    "i"
  );
  // const regexOther = new RegExp(`^(${commands.join('|')})\\(\\)$`);
  console.log(regexPlace.test(`place(2, 1, "north"))`);
}

checkCommand();
