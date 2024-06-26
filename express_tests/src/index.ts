import express, { Request, Response } from "express";
import { z } from "zod";

const sumInputs = z.object({
  a: z.number(),
  b: z.number(),
});

const app = express();

app.use(express.json());

app.post("/sum", (req: Request, res: Response) => {
  const result = sumInputs.safeParse(req.body);

  if (!result.success) {
    return res
      .status(411)
      .json({ message: "Invalid inputs. Provide a and b!" });
  }

  const { a, b } = result.data;
  const sum = a + b;

  return res.status(200).json({ sum });
});

export { app };
