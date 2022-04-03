# Professional README Generator

## Screencastify Tutorial
### Please follow the link below to watch a walkthrough of how the README Generator works.
https://drive.google.com/file/d/1X9gLzg70zcqMbf0jeZXDTd4R5c5jaTe4/view

## Description
For this challenge, we were tasked with creating a README generator using Node.js. As per the guidelines, we were to utilize the inquirer package in order to capture user input using the command line. When the user answers the prompts, that information is taken and used in a template literal to fill out the rest of the README framework. In the walkthrough above, I show how to invoke the prompts (by entering node index.js) and what will happen when that information is accessed by the template literal.

In my index.js file, I used an array called 'questions' in order to write all of my questions that are asked through the terminal all together. I found that this made my life easier than adding the questions inside of 'inquirer.prompt', because you can add the array to the call rather than the questions themselves, and it made more sense to keep these two sections of code separate from each other. 

After the questions array, I have a 'writeFile' and a 'readFile' function, which have a lot of the same functionality. I know that giving these two functions their own separate file would make a lot more sense, but for whatever reason, I was unable to get my markdown file to generate if the functions were not in index.js. I would like to go back in the future and see if I can figure out what went wrong there!

## Technologies
This project was built using Node.js.

## Screenshot
![inquirer-walkthrough](./images/inquirer-terminal-example.png)

## Sample README
Inside of the 'dist' folder, you will find a sample README generated using my code. Please refer to that README in order to see how it ends up on GitHub!