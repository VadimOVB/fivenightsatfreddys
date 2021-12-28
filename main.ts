namespace SpriteKind {
    export const Camera = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile`) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile0`)
        tiles.setWallAt(location, false)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        for (let value of sprites.allOfKind(SpriteKind.Camera)) {
            lantern.startLanternEffect(value)
            scene.cameraFollowSprite(value)
            pause(1500)
        }
        if (light2) {
            lantern.stopLanternEffect()
        } else {
            lantern.startLanternEffect(mySprite)
        }
        scene.cameraFollowSprite(mySprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    lantern.startLanternEffect(sprite)
    light2 = false
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
let light2 = false
lantern.setBreathingEnabled(true)
light2 = true
mySprite = sprites.create(img`
    . . . f f f f f f . . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    mySprite2 = sprites.create(img`
        . . . . . b c . . . . . . . . . 
        . . . . . b c . . . . . . . . . 
        . . . . . b c . . . . . . . . . 
        . . . b c c c c c c . . . . . . 
        . . . b c c c c c c c . . . . . 
        . . . b c c c c c c c . . . . . 
        . . . b b b b b b c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Camera)
    tiles.placeOnTile(mySprite2, value)
}
game.onUpdateInterval(500, function () {
    mySprite.sayText("" + convertToText(Math.floor(mySprite.x)) + ":" + convertToText(Math.round(mySprite.y)))
})
