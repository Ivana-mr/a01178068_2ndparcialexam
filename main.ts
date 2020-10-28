let age = 0
let total_childhood = 0
let total_youth = 0
let youth_persons = 0
let total_adulthood = 0
let total_seniority = 0
let seniority_persons = 0
let total_age = 0
let average = 0
let dice_1 = 0
let dice_2 = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 15; index++) {
        age = randint(0, 70)
        basic.showString("age")
        basic.showNumber(age)
        if (age >= 0 && age <= 14) {
            basic.showString("childhood")
            total_childhood += 1
        } else if (age >= 15 && age <= 24) {
            basic.showString("youth")
            total_youth += 1
            youth_persons += 1
        } else if (age >= 25 && age <= 64) {
            basic.showString("adulthood")
            total_adulthood += 1
        } else if (age >= 65) {
            basic.showString("seniority ")
            total_seniority += 1
            seniority_persons += 1
        }
    }
    total_age += age
    average = total_age / 15
    basic.showString("average!")
    basic.showNumber(average)
    basic.showString("youth persons")
    basic.showNumber(youth_persons)
    basic.showString("seniority persons")
    basic.showNumber(seniority_persons)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let numbers = 0; numbers <= 3; numbers++) {
        basic.showNumber(numbers)
    }
    basic.clearScreen()
    dice_1 = randint(1, 6)
    dice_2 = randint(1, 6)
    if (dice_1 == 6 && dice_2 == 6) {
        basic.showString("win")
        music.playMelody("C5 B A G F E D C ", 120)
    } else {
        basic.showString("lose ")
        music.playTone(415, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = randint(0, 4)
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
            basic.pause(200)
        }
    }
})
