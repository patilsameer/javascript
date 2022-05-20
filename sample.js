const Car=require('./Car');
const CarService=require('./service/Service.js')
/*class Car{
    constructor(brand,price,make){
        this.brand=brand;
        this.price=price;
        this.make=make;
    }


    display(){
        console.log(this.brand + this.price + this.make);
    }
}*/

const car4=new Car();

const car1 = new Car("nano",1111,1947);
const car2 = new Car("jeep",1234,2022);
const carservice1=new CarService();

carservice1.addCarTorepari(car1);
carservice1.addCarTorepari(car2);
carservice1.addCarTorepari(car4);

  

console.log(car1.display())
console.log(car2.display())

carservice1.displayCarstorepair()
car2.display()
var a=7
console.log(a)
console.log(a+7) 
