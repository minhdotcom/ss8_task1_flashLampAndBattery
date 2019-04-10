function Battery (energy) {
    this.energy = energy;
    this.setEnergy = function (set) {
        this.energy = set;
    };
    this.getEnergy = function () {
        console.log(this.energy);
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        } else {
            alert ("The battery is exhausted!");
        }
    };
}