import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
    message:'enter your desired url',
    name:'url'}
  ])
  .then((answers) => {
    console.log(answers);
    const url=answers.url
    let img=qr.image(url,{type:'png'})
    img.pipe(fs.createWriteStream('i_love_qr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    }
  });
