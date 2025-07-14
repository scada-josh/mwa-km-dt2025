// app/actions/user.ts หรือใน API route
// import { db } from '@/db'; // config drizzle + db connection

import db from '@/app/lib/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
// import { drizzle } from 'drizzle-orm/mysql2';

export async function upsertUser(uid: string, fullname: string) {

  // const db = drizzle(process.env.DATABASE_URL!)

  const existing = await db
    .select()
    .from(users)
    .where(eq(users.uid, uid))
    .limit(1);

  if (existing.length > 0) {
    // update
    await db
      .update(users)
      .set({ fullname })
      .where(eq(users.uid, uid));
  } else {
    // insert
    await db.insert(users).values({ uid, fullname });
  }
}
