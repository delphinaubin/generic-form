import { moveDown, moveUp } from "./MoveItems";

describe("moveUp", () => {
  it("moves the item to the given index up", () => {
    const anArray = ["a", "b", "c", "d", "e", "f"];
    expect(moveUp(anArray, 2)).toEqual(["a", "c", "b", "d", "e", "f"]);
    expect(moveUp(anArray, 4)).toEqual(["a", "b", "c", "e", "d", "f"]);
  });

  it("doesn't move up the first element", () => {
    const anArray = ["a", "b", "c", "d", "e", "f"];
    expect(moveUp(anArray, 0)).toEqual(anArray);
  });
});

describe("movDown", () => {
  it("moves the item to the given index down", () => {
    const anArray = ["a", "b", "c", "d", "e", "f"];
    expect(moveDown(anArray, 2)).toEqual(["a", "b", "d", "c", "e", "f"]);
    expect(moveDown(anArray, 4)).toEqual(["a", "b", "c", "d", "f", "e"]);
  });

  it("doesn't move down the last element", () => {
    const anArray = ["a", "b", "c", "d", "e", "f"];
    expect(moveDown(anArray, 5)).toEqual(anArray);
  });
});
