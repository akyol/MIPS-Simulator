# MIPS-Simulator READ ME
Made by Flavortown (Abraham Lee, Tammy Vo, Jonathan Kim)

Repo Link: https://github.com/akyol/MIPS-Simulator

### Project Decisions: 

As a group, we decided to structure the code in terms of machine code, but the GUI is structured in a way so that the user can have an easier time using the instructions.

As a group, we decided to use Javascript, HTML/CSS for the code and to display the GUI.



### Project Files:

The css folder contains styling the GUI.

The images folder contains images used in the GUI.

The sounds folder contains an mp3 used for when Guy Fieri is clicked on.

The js folder contains 3 js files, one of which is main.js. the main.js instantiates the pc, memory, memory length, and handles whatever the user does in the GUI. Depending on what the user picks and executes, the main uses the chooseOperation() function, reads the instruction and uses the operations.js to displays it on the GUI.

The operations.js file handles all the logic behind the instructions. Every method in the operations.js does not return anything, but sets registers, changes the offset, or manipulates the memory location.


The tests folder contains our unit test for our project.

You will also see an index.html and a testIndex.html. The index.html file is to be used to  run the GUI and the testIndex.html is to be used for testing.



### The index.html GUI:
This is the main GUI to run. You can open this file either directly in the folder or by following this online
Link: https://akyol.github.io/MIPS-Simulator/index.html
On the GUI itself, you will see the project group name on the top of the screen. From there you will see drop down option buttons that shows "Opcode", "Mode", "Signed", "RS", "RT", "RD", "Imm", and an "Execute" button. In addition you will see the PC counter, the memory, as well as all the registers and their values. At the bottom you will see the glorious "Guy Fieri", the king of flavortown.

The Opcode drop down is used for picking the instruction you want. 

The Mode drop down is used for whether you want register mode or immediate mode.
(*NOTE if you use immediate mode we automatically adjust the GUI so it becomes compatible for immediate mode. 

The signed drop down is for picking if you want signed or unsigned. 

The RS and RT drop down are used for picking what registers to use.

Imm text box is used for inputing an immediate value.

The execute button is to execute the instruction.

Under this bar of instructions you will see a big text box that will auto populate the instructions depending on what instructions you executed.

PC will increment by itself, the memory and register values will change depending on what instruction you use.

If you hover your mouse over Guy Fieri, you will see the basic instruction format from the MIPS green card. (*NOTE if you click on him he will say his famous catch phrase! Careful about your volume, it maybe loud.)



### The testIndex.html GUI:
This html is for testing. Can be opened directly from the file or can be done through following this online
Link: https://akyol.github.io/MIPS-Simulator/testIndex.html
It's almost identical to the index.html besides some modifications so it can run the test. Press next to load the next test and press execute to run. Repeat until text box says done. There is also a previous button to see the previous test case. Text box will contain test method and tell you what value to be looking for test validation.