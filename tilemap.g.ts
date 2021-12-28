// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1900190008080808080808080101010101010101010101010101010102080b000000000d0800000a00000000000000000000000009030800000000000008000008000000000000000008080000000308000000000000080000080000000000000000080d00000003080000000000000800000800000008000000000800000000030808080808080a080000080000000800000000080000000003070d000000000000000008080808080808000008000000000307000000000000000000080d0000000000000008000000000307000000080808080808080000000000000000080a08080803070000000000000000000000000000000000000000000000030700000000000000000000000000000000000000000000000307000808080808080a0808080808080000080808080808080307000809000d000000080c00000d0800000000000d08090003070008000808080000080000000e0800000000000008000003070008000000000000080808080a080000080808080800000307000800000000000000000000000000000000000000000003070000000000000000000000000000000000000000000000030700000008080808080808080800000808080808080800000307000000000009080d00000000000000000009080d0000000307000000000000080000000000000000000000080000000003070008000000000800000000000000000000000800000000030700080000000008080000000008080808080a0800000000030700080000000000000000000000000000000000000000000307000a0000000000000000000000000000000000000000000306050505050505050505050505050505050505050505050504`, img`
2222222222222222222222222
2......2..2.............2
2......2..2........22...2
2......2..2........2....2
2......2..2...2....2....2
22222222..2...2....2....2
2.........2222222..2....2
2.........2........2....2
2...2222222........222222
2.......................2
2.......................2
2.2222222222222..22222222
2.2......2....2......2..2
2.2.222..2....2......2..2
2.2......222222..22222..2
2.2.....................2
2.......................2
2...222222222..2222222..2
2......2...........2....2
2......2...........2....2
2.2....2...........2....2
2.2....22....2222222....2
2.2.....................2
2.2.....................2
2222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.builtin.brick,sprites.dungeon.buttonOrangeDepressed,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
