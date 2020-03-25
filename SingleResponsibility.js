// SCENARIO: When a user want to enter the office, he/she have to unlock the main door 
// by scanning his/her finger print to reveal identity and the screen will display the result.

// The example below adhered the "SINGLE RESPONSIBILITY" principle. It divided the locking mechanism
// into 3 main class that served only ONE purpose.

// Door: lock or unlock.
// Finger print scanner: verify the identity of the user.
// Screen: display messages from the system.

class Door {
    #status;

    constructor() {
        this.#status = "locked";
    }

    unlock() {
        this.#status = "unlocked";
    }

    lock() {
        this.#status = "locked";
    }

    getStatus() {
        return this.#status;
    }
}

class FingerPrintScanner {
    scan(user){
        if (user === "Staff"){
            return true;
        } else {
            return false;
        }
    }
}

class Screen {
    displayMessage(message){
        console.log(message);
    }
}

var door = new Door();
var scanner = new FingerPrintScanner();
var screen = new Screen();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Scan your finger print to show me who you are.\nI'm: ", user => {
    if (scanner.scan(user) === true){
        door.unlock();
        screen.displayMessage("Welcome " + user);
    } else {
        screen.displayMessage("I don't know you.");
    }

    screen.displayMessage("Door is: " + door.getStatus());
    readline.close();
})

// If we implemented this case by bundling all component into only one class, we would have a "GOD-class"
// that performs every single step. In that case, we have violated the "SINGLE RESPONSIBILITY" principle,
// and that class would be very difficult to maintain.