import { getObstacleEvents } from './computer-vision';

interface AutonomousCar{
  isRunning? : boolean
  respond: (events:Events) => void 
}
interface AutonomousCarProps{
  isRunning? : boolean
  steeringControl : Steering
}
interface Events{
  [event: string]: boolean
}
interface Control{
  execute : (command:string) => void
}
interface Steering extends Control{
  turn: (direction:string) => void
}
class SteeringControl implements Steering{
  execute(command:string){
    console.log('Executing:',command)
  }
  turn(direction:string){
    this.execute("turn " + direction)

  }
}




class Car implements AutonomousCar{
  isRunning;
  steeringControl;
  constructor(props: AutonomousCarProps){
    this.isRunning = props.isRunning
    this.steeringControl = props.steeringControl
  }
  respond(events: Events){
    if(!this.isRunning){
      console.log("the car is off")
    }
    let keyArray = Object.keys(events)
    keyArray.forEach(event =>{
      if(events[event] == false){
        return;
      }
      if(event == 'ObstacleLeft'){
        this.steeringControl.turn("right")
      }
      else if(event == 'ObstacleRight'){
        this.steeringControl.turn("left")
      }
    })
  }
}
let steering = new SteeringControl()
steering.turn("right")
let autonomousCar = new Car({isRunning: false, steeringControl: steering})
console.log(autonomousCar.respond(getObstacleEvents()))