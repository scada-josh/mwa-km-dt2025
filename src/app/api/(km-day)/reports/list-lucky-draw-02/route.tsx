// app/api/export-fullnames/route.ts
// import { NextResponse } from "next/server";
// import { db } from "@/db";
// import { lurs, users } from "@/db/schema";
// import { eq, asc } from "drizzle-orm";

import { users } from "@/db/schema";
import { drizzle } from "drizzle-orm/mysql2";
import { NextResponse } from "next/server";
import { asc } from 'drizzle-orm';

export async function GET() {
  const db = drizzle(process.env.DATABASE_URL!)
  const result = await db
    .selectDistinct({
      fullname: users.fullname,
    })
    .from(users)
    .orderBy(asc(users.fullname));

  const plainText = result
    .map(row => row.fullname)
    .filter(name => !!name)
    .join("\n");

  return new NextResponse(plainText);

  // return new NextResponse(plainText, {
  //   status: 200,
  //   headers: {
  //     "Content-Type": "text/plain",
  //     "Content-Disposition": "attachment; filename=fullnames.txt",
  //   },
  // });
}
