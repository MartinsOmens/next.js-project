import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModels";
import { updateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

//Reading Todos
export async function GET(request: NextRequest) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

//Creating new Todos
export async function POST(request: NextRequest) {
  const { title, description } = await request.json();
  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "Todo Created" });
}

//Deleting a Todo
export async function DELETE(request: NextRequest) {
  const mongoId = request.nextUrl.searchParams.get("mongoId");
  if (!mongoId) {
    return NextResponse.json({ msg: "Todo not found" }, { status: 400 });
  }
  await TodoModel.findByIdAndDelete(mongoId);
  return NextResponse.json({ msg: "Todo Deleted" }, { status: 200 });
}

//Updating a Todo

export async function PUT(request: NextRequest) {
  const mongoId = request.nextUrl.searchParams.get("mongoId");
  if (!mongoId) {
    return NextResponse.json({ msg: "Todo not found" }, { status: 400 });
  }
  await TodoModel.findByIdAndUpdate(mongoId, {
    $set:{
      isCompleted: true,
    }
  });
  return NextResponse.json({ msg: "Todo Updated" }, { status: 200 });
}