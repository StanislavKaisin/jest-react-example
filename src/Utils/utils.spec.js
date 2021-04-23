import * as utils from "./utils";

describe("trimString", () => {
  it("Posistive trimString cases", () => {
    expect(utils.trimString("LongName", 5)).toBe("LongN...");
    expect(utils.trimString("LongName", 4)).toBe("Long...");
    expect(utils.trimString("LongName", 10)).toBe("LongName");
    expect(utils.trimString("           LongName", 3)).toBe("Lon...");
  });

  it("Negative trimString cases", () => {
    expect(utils.trimString("           ", 3)).toBe("           ");
    expect(utils.trimString(null, 3)).toBeNull();
    expect(utils.trimString(undefined, 3)).toBeUndefined();
    expect(utils.trimString(12345, 3)).toBe("123...");
  });
});

describe("getIsValidNumber", () => {
  it("Posistive getIsValidNumber cases", () => {
    const numbers = [1, 0, 0.5, "123", "321asd"];

    for (let int = 0; int < numbers.length; int++) {
      const element = numbers[int];
      expect(utils.getIsValidNumber(element)).toBeTruthy();
    }
  });

  it("Negative getIsValidNumber cases", () => {
    const notNumbers = ["asd123", "qwe", Infinity, undefined, null, [], {}];

    for (let int = 0; int < notNumbers.length; int++) {
      const element = notNumbers[int];
      expect(utils.getIsValidNumber(element)).toBeFalsy();
    }
  });
});

describe("removeObjPropImmutably", () => {
  it("Posistive removeObjPropImmutably cases", () => {
    expect(utils.removeObjPropImmutably({ a: 1, b: 2 }, "b")).toMatchObject({
      a: 1,
    });
    expect(
      utils.removeObjPropImmutably({ a: () => {}, b: 2 }, "a")
    ).toMatchObject({
      b: 2,
    });
  });

  it("Negative removeObjPropImmutably cases", () => {
    const notValidObjects = [undefined, null, [], {}, "string", 1];
    for (let index = 0; index < notValidObjects.length; index++) {
      const element = notValidObjects[index];
      expect(utils.removeObjPropImmutably(element)).toMatchObject({});
    }
  });
});
