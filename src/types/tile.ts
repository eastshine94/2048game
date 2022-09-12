export interface Tile {
  x: number;
  y: number;
  value: number;
  isNew: boolean;
  isMerged: boolean;
}
export type TileList = Array<Array<Tile | null>>;
