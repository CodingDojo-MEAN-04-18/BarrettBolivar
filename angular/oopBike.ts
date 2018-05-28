class Bike {
    price: number;
    max_speed: number;
    miles: number;
    constructor(){}
    displayInfo() {
        return console.log(this.price, this.max_speed, this.miles);
    }    
    // have this method display the bike's price, maximum speed, and the total miles.
    ride() {
        return this.miles += 10;
    } //have it display "Riding" on the screen and increase the total miles ridden by 10
    reverse(){
        return this.miles -= 5;
    } //have it display "Reversing" on the screen and decrease the total miles ridden by 5...
}
let bike1 = new Bike();
bike1.displayInfo()
bike1.ride()
bike1.reverse()