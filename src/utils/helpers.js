import { facing, tableSize, commandLists, errorMessages } from "./constants";

const commands = commandLists.map((command) => command.name);
const facingArr = [
  ...facing,
  ...facing.map((f) => `'${f}'`),
  ...facing.map((f) => `"${f}"`),
];

export const checkParams = (param) => {
  const paramsResult = {
    info: {},
    checkResult: { value: false, info: "" },
  };

  if (!param)
    return {
      ...paramsResult,
      checkResult: { value: true, info: errorMessages.wrongParams },
    };

  const locationTemp = param.split(",").map((item) => item.trim());
  console.log(locationTemp);

  // const regText =`^[0- ${tableSize}],[0-${tableSize}],'[a-zA-Z]+'$``

  // param should be 3
  if (locationTemp.length > 3)
    return {
      ...paramsResult,
      checkResult: { value: true, info: errorMessages.wrongParams },
    };

  if (
    !Number.isInteger(parseInt(locationTemp[0])) ||
    !Number.isInteger(parseInt(locationTemp[1]))
  ) {
    return {
      ...paramsResult,
      checkResult: { value: true, info: errorMessages.wrongParams },
    };
  }
  locationTemp[0] = parseInt(locationTemp[0]);
  locationTemp[1] = parseInt(locationTemp[1]);
  locationTemp[2] = locationTemp[2].trim().toUpperCase();
  // param should be north/west/east/south
  // param should be inside the table
  if (
    locationTemp[0] > tableSize ||
    locationTemp[0] < 0 ||
    locationTemp[1] > tableSize ||
    locationTemp[1] < 0
  ) {
    return {
      ...paramsResult,
      checkResult: { value: true, info: errorMessages.sizeTooBig },
    };
  }

  if (!facingArr.includes(locationTemp[2]))
    return {
      ...paramsResult,
      checkResult: { value: true, info: errorMessages.wrongParams },
    };

  if (locationTemp[2].includes(`'`) || locationTemp[2].includes(`"`)) {
    locationTemp[2] = locationTemp[2]
      .toUpperCase()
      .substring(1, locationTemp[2].length - 1);
  }

  return {
    ...paramsResult,
    info: {
      x: locationTemp[0],
      y: locationTemp[1],
      facing: locationTemp[2],
    },
  };
};

export const checkCommand = (commandStr) => {
  const commandResult = {
    command: "",
    param: "",
    checkResult: { value: false, info: "" },
  };

  // if commands not include the ()
  if (commandStr.indexOf("(") === -1 || commandStr.indexOf(")") === -1) {
    return {
      ...commandResult,
      checkResult: { value: true, info: errorMessages.wrongCommandFormat },
    };
  }

  const command = commandStr
    .substring(0, commandStr.indexOf("("))
    .trim()
    .toUpperCase();

  // if commandsList not include the command
  if (!commands.includes(command)) {
    return {
      ...commandResult,
      checkResult: { value: true, info: errorMessages.wrongCommands },
    };
  }
  // take the param out
  const param = commandStr.substring(
    commandStr.indexOf("(") + 1,
    commandStr.indexOf(")")
  );
  // no params for other commands except place
  if (command !== "PLACE" && param) {
    return {
      ...commandResult,
      checkResult: { value: true, info: errorMessages.noParams },
    };
  }

  return { ...commandResult, command: command, param: param };
};
