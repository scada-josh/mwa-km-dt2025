// app/actions/user.ts หรือใน API route
// import { db } from '@/db'; // config drizzle + db connection

import db from '@/app/lib/db';
import { redeems } from '@/db/schema';
import { eq } from 'drizzle-orm';
// import { drizzle } from 'drizzle-orm/mysql2';

export async function upsertRedeem(uid: string) {

  // const db = drizzle(process.env.DATABASE_URL!)

  const existing = await db
    .select()
    .from(redeems)
    .where(eq(redeems.uid, uid))
    .limit(1);

  if (existing.length > 0) {
    // update
    await db
      .update(redeems)
      .set({ isRedeem: 1 })
      .where(eq(redeems.uid, uid));
  } else {
    // insert
    await db.insert(redeems).values({ 
        uid: uid, 
        isRedeem: 1 
    });

  }
}
