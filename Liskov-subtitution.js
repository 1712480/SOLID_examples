// SCENARIO: I'm going to the store and I want to buy something for my feet. Now I'm going to 
// try each pair that I have picked. 

// In the example below, I set the FootWear class to be a abstract class, Shoes and Sandal 
// are subclasses of Footwear, Boot is a subclass of Shoes. All class are adhered the Liskov 
// subtitution principle: subclass of a given object must be interchangeable with its parents,
// subclass should guaranteed the pre-conditions and post-conditions for the methods to execute.

class Foot {
    constructor(footWear){
        this.footWear = footWear
    }

    tryAllFootWear() {
        this.footWear.forEach(pair => {
            pair.try()
        })
    }
}

class FootWear {
    constructor(){
        this.name = "Foot wear."
    }

    try() {
        console.log("Trying the " + this.name + "\n")
    }
}

class Shoes extends FootWear {
    constructor(size, color) {
        super();
        this.name = "Shoes";
        this.size = size;
        this.color = color;
    }

    try() {
        console.log("Trying the " + this.size + " " + this.color + " " + this.name + "\n");
    }
}

class Sandal extends FootWear {
    constructor(size, color) {
        super();
        this.name = "Sandal";
        this.size = size;
        this.color = color;
    }

    try() {
        console.log("Trying the " + this.size + " " + this.color + " " + this.name);
        this.fastenTheStrap()
    }

    fastenTheStrap() {
        console.log("Fastening the strap\n");
    }
}

class Boot extends Shoes {
    constructor(size, color){
        super();
        this.name = "Boot";
        this.size = size;
        this.color = color;
    }

    try() {
        console.log("Trying the " + this.size + " " + this.color + " "  + this.name);
        this.tightenTheLace()
    }

    tightenTheLace(){
        console.log("Tightening the lace\n");
    }
}

var footWear = [ new Shoes(42, "White"), new Sandal(43, "Black"), new Boot(44, "Brown")];
var foot = new Foot(footWear);

foot.tryAllFootWear()