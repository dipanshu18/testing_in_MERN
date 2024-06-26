import { describe, it, expect } from "@jest/globals";
import request from "supertest";

import { app } from "../index";

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    const response = await request(app).post("/sum").send({
      a: 3,
      b: 9,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.sum).toBe(12);
  });

  it("should return the sum of one positive and one negative number", async () => {
    const response = await request(app).post("/sum").send({
      a: -3,
      b: 9,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.sum).toBe(6);
  });

  it("should return the sum of two zero number", async () => {
    const response = await request(app).post("/sum").send({
      a: 0,
      b: 0,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.sum).toBe(0);
  });

  it("should return the sum of two negative numbers", async () => {
    const response = await request(app).post("/sum").send({
      a: -3,
      b: -9,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.sum).toBe(-12);
  });

  it("should return invalid inputs message for empty body", async () => {
    const response = await request(app).post("/sum").send({});

    expect(response.statusCode).toBe(411);
    expect(response.body.sum).toBe(undefined);
    expect(response.body.message).toStrictEqual(
      "Invalid inputs. Provide a and b!"
    );
  });

  it("should return invalid inputs message for if only one input a / b is passed", async () => {
    const response = await request(app).post("/sum").send({ a: 10 });

    expect(response.statusCode).toBe(411);
    expect(response.body.sum).toBe(undefined);
    expect(response.body.message).toStrictEqual(
      "Invalid inputs. Provide a and b!"
    );
  });

  it("should return invalid inputs message for bad inputs", async () => {
    const response = await request(app).post("/sum").send({ a: "10", b: [] });

    expect(response.statusCode).toBe(411);
    expect(response.body.sum).toBe(undefined);
    expect(response.body.message).toStrictEqual(
      "Invalid inputs. Provide a and b!"
    );
  });
});
