import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const COLLECTION = "linkClicks";

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const docs = await db
    .collection<{ _id: string; count: number }>(COLLECTION)
    .find({})
    .toArray();

  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  return NextResponse.json(counts);
}

export async function POST(request: NextRequest) {
  const { linkId } = await request.json();

  if (typeof linkId !== "string" || !linkId) {
    return NextResponse.json({ error: "linkId가 필요합니다." }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();
  const result = await db
    .collection<{ _id: string; count: number }>(COLLECTION)
    .findOneAndUpdate(
      { _id: linkId },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );

  return NextResponse.json({ linkId, count: result?.count ?? 1 });
}
