

class GameBoard {
    constructor(x, y, row, col, tilesSize) {

        this.pos = { x: x, y: y };
        this.col = col;
        this.row = row;
        this.tilesSize = tilesSize;
        this.tiles = [];
        this.selectedTileA = null;
        this.selectedTileB = null;
        this.point = 0;
        let colors = ["#d8193b", "#11efda", "#1eb92a", "#277d76", "#7c6ccc"]
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                let tile = new Tile((j * this.tilesSize) + this.pos.x, (i * this.tilesSize) + this.pos.y, this.tilesSize)
                this.tiles.push(tile);
            }
        }


        let num = 0;
        let tilesIndexes = [];
        
        for (let i = 0; i < this.tiles.length; i++) {
           tilesIndexes.push(i);
        }
        
        let newTiles = [];
        let numColor = this.tiles.length / colors.length; 

        colors.forEach(color => {
            for (let i = 0; i < numColor; i++) {
                
                let tileIndex = random(tilesIndexes);
                let newTile = this.tiles[tileIndex];

                newTile.setColor(color);
                newTiles.push(newTile);
                this.tiles.splice(tileIndex, 1);
                
                tilesIndexes = [];
                for (let i = 0; i < this.tiles.length; i++) {
                    tilesIndexes.push(i);
                }
                
            }
        })
        this.tiles = newTiles;
    }

    update(){

        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].update()
        }
        // console.log(this.selectedTile)
    }

    tileClick(){
        for (let i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].isHover) {
                this.tiles[i].selected = true;
               if(this.selectedTileA === null){
                   this.selectedTileA = i;
               }else if(this.selectedTileA != i){
                    this.selectedTileB = i;
               }
            }
        }


       
        if (this.selectedTileA != null && this.selectedTileB != null) {
            this.check(this.selectedTileA,this.selectedTileB);
        }
    }
    
    check(a,b){
        let tileA = this.tiles[a];
        let tileB = this.tiles[b];
        
        console.log(a,b)
        let colorA = tileA.color;
        let colorB = tileB.color;
        console.log(colorA,colorB,tileA,tileB)
        if(colorA == colorB){
            if(a > b){
                this.tiles.splice(a, 1);
                this.tiles.splice(b,1);
            }else{
                this.tiles.splice(b, 1);
                this.tiles.splice(a, 1);
            }
            this.point += 1;
        }else{
            this.tiles[a].selected = false;
            this.tiles[b].selected = false;            
        }

        this.selectedTileA = null;
        this.selectedTileB = null;
    }

    draw() {
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].draw()
        }
    }

    show(){
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].selected = true;
        }
    }

    hide() {
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].selected = false;
        }
    }
}