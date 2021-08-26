const { printPosition } = require("../print");

describe("test printPosition", () => {
  it("should print the right position", () => {
    const currentPosition = { x: 5, y: 5 };

    const output = `Robot is at { x: ${currentPosition.x}, y: ${currentPosition.y} }`;

    expect(printPosition(currentPosition)).toEqual(output);
  });
});
