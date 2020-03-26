const enhancer = require("./enhancer.js");
const { repair, fail, succeed } = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair() method", () => {
    it("should return durability to 100", () => {
      //arrange - setup
      const item = {
        durability: 3
      };
      const expected = {
        durability: 100
      };

      //act - run system under test
      const result = repair(item);

      //assert - verify it works
      expect(result).toEqual(expected);
    });
  });
});

describe("enhancer.succeed()", () => {
  it("increases an item's enhancement by 1", () => {
      const expectedItem = {
          name: "item",
          enhancement: 20,
          durability: 87
      }
      const inputItem = {
          name: "item",
          enhancement: 19,
          durability: 87
      }
      const outputItem = enhancer.succeed(inputItem)
      expect(outputItem).toStrictEqual(expectedItem)
  })
  it("does not increase an item's enhancement level if it is already 20", () => {
      const expectedItem = {
          name: "item",
          enhancement: 20,
          durability: 100
      }
      const inputItem = {
          name: "item",
          enhancement: 20,
          durability: 100
      }
      const outputItem = enhancer.succeed(inputItem)
      expect(outputItem).toStrictEqual(expectedItem)
  })
})