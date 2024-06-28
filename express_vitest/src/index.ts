import express, { Request, Response } from "express";
import { z } from "zod";
import { prismaClient } from "./db";

const app = express();

app.use(express.json());

const sumInput = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/sum", async (req: Request, res: Response) => {
  const result = sumInput.safeParse(req.body);

  if (!result.success) {
    return res.status(411).json({ message: "Invalid inputs!" });
  }

  const { a, b } = result.data;
  const sum = a + b;

  await prismaClient.sum.create({
    data: {
      a,
      b,
      result: sum,
    },
  });

  return res.status(200).json({ sum });
});

export { app };
