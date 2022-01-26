const functions = require("./function");

beforeAll(() => initialDatabase());
afterAll(() => closeDatabase());

const initialDatabase = () => console.log("Database Initialized...");
const closeDatabase = () => console.log("Database Closed...");
const nameCheck = () => console.log("checking name");

describe("Check Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jess", () => {
    const user = "Jess";
    expect(user).toBe("Jess");
  });
});

// toBe... only for primitive types: number, boolean, null, undefined

describe("Basic tests", () => {
  test("Adds 2 + 2 equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
  });

  test("Adds 2 + 2 not equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
  });

  test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
  });

  test("Should be falsy", () => {
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
  });

  // toEqual
  test("User should be Olivia Dang object", () => {
    expect(functions.createUser()).toEqual({
      firstName: "Olivia",
      lastName: "Dang",
    });
  });

  /** some expect
   * toBeUndefined()
   * toBeLessThan(43)
   * toBeLessThanOrEqual(74)
   * */

  // Regex
  test("There is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  // Arrays
  test("Array contains/not contain", () => {
    const arr = ["admin", "john", "sue"];
    expect(arr).toContain("admin");
    expect(arr).not.toContain("olivia");
  });
});

describe("Working with async data, using assertions", () => {
  test("Promise", () => {
    expect.assertions(1);
    return functions.fetchUser().then((data) => {
      expect(data.name).toEqual("Leanne Graham");
    });
  });

  test("Async Await", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
  });
});
