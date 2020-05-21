export default class Shot {
    constructor(animation){
        this.animation = animation;
        this.ctx = this.animation.ctx; 
        this.canvas = this.animation.canvasElt; 
        this.asteroides = this.animation.asteroides;
        this.Asteroide = this.animation.Asteroide; 


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
        this.ctx.arc(this.x, this.y, this.raduis, 0, Math.PI*2);
        this.ctx.fill()
    }

    boum(){
        this.asteroides.forEach(asteroide => {
            if(asteroide !== undefined){
                const a = this.x - asteroide.x ; 
                const b = this.y - asteroide.y;
                const c = Math.sqrt((a*a) + (b*b));
                
                if (this.raduis + asteroide.raduis > c){
                    if (asteroide.raduis > 20){
                        const newAsteroide = new this.Asteroide(this.animation, this.animation.colors);
                        newAsteroide.raduis = 10 + Math.round(Math.random()*10);
                        newAsteroide.x = asteroide.x;
                        newAsteroide.y = asteroide.y;
                        newAsteroide.speed = asteroide.speed*2.2;
                        newAsteroide.angle = asteroide.angle;
                        newAsteroide.color = asteroide.color;
                        this.asteroides.push(newAsteroide);

                        const newAsteroideDeux = new this.Asteroide(this.animation, this.animation.colors);
                        newAsteroideDeux.raduis = 10 + Math.round(Math.random()*10);
                        newAsteroideDeux.x = asteroide.x;
                        newAsteroideDeux.y = asteroide.y;
                        newAsteroideDeux.speed = -asteroide.speed*2.2;
                        newAsteroideDeux.angle = asteroide.angle;
                        newAsteroideDeux.color = asteroide.color;
                        this.asteroides.push(newAsteroideDeux);
                    }
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