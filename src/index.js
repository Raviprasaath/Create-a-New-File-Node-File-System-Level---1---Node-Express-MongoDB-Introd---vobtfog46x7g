const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  const filePath = `./${fileName}`
  try {
    await fs.writeFile(filePath, fileContent);
  } catch (e) {
    console.log(e)
  }
};

module.exports = { writeFile };
