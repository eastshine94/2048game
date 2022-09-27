import { MAX_POS } from "constants/tile";
import isNull from "lodash/isNull";
import { Tile, TileList } from "types/tile";
import { convertIndexOf2Dto1D, getRandomInteger } from "./number";

const tilePosList: TileList = Array.from(
  new Array(MAX_POS * MAX_POS),
  () => null
);

function sortTileList(tileList: TileList) {
  return [...tileList].sort((a, b) =>
    isNull(a) ? 1 : isNull(b) ? -1 : a.id - b.id
  );
}

export function getInitialTileList() {
  const tile1 = makeTile(tilePosList);
  if (!tile1) return tilePosList;
  const tile1Idx = convertIndexOf2Dto1D(tile1.x, tile1.y, MAX_POS);
  tilePosList[tile1Idx] = tile1;

  const tile2 = makeTile(tilePosList);
  if (!tile2) return tilePosList;
  const tile2Idx = convertIndexOf2Dto1D(tile2.x, tile2.y, MAX_POS);
  tilePosList[tile2Idx] = tile2;
  return sortTileList(tilePosList);
}

let currentId = 1;
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

export function moveTile(x: number, y: number) {
  const isMoveY: boolean = y !== 0;
  const isMinus: boolean = x + y < 0;
  const newTileList: TileList = [];

  // move tile
  for (let i = 0; i < MAX_POS; i++) {
    let targetPos = isMinus ? 0 : MAX_POS - 1;
    for (let j = 0; j < MAX_POS; j++) {
      const currentPos = isMinus ? j : MAX_POS - j - 1;
      const currentIdx = isMoveY
        ? convertIndexOf2Dto1D(i, currentPos, MAX_POS)
        : convertIndexOf2Dto1D(currentPos, i, MAX_POS);

      const currentTile = tilePosList[currentIdx];

      if (currentTile) {
        if (targetPos !== currentPos) {
          const targetIdx = isMoveY
            ? convertIndexOf2Dto1D(i, targetPos, MAX_POS)
            : convertIndexOf2Dto1D(targetPos, i, MAX_POS);

          const targetTile = tilePosList[targetIdx];

          if (targetTile) {
            //merge
            if (currentTile.value === targetTile.value) {
              tilePosList[targetIdx] = {
                id: currentId++,
                x: !isMoveY ? targetPos : targetTile.x,
                y: isMoveY ? targetPos : targetTile.y,
                value: targetTile.value * 2,
                isNew: false,
                isMerged: true,
              };

              tilePosList[currentIdx] = null;
              newTileList.push({
                ...currentTile,
                x: !isMoveY ? targetPos : targetTile.x,
                y: isMoveY ? targetPos : targetTile.y,
                isNew: false,
                isMerged: false,
              });
              newTileList.push({
                ...targetTile,
                x: !isMoveY ? targetPos : targetTile.x,
                y: isMoveY ? targetPos : targetTile.y,
                isNew: false,
                isMerged: false,
              });
            }
            // move
            else {
              const nextPos = isMinus ? targetPos + 1 : targetPos - 1;
              const nextIdx = isMoveY
                ? convertIndexOf2Dto1D(i, nextPos, MAX_POS)
                : convertIndexOf2Dto1D(nextPos, i, MAX_POS);
              tilePosList[currentIdx] = null;
              tilePosList[nextIdx] = {
                ...currentTile,
                x: !isMoveY ? nextPos : currentTile.x,
                y: isMoveY ? nextPos : currentTile.y,
                isNew: false,
                isMerged: false,
              };
            }
            isMinus ? targetPos++ : targetPos--;
          } else {
            //move
            tilePosList[currentIdx] = null;
            tilePosList[targetIdx] = {
              ...currentTile,
              x: !isMoveY ? targetPos : currentTile.x,
              y: isMoveY ? targetPos : currentTile.y,
              isNew: false,
              isMerged: false,
            };
          }
        }
      }
    }
  }

  return sortTileList([...tilePosList, ...newTileList]);
}
