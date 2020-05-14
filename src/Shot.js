export default class Shot {
    constructor(animation){
        this.animation = animation;
        this.ctx = this.animation.ctx; 
        this.canvas = this.animation.canvasElt; 
        this.color = "#fff";
        this.raduis = 4; 
        this.x = 100; 
        this.y = 100;
        this.i = undefined; 
        this.speed = 10; 
        this.isAlive = true; 
    }

    setAngle(angleDeg){
        this.angleDeg = angleDeg; 
        this.angle = this.angleDeg* (Math.PI/180) //! coordonées polaires
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.x, this.y, this.raduis, 0, Math.PI*2)
        this.ctx.fill()
    }

    update(){
        this.x += this.speed * Math.cos(this.angle) //!
        this.y += this.speed * Math.sin(this.angle) //! 
        this.draw(); 

        if(this.y > this.canvas.height + this.raduis){
            this.isAlive = false; 
        }
        if(this.y <= 0){
            this.isAlive = false; 
        }        
        if(this.x > this.canvas.width + this.raduis){
            this.isAlive = false; 
        }        
        if(this.y <= 0){
            this.isAlive = false; 
        }

        if(this.isAlive === false){
            this.animation.shots[this.i] = undefined; 
        }        
    }

}