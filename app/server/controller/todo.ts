import { read } from "@/core/crud";
import { NextRequest, NextResponse } from "next/server";

function get(req: NextRequest) {
  const ALL_TODOS = read();
  return NextResponse.json({ todos: ALL_TODOS }, { status: 200 });
}

export const todoController = {
  get,
};
