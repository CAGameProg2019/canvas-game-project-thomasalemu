class Boundary {
    constructor(x,y,width,height,color){
        this.x= x;
        this.y= y;
        this.width= width;
        this.height = height;
        this.color= color;
    }
    draw(c){
        c.fillStyle=this.color;
        c.fillRect(this.x,this.y,this.width,this.height);
    }
    collidesWith(player) {
        if(this.x<= player.x && this.y<=player.y&&this.x+this.width>= player.x && this.y+this.height>=player.y){
            return true;
        }
        return false;
    }
}
