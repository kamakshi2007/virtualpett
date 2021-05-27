class Food{
    constructor(){
    
        this.foodStock = 0;
        this.image = loadImage("milk.png");
        this.lastFed;
    }
        updateFoodStock(foodStock){
            if(foodStock<0){
                foodStock = 0;
            }
            this.foodStock = foodStock
        }
        getFedTime(lastFed){
            this.lastFed = lastFed
        }
        deductFood(){
            if(this.foodStock>0){
                this.foodStock = this.foodStock+1
            }
        }
        getFoodStock(){
            //console.log(foodStock);
            return this.foodStock;
            
        }
    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,800,350,100,100);
        
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+75;
                }
                image(this.image,x,y,80,80);
                x=x+40
            }
        }
    }
}