let ir_waarde = 0
let rechts = 92
let links = 93
let vooruit = 94
let achteruit = 95
let freeze = 76
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    if (vooruit == ir_waarde) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
    if (achteruit == ir_waarde) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    }
    if (links == ir_waarde) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
    }
    if (rechts == ir_waarde) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    }
    if (freeze == ir_waarde) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
