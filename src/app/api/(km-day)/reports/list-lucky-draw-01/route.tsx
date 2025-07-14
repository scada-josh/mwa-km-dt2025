// app/api/export-fullnames/route.ts
// import { NextResponse } from "next/server";
// import { db } from "@/db";
// import { lurs, users } from "@/db/schema";
// import { eq, asc } from "drizzle-orm";

import { lurs, users } from "@/db/schema";
// import { drizzle } from "drizzle-orm/mysql2";
import { NextResponse } from "next/server";
import { eq, asc } from 'drizzle-orm';
import db from "@/app/lib/db";

export async function GET() {
  // const db = drizzle(process.env.DATABASE_URL!)
  
  const result = await db
    .selectDistinct({
      fullname: users.fullname,
    })
    .from(lurs)
    .innerJoin(users, eq(lurs.uid, users.uid))
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
