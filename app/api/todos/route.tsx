import { NextRequest, NextResponse } from "next/server";
import { todoController } from "@/server/controller/todo";

export async function GET(request: NextRequest) {
  console.log(request.method);
  if (request.method === "GET") {
    return todoController.get(request);
  }
  if (request.method === "POST") {
    console.log("POST");
  }
  return NextResponse.json(
    { message: "Method Not Allowed" },
    { status: 405, statusText: "Method Not Allowed" }
  );
}
