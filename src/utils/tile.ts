import { MAX_POS } from "constants/tile";
import { Tile, TileList } from "types/tile";
import { getRandomInteger } from "./number";

export function getInitialTileList() {
  const tileList: TileList = Array.from(new Array(MAX_POS), () =>
    Array(MAX_POS).fill(null)
  );
  const tile1 = makeTile(tileList);
  if (!tile1) return tileList;
  tileList[tile1.y][tile1.x] = tile1;

  const tile2 = makeTile(tileList);
  if (!tile2) return tileList;
  tileList[tile2.y][tile2.x] = tile2;

  return tileList;
}

export function makeTile(tileList: TileList): Tile | null {
  const findBlankIdx = tileList.findIndex(
    (tiles) => tiles.findIndex((item) => !item) >= 0
  );

  if (findBlankIdx < 0) {
    return null;
  }

  let tile: Tile;
  while (true) {
    const x = getRandomInteger(0, MAX_POS);
    const y = getRandomInteger(0, MAX_POS);
    if (tileList[y][x]) {
      continue;
    }
    tile = { value: 2, x, y, isNew: true, isMerged: false };
    break;
  }
  return tile;
}
