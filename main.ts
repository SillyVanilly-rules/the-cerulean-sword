namespace SpriteKind {
    export const village_house = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const NPC_still = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    main_village()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (controller.left.isPressed()) {
        mySprite.x += 0 - mySprite.vx
    } else if (controller.right.isPressed()) {
        mySprite.x += 0 - mySprite.vx
    } else if (controller.up.isPressed()) {
        mySprite.y += 0 - mySprite.vy
    } else if (controller.down.isPressed()) {
        mySprite.y += 0 - mySprite.vy
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    music.stopAllSounds()
    sprites.destroyAllSpritesOfKind(SpriteKind.village_house)
    tiles.setCurrentTilemap(tilemap`d1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 23))
    zomblin = sprites.create(img`
        . . . 6 6 6 3 3 3 3 6 . . . . . 
        . . . 6 6 3 3 3 3 6 3 3 . . . . 
        . . . 3 f f 3 3 f f 6 3 . . . . 
        . . . 3 f 7 3 3 7 f 6 6 . . . . 
        . . . 3 3 3 3 3 3 3 3 6 . . . . 
        . . . 3 3 6 6 6 6 3 3 3 . . . . 
        . . . 3 6 b 8 b 8 6 3 6 . . . . 
        . . . 3 3 6 6 6 6 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . c c 3 c 3 3 c c c . . . . 
        . . c c c 3 c c c c c c c . . . 
        . . 3 3 c c 3 c c 3 c 3 3 . . . 
        . . 3 3 c c c c 3 c c 3 3 . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 . 2 2 2 . . . . . 
        . . . 3 3 3 3 . 3 3 3 3 . . . . 
        `, SpriteKind.Enemy)
})
function main_village () {
    music.stopAllSounds()
    tiles.setCurrentTilemap(tilemap`level1`)
    village_house_1 = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.village_house)
    tiles.placeOnTile(village_house_1, tiles.getTileLocation(3, 9))
    mySprite = sprites.create(assets.image`hero`, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
    controller.moveSprite(mySprite, 30, 30)
    scene.cameraFollowSprite(mySprite)
    music.play(music.createSong(hex`0078000408030203001c0001dc00690000045e01000400000000000000000000056400010400035a0004000800011d08000c00012210001400011918001c00012220002400012228002c0001252c003000011938003c00012540004400012244004800011e48004c00011b50005400012054005800012458005c0001275c006000012c06001c00010a006400f4016400000400000000000000000000000000000000023a0004000800012910001400021d2018001c0002252928002c0002292c30003400021d2040004400012944004800012548004c0001225c006000012a`), music.PlaybackMode.LoopingInBackground)
    villager = sprites.create(assets.image`John`, SpriteKind.NPC)
    tiles.placeOnTile(villager, tiles.getTileLocation(4, 11))
    merchant = sprites.create(img`
        cccccccccccccccccccc
        cccccccccccccccccccc
        ce6335858585853366ec
        ce6358585858585336ec
        ce63858ddddd858333ec
        ce3358d1fdf1d85366ec
        ce638dd6fdf6dd8336ec
        ce635ddddddddd5336ec
        ce3338ddcccdd83333ec
        ce35858ddddd858533ec
        ce3858585858585836ec
        ce3585858585858533ec
        ce3dd858585858dd33ec
        ce3dd585858585dd33ec
        ceeeeeeeeeeeeeeeeeec
        ceccccccccccccccccec
        ce363fffffffff3633ec
        ce636fffffffff3663ec
        ce333fff333fff3363ec
        ce363fff366fff3363ec
        `, SpriteKind.NPC_still)
    tiles.placeOnTile(merchant, tiles.getTileLocation(16, 13))
    tiles.setWallAt(tiles.getTileLocation(16, 13), true)
    animation.runImageAnimation(
    merchant,
    [img`
        33cccccccccccccccccccccc33
        3ceeeeeeeeeeeeeeeeeeeeeec3
        3ccceecececececececeeeccc3
        333ceecececececececeeec333
        333ceeeeeeeeeeeeeeeeeec333
        333ce2225858585852222ec333
        333ce2258585858585222ec333
        333ce22858ddddd858222ec333
        333ce2258d1fdf1d85222ec333
        333ce228dd6fdf6dd8222ec333
        333ce225ddddddddd5222ec333
        333ce2228ddcccdd82222ec333
        333ce25858ddddd858522ec333
        333ce2858585858585822ec333
        333ce2585858585858522ec333
        633ce2dd858585858dd22ec333
        363ce2dd585858585dd22ec363
        633ceeeeeeeeeeeeeeeeeec363
        333ceccccccccccccccccec363
        333ce222fffffffff2222ec336
        333ce222fffffffff2222ec333
        333ce222fff222fff2222ec333
        333ce222fff222fff2222ec333
        33cccccccccccccccccccccc33
        33333333333333333333333333
        33333333333333333333333333
        `,img`
        cccccccccccccccccccc......
        cccccccccccccccccccc......
        ce6333333333363366ec......
        ce6335858585853636ec......
        ce6358585858585333ec......
        ce33858ddddd858366ec......
        ce6358d1fdf1d85336ec......
        ce638dd6fdf6dd8336ec......
        ce335ddddddddd5333ec......
        ce3338ddcccdd83333ec......
        ce35858ddddd858536ec......
        ce3858585858585833ec......
        ce3585858585858533ec......
        ce3dd858585858dd33ec......
        ceeddeeeeeeeeeddeeec......
        ceccccccccccccccccec......
        ce363fffffffff3633ec......
        ce636fffffffff3663ec......
        ce333fff333fff3363ec......
        ce363fff366fff3363ec......
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        `,img`
        cccccccccccccccccccc......
        cccccccccccccccccccc......
        ce6335858585853366ec......
        ce6358585858585336ec......
        ce63858ddddd858333ec......
        ce3358d1fdf1d85366ec......
        ce638dd6fdf6dd8336ec......
        ce635ddddddddd5336ec......
        ce3338ddcccdd83333ec......
        ce35858ddddd858533ec......
        ce3858585858585836ec......
        ce3585858585858533ec......
        ce3dd858585858dd33ec......
        ce3dd585858585dd33ec......
        ceeeeeeeeeeeeeeeeeec......
        ceccccccccccccccccec......
        ce363fffffffff3633ec......
        ce636fffffffff3663ec......
        ce333fff333fff3363ec......
        ce363fff366fff3363ec......
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        `],
    1000,
    true
    )
    animation.runImageAnimation(
    mySprite,
    [img`
        . . c c c c c c c c . . 
        . c c c c d d c c c . . 
        . c c c d d d d c c . . 
        . c c d 1 f d f 1 d . . 
        . c d d 9 f d f 9 d . . 
        . . d d d d d d d d . . 
        . . d d d e e e d d . . 
        . . d d d d d d d d . . 
        2 2 2 2 2 d d d 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        d d 4 4 4 4 4 4 4 4 d d 
        . . f f f f f f f f . . 
        . . f f f . . f f f . . 
        . . f f f . . f f f . . 
        `,img`
        . . c c c c c c c c . . 
        . c c c c d d c c c . . 
        . c c c d d d d c c . . 
        . c c d d d d d d d . . 
        . c d d f f d f f d . . 
        . . d d d d d d d d . . 
        . . d d d e e e d d . . 
        . . d d d d d d d d . . 
        2 2 2 2 2 d d d 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        d d 4 4 4 4 4 4 4 4 d d 
        . . f f f f f f f f . . 
        . . f f f . . f f f . . 
        . . f f f . . f f f . . 
        `,img`
        . . c c c c c c c c . . 
        . c c c c d d c c c . . 
        . c c c d d d d c c . . 
        . c c d 1 f d f 1 d . . 
        . c d d 9 f d f 9 d . . 
        . . d d d d d d d d . . 
        . . d d d e e e d d . . 
        . . d d d d d d d d . . 
        2 2 2 2 2 d d d 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        d d 4 4 4 4 4 4 4 4 d d 
        . . f f f f f f f f . . 
        . . f f f . . f f f . . 
        . . f f f . . f f f . . 
        `],
    1000,
    true
    )
    lastLoc = villager.tilemapLocation()
    tiles.setWallAt(lastLoc, true)
}
let curDir = 0
let lastLoc: tiles.Location = null
let merchant: Sprite = null
let villager: Sprite = null
let village_house_1: Sprite = null
let zomblin: Sprite = null
let mySprite: Sprite = null
main_village()
game.onUpdate(function () {
    if (Math.abs(mySprite.vx) > Math.abs(mySprite.vy)) {
        if (mySprite.vx < 0 && curDir != 1) {
            curDir = 1
            animation.runImageAnimation(
            mySprite,
            [img`
                . . e e e e e . . 
                . e e e e c e e . 
                . e e e e e c e e 
                . e d e e e e e e 
                . d f 9 e e e c e 
                . d f 1 e e e e e 
                . d d d d e e e e 
                . d d d d d e e e 
                . d 6 6 6 6 6 e . 
                d 6 6 6 6 6 6 d . 
                d 5 c c c c c d . 
                . e e e e e e . . 
                . . . e e e . . . 
                `,img`
                . . e e e e e . . 
                . e e e e c e e . 
                . e e e e e c e e 
                . e d e e e e e e 
                . d f 9 e e e c e 
                . d f 1 e e e e e 
                . d d d d e e e e 
                . d d d d d e e e 
                . d 6 6 6 6 6 e . 
                . 6 6 6 6 6 6 . . 
                d 5 c c c c c d . 
                . e e e e e e e . 
                . e e . . . e e . 
                `,img`
                . . e e e e e . . 
                . e e e e c e e . 
                . e e e e e c e e 
                . e d e e e e e e 
                . d f 9 e e e c e 
                . d f 1 e e e e e 
                . d d d d e e e e 
                . d d d d d e e e 
                . d 6 6 6 6 6 e . 
                . 6 6 6 6 6 6 . . 
                . 5 c c c c c . . 
                . e e e e e e . . 
                . . . e e e . . . 
                `,img`
                . . e e e e e . . 
                . e e e e c e e . 
                . e e e e e c e e 
                . e d e e e e e e 
                . d f 9 e e e c e 
                . d f 1 e e e e e 
                . d d d d e e e e 
                . d d d d d e e e 
                . d 6 6 6 6 6 e . 
                d 6 6 6 6 6 6 d . 
                d 5 c c c c c d . 
                . e e e e e e e . 
                . e e . . . e e . 
                `],
            150,
            true
            )
        } else if (mySprite.vx > 0 && curDir != 2) {
            curDir = 2
            animation.runImageAnimation(
            mySprite,
            [img`
                . . e e e e e . . 
                . e e c e e e e . 
                e e c e e e e e . 
                e e e e e e d e . 
                e c e e e 9 f d . 
                e e e e e 1 f d . 
                e e e e d d d d . 
                e e e d d d d d . 
                . e 6 6 6 6 6 d . 
                . d 6 6 6 6 6 6 d 
                . d c c c c c 5 d 
                . . e e e e e e . 
                . . . e e e . . . 
                `,img`
                . . e e e e e . . 
                . e e c e e e e . 
                e e c e e e e e . 
                e e e e e e d e . 
                e c e e e 9 f d . 
                e e e e e 1 f d . 
                e e e e d d d d . 
                e e e d d d d d . 
                . e 6 6 6 6 6 d . 
                . d 6 6 6 6 6 6 d 
                . d c c c c c 5 d 
                . . e e e e e e e 
                . . e e . . . e e 
                `,img`
                . . e e e e e . . 
                . e e c e e e e . 
                e e c e e e e e . 
                e e e e e e d e . 
                e c e e e 9 f d . 
                e e e e e 1 f d . 
                e e e e d d d d . 
                e e e d d d d d . 
                . e 6 6 6 6 6 d . 
                . . 6 6 6 6 6 6 . 
                . d c c c c c 5 d 
                . . e e e e e e . 
                . . . e e e . . . 
                `,img`
                . . e e e e e . . 
                . e e c e e e e . 
                e e c e e e e e . 
                e e e e e e d e . 
                e c e e e 9 f d . 
                e e e e e 1 f d . 
                e e e e d d d d . 
                e e e d d d d d . 
                . e 6 6 6 6 6 d . 
                . . 6 6 6 6 6 6 . 
                . . c c c c c 5 . 
                . . e e e e e e . 
                . . e e . . e e . 
                `],
            150,
            true
            )
        }
    } else if (Math.abs(mySprite.vx) < Math.abs(mySprite.vy)) {
        if (mySprite.vy < 0 && curDir != 3) {
            curDir = 3
            animation.runImageAnimation(
            mySprite,
            [img`
                . . e e e e e . . . 
                . e e e e c e e e . 
                e e e c e c e e e e 
                e e c c e e c e e e 
                e e c e e e c c e e 
                e e c e e e e c c e 
                e e e e e e e e e e 
                . e c c c c c e e . 
                6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 
                d d c c c c c c d d 
                . . e e e e e e . . 
                . . e e . . e e . . 
                . . . . . . . . . . 
                `,img`
                . . . e e e e . . . 
                . e e e e e e e e . 
                . e e e e c e e e . 
                e e e c e c e e e e 
                e e c c e e c e e e 
                e e c e e e c c e e 
                e e c e e e e c c e 
                e e e e e e e e e e 
                e e c c c c c e e e 
                6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 d d 
                d d c c c c c c d d 
                . . e e e e e e . . 
                . . e e . . . . . . 
                `,img`
                . . e e e e e . . . 
                . e e e e c e e e . 
                e e e c e c e e e e 
                e e c c e e c e e e 
                e e c e e e c c e e 
                e e c e e e e c c e 
                e e e e e e e e e e 
                . e c c c c c e e . 
                6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 
                d d c c c c c c d d 
                . . e e e e e e . . 
                . . e e . . e e . . 
                . . . . . . . . . . 
                `,img`
                . . . e e e e . . . 
                . e e e e e e e e . 
                . e e e e c e e e . 
                e e e c e c e e e e 
                e e c c e e c e e e 
                e e c e e e c c e e 
                e e c e e e e c c e 
                e e e e e e e e e e 
                e e c c c c c e e e 
                6 6 6 6 6 6 6 6 6 6 
                d d 6 6 6 6 6 6 6 6 
                d d c c c c c c d d 
                . . e e e e e e . . 
                . . . . . . e e . . 
                `],
            130,
            true
            )
        } else if (mySprite.vy > 0 && curDir != 4) {
            curDir = 4
            animation.runImageAnimation(
            mySprite,
            [img`
                . . e e e e e e . . 
                . e e c e e e e e e 
                e c e e e d d e e e 
                c e e d d d d d e e 
                c e 9 f d d f 9 e e 
                e e 1 f d d f 1 d e 
                e d d d d d d d d e 
                . d d d d d d d d . 
                6 6 6 6 d d 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 
                d d c c 5 5 c c d d 
                . . e e e e e e . . 
                . . e e . . e e . . 
                `,img`
                . . . e e e e . . . 
                . e e c e e e e e . 
                e c e e e d d e e e 
                c e e d d d d d e e 
                c e 9 f d d f 9 e e 
                e e 1 f d d f 1 d e 
                e d d d d d d d d e 
                . d d d d d d d d . 
                6 6 6 6 d d 6 6 6 6 
                d d 6 6 6 6 6 6 6 6 
                d d c c 5 5 c c d d 
                . . e e e e e e . . 
                . . e e . . . . . . 
                `,img`
                . . e e e e e e . . 
                . e e c e e e e e e 
                e c e e e d d e e e 
                c e e d d d d d e e 
                c e 9 f d d f 9 e e 
                e e 1 f d d f 1 d e 
                e d d d d d d d d e 
                . d d d d d d d d . 
                6 6 6 6 d d 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 
                d d c c 5 5 c c d d 
                . . e e e e e e . . 
                . . e e . . e e . . 
                `,img`
                . . . e e e e . . . 
                . e e c e e e e e . 
                e c e e e d d e e e 
                c e e d d d d d e e 
                c e 9 f d d f 9 e e 
                e e 1 f d d f 1 d e 
                e d d d d d d d d e 
                . d d d d d d d d . 
                6 6 6 6 d d 6 6 6 6 
                6 6 6 6 6 6 6 6 d d 
                d d c c 5 5 c c d d 
                . . e e e e e e . . 
                . . . . . . e e . . 
                `],
            100,
            true
            )
        }
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        if (curDir == 1) {
            curDir = 0
            animation.runImageAnimation(
            mySprite,
            [img`
                . . e e e e e . . 
                . e e e e c e e . 
                . e e e e e c e e 
                . e d e e e e e e 
                . d f 9 e e e c e 
                . d f 1 e e e e e 
                . d d d d e e e e 
                . d d d d d e e e 
                . d 6 6 6 6 6 e . 
                d 6 6 6 6 6 6 d . 
                d 5 c c c c c d . 
                . e e e e e e . . 
                . e e . . e e . . 
                `],
            150,
            false
            )
        } else if (curDir == 2) {
            curDir = 0
            animation.runImageAnimation(
            mySprite,
            [img`
                . . e e e e e . . 
                . e e c e e e e . 
                e e c e e e e e . 
                e e e e e e d e . 
                e c e e e 9 f d . 
                e e e e e 1 f d . 
                e e e e d d d d . 
                e e e d d d d d . 
                . e 6 6 6 6 6 d . 
                . d 6 6 6 6 6 6 d 
                . d c c c c c 5 d 
                . . e e e e e e . 
                . . e e . . e e . 
                `],
            150,
            false
            )
        } else if (curDir == 3) {
            curDir = 0
            animation.runImageAnimation(
            mySprite,
            [img`
                . . e e e e e . . . 
                . e e e e c e e e . 
                e e e c e c e e e e 
                e e c c e e c e e e 
                e e c e e e c c e e 
                e e c e e e e c c e 
                e e e e e e e e e e 
                . e c c c c c e e . 
                6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 
                d d c c c c c c d d 
                . . e e e e e e . . 
                . . e e . . e e . . 
                `],
            130,
            false
            )
        } else if (curDir == 4) {
            curDir = 0
            animation.runImageAnimation(
            mySprite,
            [img`
                . . e e e e e e . . 
                . e e c e e e e e e 
                e c e e e d d e e e 
                c e e d d d d d e e 
                c e 9 f d d f 9 e e 
                e e 1 f d d f 1 d e 
                e d d d d d d d d e 
                . d d d d d d d d . 
                6 6 6 6 d d 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 
                d d c c 5 5 c c d d 
                . . e e e e e e . . 
                . . e e . . e e . . 
                `],
            100,
            false
            )
        }
    }
})
game.onUpdate(function () {
	
})
