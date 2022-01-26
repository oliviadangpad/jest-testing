const chunkArray = require("./chunk");

test("chunkArray function exists", () => {
  expect(chunkArray).toBeDefined();
});

test("chunkArray arr of 6 values with length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const length = 2;
  expect(chunkArray(numbers, length)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});
