basic.showLeds(`
    . # . . #
    . # . . #
    . # # # #
    . # . . #
    . # . . #
    `)
basic.showLeds(`
    # # # . .
    # . . . .
    # # # . .
    # . . . .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    # # # . .
    # . # . .
    # # . . .
    # . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . # . . .
    . . . . .
    . # . . .
    . # . . .
    . # . . .
    `)
basic.showLeds(`
    . # . . .
    . . . . .
    . # . . .
    . # . . .
    . # . . .
    `)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.forever(function () {
    radio.sendNumber(4)
    basic.showString("Hello!")
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    led.plot(2, 1)
    led.plotBarGraph(
    80,
    21
    )
})
