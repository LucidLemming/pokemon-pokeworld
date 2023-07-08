controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    kirby.y += -5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    kirby.x += -5
})
function createBurger () {
    burger = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.Food)
    burger.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    kirby.x += 5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    kirby.y += 5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    createBurger()
    kirby.changeScale(0.25, ScaleAnchor.Middle)
})
let burger: Sprite = null
let kirby: Sprite = null
kirby = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ...........333333333............
    .........3333333333333..........
    ........333333333333333.........
    .......33333333333333333........
    ......3333333333333333333.......
    .....333333333333333333333......
    .....33333fff33333fff33333......
    ....333333f1f33333f1f333333.....
    ....333333fff33333fff333333.....
    ....333333f8f33333f8f333333.....
    ....333333f8f33333f8f333333.....
    ....333333fff33333fff333333.....
    ....33333333333333333333333.....
    ....33333333333333333333333.....
    ....33333333333333333333333.....
    ....3333333f333333f33333333.....
    .....333333f333333f3333333......
    .....333333fff333ff3333333......
    ......3333333fffff3333333.......
    .......33333333333333333........
    ........333333333333333.........
    .........3333333333333..........
    ...........333333333............
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
kirby.setPosition(73, 53)
createBurger()