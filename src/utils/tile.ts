import { MAX_POS } from "constants/tile";
import { Tile, TileList } from "types/tile";
import { convertIndexOf2Dto1D, getRandomInteger } from "./number";

export function getInitialTileList() {
  const tileList: TileList = Array.from(
    new Array(MAX_POS * MAX_POS),
    () => null
  );
  const tile1 = makeTile(tileList);
  if (!tile1) return tileList;
  const tile1Idx = convertIndexOf2Dto1D(tile1.x, tile1.y, MAX_POS);
  tileList[tile1Idx] = tile1;

  const tile2 = makeTile(tileList);
  if (!tile2) return tileList;
  const tile2Idx = convertIndexOf2Dto1D(tile2.x, tile2.y, MAX_POS);
  tileList[tile2Idx] = tile2;
  return tileList;
}

let currentId = 0;
export function makeTile(tileList: TileList): Tile | null {
  const findBlankIdx = tileList.findIndex((item) => !item);

  if (findBlankIdx < 0) {
    return null;
  }

  let tile: Tile;
  while (true) {
    const x: number = getRandomInteger(0, MAX_POS);
    const y: number = getRandomInteger(0, MAX_POS);
    const idx: number = convertIndexOf2Dto1D(x, y, MAX_POS);
    if (tileList[idx]) {
      continue;
    }
    tile = { id: currentId++, value: 2, x, y, isNew: true, isMerged: false };
    break;
  }
  return tile;
}

export function moveTile(tileList: TileList, x: number, y: number) {
  const isMoveY: boolean = y !== 0;
  const isMinus: boolean = x + y < 0;
  const newTileList: TileList = [...tileList];

  for (let i = 0; i < MAX_POS; i++) {
    let targetPos = isMinus ? 0 : MAX_POS - 1;
    for (let j = 0; j < MAX_POS; j++) {
      const currentPos = isMinus ? j : MAX_POS - j - 1;
      const currentIdx = isMoveY
        ? convertIndexOf2Dto1D(i, currentPos, MAX_POS)
        : convertIndexOf2Dto1D(currentPos, i, MAX_POS);

      const tile = newTileList[currentIdx];

      if (tile) {
        if (targetPos !== currentPos) {
          const targetIdx = isMoveY
            ? convertIndexOf2Dto1D(i, targetPos, MAX_POS)
            : convertIndexOf2Dto1D(targetPos, i, MAX_POS);
          newTileList[currentIdx] = null;
          newTileList[targetIdx] = {
            ...tile,
            x: !isMoveY ? targetPos : tile.x,
            y: isMoveY ? targetPos : tile.y,
            isNew: false,
            isMerged: false,
          };
        }
        isMinus ? targetPos++ : targetPos--;
      }
    }
  }

  return newTileList;
}
