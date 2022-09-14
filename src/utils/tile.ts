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
  if (isMoveY) {
    if (isMinus) {
      for (let i = 0; i < MAX_POS; i++) {
        let target = 0;
        for (let j = 0; j < MAX_POS; j++) {
          const val = newTileList[MAX_POS * j + i];
          if (val) {
            if (target !== j) {
              newTileList[MAX_POS * j + i] = null;
              newTileList[MAX_POS * target + i] = {
                ...val,
                y: target,
                isNew: false,
                isMerged: false,
              };
            }
            target++;
          }
        }
      }
    } else {
      for (let i = 0; i < MAX_POS; i++) {
        let target = MAX_POS - 1;
        for (let j = MAX_POS - 1; j >= 0; j--) {
          const val = newTileList[MAX_POS * j + i];
          if (val) {
            if (target !== j) {
              newTileList[MAX_POS * j + i] = null;
              newTileList[MAX_POS * target + i] = {
                ...val,
                y: target,
                isNew: false,
                isMerged: false,
              };
            }
            target--;
          }
        }
      }
    }
  } else {
    if (isMinus) {
      for (let i = 0; i < MAX_POS; i++) {
        let target = 0;
        for (let j = 0; j < MAX_POS; j++) {
          const val = newTileList[MAX_POS * i + j];
          if (val) {
            if (target !== j) {
              newTileList[MAX_POS * i + j] = null;
              newTileList[MAX_POS * i + target] = {
                ...val,
                x: target,
                isNew: false,
                isMerged: false,
              };
            }
            target++;
          }
        }
      }
    } else {
      for (let i = 0; i < MAX_POS; i++) {
        let target = MAX_POS - 1;
        for (let j = MAX_POS - 1; j >= 0; j--) {
          const val = newTileList[MAX_POS * i + j];
          if (val) {
            if (target !== j) {
              newTileList[MAX_POS * i + j] = null;
              newTileList[MAX_POS * i + target] = {
                ...val,
                x: target,
                isNew: false,
                isMerged: false,
              };
            }
            target--;
          }
        }
      }
    }
  }

  return newTileList;
}
