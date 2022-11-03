const { EventEmitter } = require("events");

class Emiter extends EventEmitter {
  constructor() {
    super()
    this.onmyAction();
  }
  onmyAction = () => {
    this.on("myAction", () => {
      console.log("go up");
    });
  };
  emitmyAction = () => {
    this.emit("myAction");
  };
}
module.exports = new Emiter();

//  const eventEmitter = new EventEmitter()

//  eventEmitter.on("myAction", ()=>{
//   console.log("go up");
//  })
// eventEmitter.emit("myAction")
// }
