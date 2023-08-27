 
import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs"

inquirer
  .prompt([
    {
        message:"type your URL",
        name:"URL",
}
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);

    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) 
      console.log("error")
  });
  })
  



