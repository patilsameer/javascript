class Car{
    constructor(brand,price,make){
        this.brand=brand;
        this.price=price;
        this.make=make;
    }


    display(){
        console.log(this.brand + this.price + this.make);
    }
}


module.exports=Car;