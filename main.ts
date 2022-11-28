input.onButtonPressed(Button.A, function () {
    if (Перемикач == 0) {
        Номер_1 += 1
        basic.showNumber(Номер_1)
    }
    if (Перемикач == 1) {
        Номер_2 += 1
        basic.showNumber(Номер_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    Дія += 1
    if (Дія == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else {
        if (Дія == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            basic.clearScreen()
        } else {
            if (Дія == 3) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . # . .
                    . # . # .
                    . . . . .
                    `)
                basic.pause(500)
                basic.clearScreen()
            } else {
                if (Дія == 4) {
                    basic.showLeds(`
                        . . . . .
                        . . . # .
                        . . # . .
                        . # . . .
                        . . . . .
                        `)
                    basic.pause(500)
                    basic.clearScreen()
                } else {
                    Дія = 1
                    basic.showLeds(`
                        . . . . .
                        . . # . .
                        . # # # .
                        . . # . .
                        . . . . .
                        `)
                    basic.pause(500)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Перемикач += 1
    if (Перемикач == 2) {
        if (Дія == 1) {
            basic.showNumber(Номер_1 + Номер_2)
        } else {
            if (Дія == 2) {
                basic.showNumber(Номер_1 - Номер_2)
            } else {
                if (Дія == 3) {
                    basic.showNumber(Номер_1 * Номер_2)
                } else {
                    basic.showNumber(Номер_1 / Номер_2)
                }
            }
        }
    } else {
        if (Перемикач == 3) {
            Дія = 1
            Номер_1 = 0
            Номер_2 = 0
            Перемикач = 0
            basic.clearScreen()
        }
    }
})
let Перемикач = 0
let Номер_2 = 0
let Номер_1 = 0
let Дія = 0
Дія = 1
Номер_1 = 0
Номер_2 = 0
Перемикач = 0
