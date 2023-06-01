import { removeStringsByLength } from "./removeStringsByLength";

describe("removeStringsByLength", () => {
  it("returns empty if list if empty", () => {
    const list = [];
    expect(removeStringsByLength(list, 1)).toStrictEqual([]);
  });

  it("removes the long words off the list when passing 5", () => {
    const list = ["Hola", "viva", "el furbo", "me encanta"];
    expect(removeStringsByLength(list, 5)).toStrictEqual(["Hola", "viva"]);
  });
});
