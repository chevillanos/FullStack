/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// inquirer
//   .prompt(["Which URL do you want to generate a QR code for?"])
//   .then((answers) => {
//     console.log("Check your QR code at: " + answers);
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.log("Prompt couldn't be rendered in the current environment");
//     } else {
//       console.log(`Something else went wrong: ${error}`);
//     }
//   });

const questions = [
  {
    type: "input",
    name: "url",
    message: "Which URL do you want to generate a QR code for?",
    default: "https://www.example.com",
  },
];

const prompt = inquirer.createPromptModule();

prompt(questions).then((answers) => {
  var qr_svg = qr.image(answers.url, { type: "png" });
  qr_svg.pipe(fs.createWriteStream("qr_image.png"));

  fs.writeFile("user_input.txt", answers.url, (err) => {
    if (err) throw err;
    console.log("User input saved to user_input.txt");
  });

  console.log("QR code generated and saved as qr_image.png");
});
