
export default class Asteroide {
    constructor(animation, colors) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx
        this.ship = this.animation.ship; 

        this.raduis = 10 + Math.round(Math.random()*30);
        this.possiblepixelsW = this.canvas.width - this.raduis
        this.possiblepixelsH = this.canvas.height - 2* this.raduis
        this.x = this.raduis + Math.floor(Math.random()*this.possiblepixelsW)
        this.y = - this.raduis + Math.floor(Math.random()*this.possiblepixelsW)
        this.color = colors[Math.floor(Math.random()*colors.length)]
        this.angleDeg = Math.random()*(100 - 84) + 84;
        this.angle = this.angleDeg * (Math.PI/180)
        this.speed = Math.floor(Math.random()*2) == 1 ? 1 : -1;
        console.log(this.speed);


        this.i = this.animation.asteroides.length; 
        this.isAlive = true; 

    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.x, this.y, this.raduis, 0, Math.PI*2)
        this.ctx.fill();
    }; 

    boum(){
        const a = this.x - this.ship.shipPosX ; 
        const b = this.y - this.ship.shipPosY;
        const c = Math.sqrt((a*a) + (b*b));
        

        if (this.raduis + this.ship.shipH/2 > c){
            this.ship.shipMaxSpeed = 0;
            console.log(c);
        }
    }

    update(){
        this.x += this.speed * Math.cos(this.angle)
        this.y += this.speed * Math.sin(this.angle)
        this.draw(); 

        if(this.y > this.canvas.height + this.raduis) { 
            this.y = 15;
        }; 

        if(this.y <= -15) { 
            this.y = this.canvas.height;
        }; 

        if(this.x > this.canvas.width + this.raduis) { 
            this.x = 15;
        }; 

        if(this.x <= -15) { 
            this.x = this.canvas.width;
        }; 

        if(this.isAlive === false){
            this.animation.asteroides[this.i] = undefined; 
        }    
        this.boum();
    }
}
