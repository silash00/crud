import { NextResponse } from "next/server";
import { read } from "../../../core/crud";

export async function GET(request: Request) {
  const ALL_TODOS = read();
  return NextResponse.json({ todos: ALL_TODOS }, { status: 200 });
}
