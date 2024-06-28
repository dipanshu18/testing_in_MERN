import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset } from "vitest-mock-extended";

const prismaClient = mockDeep<PrismaClient>();

export { prismaClient };
