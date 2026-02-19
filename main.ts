basic.forever(function () {
    // GREEN
    pins.digitalWritePin(DigitalPin.P2, 1)  // Green ON
    pins.digitalWritePin(DigitalPin.P1, 0)  // Yellow OFF
    pins.digitalWritePin(DigitalPin.P0, 0)  // Red OFF
    basic.pause(40000) // 40 sec

    // YELLOW
    pins.digitalWritePin(DigitalPin.P2, 0)  // Green OFF
    pins.digitalWritePin(DigitalPin.P1, 1)  // Yellow ON
    pins.digitalWritePin(DigitalPin.P0, 0)  // Red OFF
    basic.pause(4000) // 4 sec

    // RED
    pins.digitalWritePin(DigitalPin.P2, 0)  // Green OFF
    pins.digitalWritePin(DigitalPin.P1, 0)  // Yellow OFF
    pins.digitalWritePin(DigitalPin.P0, 1)  // Red ON
    basic.pause(30000) // 30 sec
})

/* basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1) 
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)

    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P6, 0) 
    basic.pause(40000)

    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(4000)

    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3000)

    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(40000)

    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(4000)

    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(3000)

})

*/
