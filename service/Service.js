class CarService{
    constructor(country,state){
        this.country=country
        this.state=state
        this.carTorepair=new Array();
    }

    addCarTorepari(car){
        this.carTorepair.push(car);
    }
}
module.exports=CarService;