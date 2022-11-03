const fs = require("fs");
const EventEmitter = require("events").EventEmitter;

const  text = "cdcccccccccccccccccccccccccccccdddddddddddddddddddddddd"
class Macabi extends EventEmitter {
    constructor(){
        super()
        this.writeToFile()
    }
  readFromTheFile = () => {
    fs.readFile("./macbiFile.txt", { encoding: "utf8" }, (err,data) => {
      if (err) return console.log(err);
      this.emit("finish",data)
    });
  };
  writeToFile () {
    this.on("finish", (data) =>{
        console.log("text read successfully");
      fs.appendFile("./macbiFile-UpperCase.txt",data.toUpperCase(),() => {
      })
    })

  }

}

module.exports  = new Macabi();
