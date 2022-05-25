input.onButtonPressed(Button.A, function () {
    if (trigger == 1) {
        game.addScore(1)
    }
    if (game.score() == 5) {
        basic.showString("WINNER")
    }
})
let trigger = 0
game.setScore(0)
loops.everyInterval(1000, function () {
    trigger = 0
    basic.showString("1234567")
    trigger = 1
})
loops.everyInterval(2500, function () {
	
})
basic.forever(function () {
	
})
