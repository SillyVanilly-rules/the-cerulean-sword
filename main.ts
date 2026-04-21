namespace SpriteKind {
    export const village_house = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    main_village()
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
    tiles.placeOnTile(zomblin, tiles.getTileLocation(22, 21))
    music.play(music.createSong(hex`0078000408030305001c000f0a006400f4010a00000400000000000000000000000000000000021e0028002c00011b2c003000012c38003c00012544004800011e4c005000012708001c000e050046006603320000040a002d0000006400140001320002010002360008000c00012a10001400011d1c002000012228002c0001202c00300001293c004000012248004c00012254005800012958005c00011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8008f000000010002000a0400050001020800090001070c000d0001031000110002060a1400150001091800190001031c001d00010a20002100010124002500010728002900010a300031000402040709340035000102380039000302040a3c003d0002010b400041000105440045000100480049000109500051000300050b5400550001065800590001065c005d0002010a`), music.PlaybackMode.LoopingInBackground)
    controller.moveSprite(mySprite, 50, 50)
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
}
let curDir = 0
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
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e . . . . . . 
                . . . . e e e e c e e . . . . . 
                . . . . e e e e e c e e . . . . 
                . . . . e d e e e e e e . . . . 
                . . . . d f 9 e e e c e . . . . 
                . . . . d f 1 e e e e e . . . . 
                . . . . d d d d e e e e . . . . 
                . . . . d d d d d e e e . . . . 
                . . . . d 6 6 6 6 6 e . . . . . 
                . . . d 6 6 6 6 6 6 d . . . . . 
                . . . d 5 c c c c c d . . . . . 
                . . . . e e e e e e . . . . . . 
                . . . . . . e e e . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e . . . . . . 
                . . . . e e e e c e e . . . . . 
                . . . . e e e e e c e e . . . . 
                . . . . e d e e e e e e . . . . 
                . . . . d f 9 e e e c e . . . . 
                . . . . d f 1 e e e e e . . . . 
                . . . . d d d d e e e e . . . . 
                . . . . d d d d d e e e . . . . 
                . . . . d 6 6 6 6 6 e . . . . . 
                . . . . 6 6 6 6 6 6 . . . . . . 
                . . . d 5 c c c c c d . . . . . 
                . . . . e e e e e e e . . . . . 
                . . . . e e . . . e e . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e . . . . . . 
                . . . . e e e e c e e . . . . . 
                . . . . e e e e e c e e . . . . 
                . . . . e d e e e e e e . . . . 
                . . . . d f 9 e e e c e . . . . 
                . . . . d f 1 e e e e e . . . . 
                . . . . d d d d e e e e . . . . 
                . . . . d d d d d e e e . . . . 
                . . . . d 6 6 6 6 6 e . . . . . 
                . . . . 6 6 6 6 6 6 . . . . . . 
                . . . . 5 c c c c c . . . . . . 
                . . . . e e e e e e . . . . . . 
                . . . . . . e e e . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e . . . . . . 
                . . . . e e e e c e e . . . . . 
                . . . . e e e e e c e e . . . . 
                . . . . e d e e e e e e . . . . 
                . . . . d f 9 e e e c e . . . . 
                . . . . d f 1 e e e e e . . . . 
                . . . . d d d d e e e e . . . . 
                . . . . d d d d d e e e . . . . 
                . . . . d 6 6 6 6 6 e . . . . . 
                . . . d 6 6 6 6 6 6 d . . . . . 
                . . . d 5 c c c c c d . . . . . 
                . . . . e e e e e e e . . . . . 
                . . . . e e . . . e e . . . . . 
                `],
            150,
            true
            )
        } else if (mySprite.vx > 0 && curDir != 2) {
            curDir = 2
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e e . . . . . 
                . . . . . e e c e e e e . . . . 
                . . . . e e c e e e e e . . . . 
                . . . . e e e e e e d e . . . . 
                . . . . e c e e e 9 f d . . . . 
                . . . . e e e e e 1 f d . . . . 
                . . . . e e e e d d d d . . . . 
                . . . . e e e d d d d d . . . . 
                . . . . . e 6 6 6 6 6 d . . . . 
                . . . . . d 6 6 6 6 6 6 d . . . 
                . . . . . d c c c c c 5 d . . . 
                . . . . . . e e e e e e . . . . 
                . . . . . . . e e e . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e e . . . . . 
                . . . . . e e c e e e e . . . . 
                . . . . e e c e e e e e . . . . 
                . . . . e e e e e e d e . . . . 
                . . . . e c e e e 9 f d . . . . 
                . . . . e e e e e 1 f d . . . . 
                . . . . e e e e d d d d . . . . 
                . . . . e e e d d d d d . . . . 
                . . . . . e 6 6 6 6 6 d . . . . 
                . . . . . d 6 6 6 6 6 6 d . . . 
                . . . . . d c c c c c 5 d . . . 
                . . . . . . e e e e e e e . . . 
                . . . . . . e e . . . e e . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e e . . . . . 
                . . . . . e e c e e e e . . . . 
                . . . . e e c e e e e e . . . . 
                . . . . e e e e e e d e . . . . 
                . . . . e c e e e 9 f d . . . . 
                . . . . e e e e e 1 f d . . . . 
                . . . . e e e e d d d d . . . . 
                . . . . e e e d d d d d . . . . 
                . . . . . e 6 6 6 6 6 d . . . . 
                . . . . . . 6 6 6 6 6 6 . . . . 
                . . . . . d c c c c c 5 d . . . 
                . . . . . . e e e e e e . . . . 
                . . . . . . . e e e . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e e . . . . . 
                . . . . . e e c e e e e . . . . 
                . . . . e e c e e e e e . . . . 
                . . . . e e e e e e d e . . . . 
                . . . . e c e e e 9 f d . . . . 
                . . . . e e e e e 1 f d . . . . 
                . . . . e e e e d d d d . . . . 
                . . . . e e e d d d d d . . . . 
                . . . . . e 6 6 6 6 6 d . . . . 
                . . . . . . 6 6 6 6 6 6 . . . . 
                . . . . . . c c c c c 5 . . . . 
                . . . . . . e e e e e e . . . . 
                . . . . . . e e . . e e . . . . 
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
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e . . . . . . 
                . . . . e e e e c e e e . . . . 
                . . . e e e c e c e e e e . . . 
                . . . e e c c e e c e e e . . . 
                . . . e e c e e e c c e e . . . 
                . . . e e c e e e e c c e . . . 
                . . . e e e e e e e e e e . . . 
                . . . . e c c c c c e e . . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . d d c c c c c c d d . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . e e . . e e . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . e e e e e e e e . . . . 
                . . . . e e e e c e e e . . . . 
                . . . e e e c e c e e e e . . . 
                . . . e e c c e e c e e e . . . 
                . . . e e c e e e c c e e . . . 
                . . . e e c e e e e c c e . . . 
                . . . e e e e e e e e e e . . . 
                . . . e e c c c c c e e e . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 d d . . . 
                . . . d d c c c c c c d d . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . e e . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e . . . . . . 
                . . . . e e e e c e e e . . . . 
                . . . e e e c e c e e e e . . . 
                . . . e e c c e e c e e e . . . 
                . . . e e c e e e c c e e . . . 
                . . . e e c e e e e c c e . . . 
                . . . e e e e e e e e e e . . . 
                . . . . e c c c c c e e . . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . d d c c c c c c d d . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . e e . . e e . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . e e e e e e e e . . . . 
                . . . . e e e e c e e e . . . . 
                . . . e e e c e c e e e e . . . 
                . . . e e c c e e c e e e . . . 
                . . . e e c e e e c c e e . . . 
                . . . e e c e e e e c c e . . . 
                . . . e e e e e e e e e e . . . 
                . . . e e c c c c c e e e . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . d d 6 6 6 6 6 6 6 6 . . . 
                . . . d d c c c c c c d d . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . . . . . e e . . . . . 
                `],
            130,
            true
            )
        } else if (mySprite.vy > 0 && curDir != 4) {
            curDir = 4
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e e . . . . . 
                . . . . e e c e e e e e e . . . 
                . . . e c e e e d d e e e . . . 
                . . . c e e d d d d d e e . . . 
                . . . c e 9 f d d f 9 e e . . . 
                . . . e e 1 f d d f 1 d e . . . 
                . . . e d d d d d d d d e . . . 
                . . . . d d d d d d d d . . . . 
                . . . 6 6 6 6 d d 6 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . d d c c 5 5 c c d d . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . e e . . e e . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . e e c e e e e e . . . . 
                . . . e c e e e d d e e e . . . 
                . . . c e e d d d d d e e . . . 
                . . . c e 9 f d d f 9 e e . . . 
                . . . e e 1 f d d f 1 d e . . . 
                . . . e d d d d d d d d e . . . 
                . . . . d d d d d d d d . . . . 
                . . . 6 6 6 6 d d 6 6 6 6 . . . 
                . . . d d 6 6 6 6 6 6 6 6 . . . 
                . . . d d c c 5 5 c c d d . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . e e . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e e . . . . . 
                . . . . e e c e e e e e e . . . 
                . . . e c e e e d d e e e . . . 
                . . . c e e d d d d d e e . . . 
                . . . c e 9 f d d f 9 e e . . . 
                . . . e e 1 f d d f 1 d e . . . 
                . . . e d d d d d d d d e . . . 
                . . . . d d d d d d d d . . . . 
                . . . 6 6 6 6 d d 6 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . d d c c 5 5 c c d d . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . e e . . e e . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . e e c e e e e e . . . . 
                . . . e c e e e d d e e e . . . 
                . . . c e e d d d d d e e . . . 
                . . . c e 9 f d d f 9 e e . . . 
                . . . e e 1 f d d f 1 d e . . . 
                . . . e d d d d d d d d e . . . 
                . . . . d d d d d d d d . . . . 
                . . . 6 6 6 6 d d 6 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 d d . . . 
                . . . d d c c 5 5 c c d d . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . . . . . e e . . . . . 
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
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e . . . . . . 
                . . . . e e e e c e e . . . . . 
                . . . . e e e e e c e e . . . . 
                . . . . e d e e e e e e . . . . 
                . . . . d f 9 e e e c e . . . . 
                . . . . d f 1 e e e e e . . . . 
                . . . . d d d d e e e e . . . . 
                . . . . d d d d d e e e . . . . 
                . . . . d 6 6 6 6 6 e . . . . . 
                . . . d 6 6 6 6 6 6 d . . . . . 
                . . . d 5 c c c c c d . . . . . 
                . . . . e e e e e e . . . . . . 
                . . . . e e . . e e . . . . . . 
                `],
            150,
            false
            )
        } else if (curDir == 2) {
            curDir = 0
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e e . . . . . 
                . . . . . e e c e e e e . . . . 
                . . . . e e c e e e e e . . . . 
                . . . . e e e e e e d e . . . . 
                . . . . e c e e e 9 f d . . . . 
                . . . . e e e e e 1 f d . . . . 
                . . . . e e e e d d d d . . . . 
                . . . . e e e d d d d d . . . . 
                . . . . . e 6 6 6 6 6 d . . . . 
                . . . . . d 6 6 6 6 6 6 d . . . 
                . . . . . d c c c c c 5 d . . . 
                . . . . . . e e e e e e . . . . 
                . . . . . . e e . . e e . . . . 
                `],
            150,
            false
            )
        } else if (curDir == 3) {
            curDir = 0
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e . . . . . . 
                . . . . e e e e c e e e . . . . 
                . . . e e e c e c e e e e . . . 
                . . . e e c c e e c e e e . . . 
                . . . e e c e e e c c e e . . . 
                . . . e e c e e e e c c e . . . 
                . . . e e e e e e e e e e . . . 
                . . . . e c c c c c e e . . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . d d c c c c c c d d . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . e e . . e e . . . . . 
                `],
            130,
            false
            )
        } else if (curDir == 4) {
            curDir = 0
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e e . . . . . 
                . . . . e e c e e e e e e . . . 
                . . . e c e e e d d e e e . . . 
                . . . c e e d d d d d e e . . . 
                . . . c e 9 f d d f 9 e e . . . 
                . . . e e 1 f d d f 1 d e . . . 
                . . . e d d d d d d d d e . . . 
                . . . . d d d d d d d d . . . . 
                . . . 6 6 6 6 d d 6 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 . . . 
                . . . d d c c 5 5 c c d d . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . e e . . e e . . . . . 
                `],
            100,
            false
            )
        }
    }
})
