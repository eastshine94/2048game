export function getRandomInteger(from: number, to: number): number {
  return Math.floor(Math.random() * to + from);
}

export function convertIndexOf2Dto1D(
  x: number,
  y: number,
  colNum: number
): number {
  return y * colNum + x;
}
