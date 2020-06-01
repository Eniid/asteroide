export const controller = {
    "allowedKeys":["z", "q", "s", "d", " "],
    "pressedKeys":[],
    init(animation){
        this.animation = animation;
        console.log("hello")
        window.addEventListener("keydown", e=>{
            e.preventDefault()
            e.stopPropagation()
            const key = e.key;
            if(this.allowedKeys.indexOf(key) != -1){
                if(this.pressedKeys.indexOf(key) == -1){
                    this.pressedKeys.push(key);
                }
            }
            console.log(this.pressedKeys)
        }, false);
        window.addEventListener("keyup", e=>{
            e.preventDefault()
            e.stopPropagation()
            const key = e.key;
            if(this.pressedKeys.indexOf(key) != -1){
                this.pressedKeys.splice(this.pressedKeys.indexOf(key), 1);
            }
        }, false);
    },
    isKeyDown(key){
        if(this.pressedKeys.indexOf(key) != -1){
            return true;
        }else{
            return false;
        }
    }
}