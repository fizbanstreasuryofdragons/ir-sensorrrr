let ir_waarde = 0
let rechts = 92
let links = 93
let vooruit = 94
let achteruit = 95
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
basic.forever(function () {
    basic.showNumber(ir_waarde)
    if (vooruit == ir_waarde) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
