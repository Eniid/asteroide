export default class Shot {
    constructor(animation){
        this.animation = animation;
        this.ctx = this.animation.ctx; 
        this.canvas = this.animation.canvasElt; 
        this.asteroides = this.animation.asteroides;
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
export default class Bloc {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;
        this.blocTable = this.animation.blocs; 

        this.i = this.blocTable.length;

        this.color = "#ebd0bf";
        this.widht = 104;
        this.height = 40;
        this.margin = 25;

        this.x = this.margin + Math.floor(this.i % 6) * (this.widht + this.margin);
        this.y = this.margin + Math.floor(this.i / 6) * (this.height + this.margin);

    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.x, this.y, this.raduis, 0, Math.PI*2)
        this.ctx.fill();
    }; 

    update(){

        //if(i < 5) {
          //  this.x = this.i * (1 +150);
        //}
        this.draw();
    }
}        this.ctx.fill()
    }

    boum(){
        this.asteroides.forEach(asteroide => {
            if(asteroide !== undefined){
                const a = this.x - asteroide.x ; 
                const b = this.y - asteroide.y;
                const c = Math.sqrt((a*a) + (b*b));
                
                if (this.raduis + asteroide.raduis > c){
                    asteroide.isAlive = false;
                    this.isAlive = false; 
                }
            }
            

        });
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

        this.boum();
    }

}