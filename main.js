var battery = new Battery(100);
battery.getEnergy()

var flashlamp = new FlashLamp(false,false);
flashlamp.plugBattery();
flashlamp.getBattery();
flashlamp.turnOff();
flashlamp.light();