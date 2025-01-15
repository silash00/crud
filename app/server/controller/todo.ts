import { read, update } from "@/core/crud";
import { NextRequest, NextResponse } from "next/server";

function get(req: NextRequest) {
  const ALL_TODOS = read();
  return NextResponse.json({ todos: ALL_TODOS }, { status: 200 });
}

function create(req: NextRequest) {
  // logic here
}

export const todoController = {
  get,
  create,
};
