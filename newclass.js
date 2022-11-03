const fs = require("fs");
 class Newclass {
  writeTheFile = () => {
    fs.writeFile("./firstClass.txt", "rehovot", (err) => {
        if(err) return console.log(err);
    });
  };
  readTheFile = () => {
    fs.readFile("./firstClass.txt", {encoding: "utf8"},(err,data) => {
    if(err) return console.log(err);
    console.log(data);
    });
  };
}
module.exports ={
  myClassObject : new Newclass(),
  Newclass
}
