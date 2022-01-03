namespace SpriteKind {
    export const Camera = SpriteKind.create()
    export const invent = SpriteKind.create()
    export const StopEnemy = SpriteKind.create()
}
let invDoor: tiles.Location[] = []
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(mySpritePic[0])
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (tiles.tileAtLocationEquals(location, assets.tile`myTile`)) {
            tiles.setTileAt(location, assets.tile`myTile0`)
            tiles.setWallAt(location, false)
        } else if (tiles.tileAtLocationEquals(location, assets.tile`myTile13`)) {
            tiles.setTileAt(location, assets.tile`myTile14`)
            tiles.setWallAt(location, false)
        } else if (tiles.tileAtLocationEquals(location, assets.tile`myTile15`)) {
            tiles.setTileAt(location, assets.tile`myTile5`)
            rubilnikiON()
        } else if (tiles.tileAtLocationEquals(location, assets.tile`myTile16`)) {
            tiles.setTileAt(location, assets.tile`myTile6`)
            rubilnikiON()
        } else if (tiles.tileAtLocationEquals(location, assets.tile`myTile17`)) {
            tiles.setTileAt(location, assets.tile`myTile8`)
            rubilnikiON()
        } else if (tiles.tileAtLocationEquals(location, sprites.dungeon.greenSwitchDown)) {
            tiles.setTileAt(location, assets.tile`myTile7`)
            rubilnikiON()
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        numCam = 0
        for (let value of sprites.allOfKind(SpriteKind.Camera)) {
            numCam += 1
            lantern.startLanternEffect(value)
            scene.cameraFollowSprite(value)
            value.sayText(numCam)
            pause(1500)
        }
        if (light2) {
            lantern.stopLanternEffect()
        } else {
            lantern.startLanternEffect(mySprite)
        }
        scene.cameraFollowSprite(mySprite)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(Math.trunc(mySprite.x / 16), Math.trunc(mySprite.y / 16) + 1), assets.tile`myTile0`) && mySprite.image == mySpritePic[2]) {
        tiles.setTileAt(tiles.getTileLocation(Math.trunc(mySprite.x / 16), Math.trunc(mySprite.y / 16) + 1), assets.tile`myTile`)
        tiles.setWallAt(tiles.getTileLocation(Math.trunc(mySprite.x / 16), Math.trunc(mySprite.y / 16) + 1), true)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(Math.trunc(mySprite.x / 16), Math.trunc(mySprite.y / 16) - 1), assets.tile`myTile0`) && mySprite.image == mySpritePic[0]) {
        tiles.setTileAt(tiles.getTileLocation(Math.trunc(mySprite.x / 16), Math.trunc(mySprite.y / 16) - 1), assets.tile`myTile`)
        tiles.setWallAt(tiles.getTileLocation(Math.trunc(mySprite.x / 16), Math.trunc(mySprite.y / 16) - 1), true)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(Math.trunc(mySprite.x / 16) + 1, Math.trunc(mySprite.y / 16)), assets.tile`myTile14`) && mySprite.image == mySpritePic[1]) {
        tiles.setTileAt(tiles.getTileLocation(Math.trunc(mySprite.x / 16) + 1, Math.trunc(mySprite.y / 16)), assets.tile`myTile13`)
        tiles.setWallAt(tiles.getTileLocation(Math.trunc(mySprite.x / 16) + 1, Math.trunc(mySprite.y / 16)), true)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(Math.trunc(mySprite.x / 16) - 1, Math.trunc(mySprite.y / 16)), assets.tile`myTile14`) && mySprite.image == mySpritePic[3]) {
        tiles.setTileAt(tiles.getTileLocation(Math.trunc(mySprite.x / 16) - 1, Math.trunc(mySprite.y / 16)), assets.tile`myTile13`)
        tiles.setWallAt(tiles.getTileLocation(Math.trunc(mySprite.x / 16) - 1, Math.trunc(mySprite.y / 16)), true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile18`)
    lantern.startLanternEffect(sprite)
    light2 = false
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.setTileAt(value, assets.tile`myTile15`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.setTileAt(value, assets.tile`myTile16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        tiles.setTileAt(value, sprites.dungeon.greenSwitchDown)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setTileAt(value, assets.tile`myTile17`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(mySpritePic[3])
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(mySpritePic[1])
})
function rubilnikiON () {
    if (tiles.getTilesByType(assets.tile`myTile15`).length + tiles.getTilesByType(assets.tile`myTile16`).length + tiles.getTilesByType(assets.tile`myTile17`).length + tiles.getTilesByType(sprites.dungeon.greenSwitchDown).length == 0) {
        light2 = true
        lantern.stopLanternEffect()
        for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
            tiles.setTileAt(value, assets.tile`myTile4`)
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(mySpritePic[2])
})
let numCam = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mySpritePic: Image[] = []
let light2 = false
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
lantern.setBreathingEnabled(true)
light2 = true
mySpritePic = [
img`
    . . f f f f f f f f . . 
    . f e e e e e e e f f . 
    f f e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f f e e e e e e f e f 
    f f f f e e e e f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    e 4 f b b b b b b f 4 e 
    4 d f d d d d d d c d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `,
img`
    . . . f f f f f f . . . 
    . f f f e e e e e f . . 
    f f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f . 
    . f 4 d 4 d d d d f . . 
    . f f f e e d b b f . . 
    . . f 4 d d e 4 e f . . 
    . . f e d d e 1 1 f . . 
    . f f f e e f 6 6 f f . 
    . f f f f f f f f f f . 
    . . f f . . . f f f . . 
    `,
img`
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
    `,
img`
    . . . f f f f f f . . . 
    . . f e e e e e f f f . 
    . f e e e e e e e f f f 
    f e e e e e e e f f f f 
    f e e 4 e e e f f f f f 
    f e e 4 4 e e e f f f f 
    f f e 4 4 4 4 4 f f f f 
    . f e 4 4 f f 4 e 4 f f 
    . . f d d d d 4 d 4 f . 
    . . f b b d e e f f f . 
    . . f e 4 e d d 4 f . . 
    . . f 1 1 e d d e f . . 
    . f f 6 6 f e e f f f . 
    . f f f f f f f f f f . 
    . . f f f . . . f f . . 
    `
]
let myEnemy = [
sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . . . . c 6 6 3 3 3 3 3 3 c . 
    . . . . c 6 6 6 6 3 3 3 3 3 3 c 
    . c c c c c 6 6 c c 3 3 3 3 3 c 
    b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
    f f 5 c c c 3 c 5 f f 6 6 6 c c 
    f f 5 c c c c c 5 f f 3 3 3 3 c 
    . b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
    . c 4 4 5 5 5 5 4 c c 3 3 3 c . 
    c 4 5 5 4 4 4 4 5 5 4 c b b . . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.StopEnemy),
sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.StopEnemy),
sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.StopEnemy),
sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.StopEnemy)
]
for (let value of sprites.allOfKind(SpriteKind.StopEnemy)) {
    tiles.placeOnRandomTile(value, sprites.dungeon.buttonOrange)
    tiles.setTileAt(tiles.getTileLocation(Math.trunc(value.x / 16), Math.trunc(value.y / 16)), sprites.dungeon.buttonOrangeDepressed)
}
mySprite = sprites.create(mySpritePic[2], SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
scene.cameraFollowSprite(mySprite)
let item = sprites.create(img`
    3 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.invent)
for (let value of invDoor) {
    let doorY: number[] = []
    let doorX: number[] = []
    tiles.placeOnTile(item, value)
    doorX.push(Math.floor(item.x / 16))
    doorY.push(Math.floor(item.y / 16))
}
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
    mySprite.sayText("" + convertToText(Math.trunc(mySprite.x / 16)) + ":" + convertToText(Math.trunc(mySprite.y / 16)) + " " + Math.trunc(mySprite.x) + ":" + Math.trunc(mySprite.y))
})
