import { expect, describe, it, vi } from "vitest";
import request from "supertest";

import { app } from "../index";

// Mocking each key of prisma
// vi.mock("../db", () => {
//   return {
//     prismaClient: {
//       sum: {
//         create: vi.fn(),
//       },
//     },
//   };
// });

// BETTER WAY using DEEP MOCKING
vi.mock("../db");

describe("POST /sum", () => {
  it("Sum of two numbers", async () => {
    const response = await request(app).post("/sum").send({
      a: 10,
      b: 20,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.sum).toBe(30);
  });

  it("Sum of two negative numbers", async () => {
    const response = await request(app).post("/sum").send({
      a: -1,
      b: -20,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.sum).toBe(-21);
  });

  it("Sum of two zero number", async () => {
    const response = await request(app).post("/sum").send({
      a: 0,
      b: 0,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.sum).toBe(0);
  });

  it("Sum of invalid inputs", async () => {
    const response = await request(app)
      .post("/sum")
      .send({
        a: [10],
      });

    expect(response.statusCode).toBe(411);
    expect(response.body.message).toBe("Invalid inputs!");
  });
});
