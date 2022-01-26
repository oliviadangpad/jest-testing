const reverseString = require("./reverse-string");

test("reverString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverses", () => {
  expect(reverseString("Hello")).toEqual("olleH");
});
