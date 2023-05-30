import { removeStringsByLength } from "./removeStringsByLength";

describe("removeStringsByLength", () => {
  it("should return empty if list if empty", () => {
    const list = [];
    expect(removeStringsByLength(list, 1)).toStrictEqual([]);
  });

  it("should remove the 'el furbo' off the list when passing 5", () => {
    const list = ["Hola", "viva", "el furbo"];
    expect(removeStringsByLength(list, 5)).toStrictEqual(["Hola", "viva"]);
  });

  // it("should return empty if every string length is larger than the number", () => {
  //   const list = ["Un sabio dijo una vez", "'No entiendo nada'"];
  //   expect(removeStringsByLength(list, 3)).toStrictEqual([]);
  // });

  // it("should not remove anything if every string length is shorter or equal than the number", () => {
  //   const list = ["que", "so"];
  //   expect(removeStringsByLength(list, 4)).toStrictEqual(["que", "so"]);
  // });
});
