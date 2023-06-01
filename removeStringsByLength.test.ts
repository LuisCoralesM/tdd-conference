import { removeStringsByLength } from "./removeStringsByLength";

describe("removeStringsByLength", () => {
  it("returns empty if list if empty", () => {
    const list = [];
    expect(removeStringsByLength(list, 1)).toStrictEqual([]);
  });

  it("returns empty if every string length is larger than the number", () => {
    const list = ["Un sabio dijo una vez", "'No entiendo nada'"];
    expect(removeStringsByLength(list, 3)).toStrictEqual([]);
  });

  it("does not remove anything if every string length is shorter or equal than the number", () => {
    const list = ["que", "so"];
    expect(removeStringsByLength(list, 4)).toStrictEqual(["que", "so"]);
  });

  it("removes the 'el furbo' off the list when passing 5", () => {
    const list = ["Hola", "viva", "el furbo"];
    expect(removeStringsByLength(list, 5)).toStrictEqual(["Hola", "viva"]);
  });
});
