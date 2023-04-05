# Toy Robot

Getting Started ✨ :sparkles:

## Install dependencies

```bash
$ npm i
```



## Start the server

Open [http://localhost:3000](http://localhost:3000) with your browser to start play the Robot Game.

You can start editing the page by modifying `src/App.js`. The page auto-updates as you edit the file.



## Project structure

```
$PROJECT_ROOT
├── public
├── src
│   ├── components
│       ├── Header
│           # show the commands list and tips about how to play the game.
│       ├── Game
│           # the input and output windows
│       ├── TableTop
│           # the game playboard.
│   ├── utils
│       ├── constants
│           # define the tablesize, commands, error message, facing direction
│       ├── helpers
│           # define functions
```



## Online Demo

Open https://toyrobot.arina-dev.com/ with your browser to play the game online.

![image-20230406073525885](\Asset\game.jpg)



## Game instruction and tips

#### Game commands

- Five commands
  -  **PLACE(x,y,facing)** -- The robot will be placed according to x,y and facing the direction provided.
  -  **MOVE()** -- The robot will move forward one space in the direction it is facing.
  -  **LEFT()** -- Rotate the robot 90 º anticlockwise.
  - **RIGHT()** -- Rotate the robot 90 º.
  -  **REPORT()** -- Outputs the robots current grid location and facing direction

#### Tips

1. Begin the game with **PLACE(X,Y,FACING)** command. 

   - The x,y are integer that relate to location of the playboard. 0,0 on the grid as bottom left.

   - The facing is the direction the robot is facing. Acceptable value: **east, south, west, north**. Double quotes and single quotes around these values are working the same.

2. Commands are **case-insensitive**. Move(), move(), MOVE() are treated as equivalent.

3. Correct your command easily but the **error message** showed in the command windows. 

4. The output window will show whether your command  executes successfully or fail. If the robot is on the edge of the playboard, and you still want to move it. Failed will show on the table.

5. Toggle the button to show / hide the playboard. 



<i><b>Enjoy the journey!</b></i>:clap:



