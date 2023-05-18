export default class StretchWithPercent2  {
    constructor(condition,delay,duration,easetype,initialrect,endrect) {
      this.motionstate = "motion"
      this.condition = condition
      this.initialrect = initialrect
      this.endrect = endrect
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.variants = {
        "motion": { width : this.initialrect[0]+"%", height : this.initialrect[1]+"%", left :  this.initialrect[2]+"%" , top :  this.initialrect[3]+"%",
        transition: {
          duration: this.duration,
          delay: this.delay,
          easetype:this.easetype
        }},
      };      
    }
  
    handleMotion(input) {
      if(input.state > 0){
        this.variants["motion"] = { width : this.endrect[0]+"%", height : this.endrect[1]+"%", left :  this.endrect[2]+"%" , top :  this.endrect[3]+"%"}
     }

     if(input.state <0){
      this.variants["motion"] = { width : this.initialrect[0]+"%", height : this.initialrect[1]+"%", left :  this.initialrect[2]+"%" , top :  this.initialrect[3]+"%"}
     }

      return "motion"
    }

  }