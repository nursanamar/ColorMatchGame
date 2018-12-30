class Tile {
    constructor(x,y,size){
        this.pos = {x,y};
        this.size = size;
        this.isHover = false;
        this.selected = false;
        
        // this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    setImage(id,color){
        this.color = id;
        this.image = color;
        // this.image.resize(this.size,this.size);
    }

    update(){
        if ((mouseX > (this.pos.x - this.size / 2)  && mouseX < (this.pos.x + this.size / 2)) && (mouseY > (this.pos.y - this.size / 2) && mouseY < (this.pos.y + this.size / 2))){
            this.isHover = true;
        }else{
            this.isHover = false;
        }
    }

    draw(){
        push();
        translate(this.pos.x,this.pos.y);
        if(this.isHover){
            fill(125)
        }

        if(this.selected){
            imageMode(CENTER);
            image(this.image,0,0);
        }else{
            rectMode(CENTER)
            rect(0,0,this.size,this.size);
        }
        pop();
    }
}