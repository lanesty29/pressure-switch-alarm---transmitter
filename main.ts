input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("intruder")
})
radio.setGroup(34)
