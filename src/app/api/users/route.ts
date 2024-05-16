import { prisma } from "@/lib/prisma";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const user = await prisma.user.create({
    data: { email: "user@222.com", name: "user@lol222222.com" },
  });

  return NextResponse.json(user);
}
