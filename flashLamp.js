function FlashLamp (battery, status) {
    this.status = status;
    this.battery = battery;
    this.plugBattery = function () {
        this.battery = true;
    };
    this.getBattery = function () {
        if (this.battery) {
            var message = ("Battery plugeged");
        } else {
            message = ("Battery unpluged");
        }
        alert(message);
    };
    this.turnOn = function () {
        if (this.battery = false) {
            alert("Please plug the battery in first");
        } else {
            this.status = true;
        }
    };
    this.turnOff = function () {
        this.status = false;
    };

    this.light = function () {
        if (this.status == true) {
            alert("The flashlamp is lighting.");
        } else {
            alert("Please turn on the flashlamp first.");
        }

    };

}
