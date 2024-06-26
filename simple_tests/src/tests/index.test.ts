import { describe, it, expect } from "@jest/globals";

import { sum, multiply } from "../index";

describe("Testing calculator functionality", () => {
  describe("Addition", () => {
    it("4 + 5 = 9", () => {
      expect(sum(4, 5)).toBe(9);
    });

    it("-2 + 3 = 1", () => {
      expect(sum(-2, 3)).toBe(1);
    });

    it("0 + 9 = 9", () => {
      expect(sum(0, 9)).toBe(9);
    });

    it("-9 + - 8 = -17", () => {
      expect(sum(-9, -8)).toBe(-17);
    });
  });

  describe("Multiplication", () => {
    it("3 * 9 = 27", () => {
      expect(multiply(3, 9)).toBe(27);
    });

    it("0 * 0 = 0", () => {
      expect(multiply(0, 0)).toBe(0);
    });

    it("-2 * 6 = -12", () => {
      expect(multiply(-2, 6)).toBe(-12);
    });

    it("-6 * -6 = 36", () => {
      expect(multiply(-6, -6)).toBe(36);
    });
  });
});
