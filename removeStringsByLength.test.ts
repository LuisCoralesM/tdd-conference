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
});
