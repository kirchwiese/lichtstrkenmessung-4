basic.forever(function () {
    if (input.lightLevel() >= 40 && input.lightLevel() < 80) {
        music.playTone(147, music.beat(BeatFraction.Whole))
        basic.showString("LS > 40 und < 80")
    } else if (input.lightLevel() >= 80 && input.lightLevel() < 120) {
        music.playTone(220, music.beat(BeatFraction.Whole))
        basic.showString("LS > 80 und < 120")
    } else if (input.lightLevel() >= 120 && input.lightLevel() < 160) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.showString("LS > 120 und < 160")
    } else if (input.lightLevel() >= 160 && input.lightLevel() < 200) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        basic.showString("LS > 160 und < 200")
    } else if (input.lightLevel() >= 200 && input.lightLevel() < 230) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showString("LS > 200 und < 230")
    } else if (input.lightLevel() >= 230 && input.lightLevel() < 250) {
        music.playTone(784, music.beat(BeatFraction.Whole))
        basic.showString("LS > 230 und < 250")
    }
})
