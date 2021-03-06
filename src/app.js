import Asteroide from "./Asteroide"; 
import Ship from "./Ship"
import Shot from "./Shot"
import { controller } from "./controller";


const animation = {
    canvasElt: undefined, 
    ctx: undefined, 
    asteroides: [], //? Tableau dans le quel on doit ajouter les asteroides (crée par le classe asteroide)
    shots: [],
    nbAsteroides : 10, 
    controller,
    Asteroide, 
    colors : ['#EC8900',  '#E7A700', '#5787AB' , '#E7A700'  ],

    //* Toutes les propoiétées !! 
    init(){
        this.canvasElt = document.createElement("canvas")
        document.body.insertAdjacentElement("afterbegin", this.canvasElt);
        this.ctx = this.canvasElt.getContext('2d'); 
        this.resize(); 
        this.controller.init(this);
        window.addEventListener('resize', e => {
            this.resize();
        }, false)
        this.ship = new Ship(this);
        for(let i = 0; i < this.nbAsteroides; i++){
            const newAsteroide = new this.Asteroide(this, this.colors);
            newAsteroide.i = i;
            this.asteroides.push(newAsteroide);
        }
        this.animate(); 
    },

    draw(){
        this.asteroides.forEach(asteroide => {
            if(asteroide !== undefined){
                asteroide.update() 
            }

        });
        this.shots.forEach( shot => {
            if(shot !== undefined){
                shot.update();
            }
        })

        if(this.ship.shipMaxSpeed !== 0){
            this.ship.update();
        } else {
            this.ctx.font = "30px Arial"
            this.ctx.fillStyle = "#fff"
            this.ctx.textAlign = "center"
            this.ctx.fillText("Vous avez perdu..", this.canvasElt.width/2, this.canvasElt.height/2)
        }

    },

    animate(){ //¨* Pour quand on va faire bouger le truc 
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        this.draw()
        window.requestAnimationFrame( ()=> {
            this.animate(); // les arrow function permettes que le this reste le bon. 
        });
    },

    resize(){ //* Pour que quand on rezise l'écran, le canvas aussi se resize
        this.canvasElt.height = 640;
        this.canvasElt.width = 640;
        
    }
}


animation.init() //* Démare toute la classe animation 