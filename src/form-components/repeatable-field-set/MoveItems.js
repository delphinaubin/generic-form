export function moveUp(array, itemToMoveUpIndex) {
  if (itemToMoveUpIndex === 0) {
    return array;
  }
  return [
    ...array.slice(0, itemToMoveUpIndex - 1),
    array[itemToMoveUpIndex],
    array[itemToMoveUpIndex - 1],
    ...array.slice(itemToMoveUpIndex + 1, array.length),
  ];
}

export function moveDown(array, itemToMoveDownIndex) {
  if (itemToMoveDownIndex >= array.length - 1) {
    return array;
  }
  return moveUp(array, itemToMoveDownIndex + 1);
}
