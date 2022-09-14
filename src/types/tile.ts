export interface Tile {
  id: number;
  x: number;
  y: number;
  value: number;
  isNew: boolean;
  isMerged: boolean;
}
export type TileList = Array<Tile | null>;
