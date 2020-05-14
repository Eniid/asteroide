import Shot from "./Shot"


export default class Ship {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx
        this.shipW = 10; 
        this.shipH = 30;
        this.shipSpeed = 0;
        this.shipPosX =  this.canvas.width/2;
        this.shipPosY = this.canvas.height/2;
        this.shipAngle = 90; 
        this.delay = 20; 
        this.lastshot = 0; 
    }
    


    draw(){        
        this.ctx.save()
        this.ctx.translate(this.shipPosX, this.shipPosY);
        this.ctx.rotate(((this.shipAngle-90) * (Math.PI/180)))
        this.ctx.beginPath()
        this.ctx.fillStyle = "white";
        this.ctx.translate(0, -15)
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(10, 30);
        this.ctx.lineTo(-10, 30);
        this.ctx.fill();   
        this.ctx.restore();
    }; 



    shot(){


        if(this.animation.controller.isKeyDown(" ")){
            if(this.lastshot === 0){
                const shot = new Shot(this.animation);
                shot.x = this.shipPosX; 
                shot.y = this.shipPosY;
                shot.i = this.animation.shots.length;
                shot.setAngle(this.shipAngle - 180);
                this.lastshot = this.delay; 
                this.animation.shots.push(shot);
            } 
        }
        if(this.lastshot > 0){
            this.lastshot--;
        }
    }

    update(){
        if(this.animation.controller.isKeyDown("z")){
            this.shipSpeed = -1; 
        }
        if(this.animation.controller.isKeyDown("s")){
            this.shipSpeed = 1; 
        }
        if(this.animation.controller.isKeyDown("d")){
            this.shipAngle++;
        } 
        if(this.animation.controller.isKeyDown("q")){
            this.shipAngle--; 
        }
        this.shot();

        this.shipPosX += this.shipSpeed * Math.cos(this.shipAngle * (Math.PI/180)); 
        this.shipPosY += this.shipSpeed * Math.sin(this.shipAngle * (Math.PI/180));

        this.shipSpeed/=2;


            this.draw(); 

    }
}
