// SCENARIO: Company is developing Software for the new Phone. 
// In the example below, software updates are using inheritance for the extension of functions that the device supports. If something needs
// to be added or updated (the "takePhoto" function), it will be in the new class, not the original one. 

// This principle is very useful for keeping the source code maintainable, it ensures that old working 
// code is not changed while simultaneously allowing for the addition of new behavior.

class SoftwareGen1 {
    constructor(){
        this.version = "1";
    }

    call(number) {
        console.log("Calling " + number);
    }

    sendMessage(number, content){
        console.log("Sending: " + content + " to " + number);
    }

    takePhoto(){
        console.log("Taking photo.");
    }
}

class SoftwareGen2 extends SoftwareGen1 {
    constructor() {
        super()
        this.version = "2";
    }

    playMusic(song){
        console.log("Playing: " + song);
    }

    playVideo(video){
        console.log("Playing: " + video);
    }

    takePhoto(){
        console.log("Take portrait or landscape photo.")
    }
}

class SoftwareGen3 extends SoftwareGen2 {
    constructor() {
        super()
        this.version = "3"
    }

    connectToWifi(wifiName) {
        console.log("Connecting to " + wifiName);
    }
    makeVideoCall(number){
        console.log("Calling " + number + " with video.");
    }
}