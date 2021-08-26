const { moveLeft, moveRight, moveUp, moveDown } = require("../movement");

describe("Test the movement functions", () => {
  describe("The move left function", () => {
    it("should move the robot to the left", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveLeft(currentPosition)).toEqual({ x: 4, y: 5 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 0, y: 5 };

      expect(moveLeft(currentPosition)).toEqual({ x: 0, y: 5 });
    });

    it("should hit the elements and say ouch", () => {
      const objects = [
        { x: 4, y: 5 },
        { x: 5, y: 6 },
      ];
      const currentPosition = { x: 5, y: 5 };

      expect(moveLeft(currentPosition, objects)).toEqual("ouch");
    });
  });
  describe("The move right function", () => {
    it("should move the robot to the right", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveRight(currentPosition)).toEqual({ x: 6, y: 5 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 10, y: 5 };

      expect(moveRight(currentPosition)).toEqual({ x: 10, y: 5 });
    });

    it("should hit the elements and say ouch", () => {
      const objects = [
        { x: 4, y: 5 },
        { x: 6, y: 5 },
      ];
      const currentPosition = { x: 5, y: 5 };

      expect(moveRight(currentPosition, objects)).toEqual("ouch");
    });
  });

  describe("The move up function", () => {
    it("should move the robot to the up", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveUp(currentPosition)).toEqual({ x: 5, y: 4 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 5, y: 0 };

      expect(moveUp(currentPosition)).toEqual({ x: 5, y: 0 });
    });

    it("should hit the elements and say ouch", () => {
      const objects = [
        { x: 4, y: 6 },
        { x: 5, y: 4 },
      ];
      const currentPosition = { x: 5, y: 5 };

      expect(moveUp(currentPosition, objects)).toEqual("ouch");
    });
  });

  describe("The move down function", () => {
    it("should move the robot to the down", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveDown(currentPosition)).toEqual({ x: 5, y: 6 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 5, y: 10 };

      expect(moveDown(currentPosition)).toEqual({ x: 5, y: 10 });
    });

    it("should hit the elements and say ouch", () => {
      const objects = [
        { x: 5, y: 6 },
        { x: 5, y: 4 },
      ];
      const currentPosition = { x: 5, y: 5 };

      expect(moveUp(currentPosition, objects)).toEqual("ouch");
    });
  });
});
