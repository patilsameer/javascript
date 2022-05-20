class CarService{
    constructor(country,state){
        this.country=country
        this.state=state
        this.carTorepair=new Array();
    }

    addCarTorepari(car){
        this.carTorepair.push(car);
    }
    displayCarstorepair(){
        
        this.carTorepair.forEach(car=>{
            console.log('traveling inside the car')
            car.display()
        })
    }
}
module.exports=CarService;