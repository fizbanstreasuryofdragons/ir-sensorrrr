let ir_sensor = 0
basic.forever(function () {
    ir_sensor = IR.IR_read()
})
basic.forever(function () {
    basic.showNumber(ir_sensor)
})
