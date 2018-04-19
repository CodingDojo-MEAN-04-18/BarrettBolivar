/* Assignment: Ninja Class
Create a new class called Ninja with the following attributes:

name
health
speed (private)
strength (private)
Speed and strength should be 3 by default. Health should be 100 by default.

The Ninja class should have the following methods:

sayName() - This should log that Ninja's name to the console.
showStats() - This should show the Ninja's Strength and Speed, as well as their health.
drinkSake() - This should add +10 Health to the Ninja */
function Ninja(name, health = 100) {
    const self = this;
    this.name = name;
    this.health = health;
    this.sayName = function() {
        console.log("My ninja name is " + self.name);
    }
};
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
