// app/actions/user.ts หรือใน API route
// import { db } from '@/db'; // config drizzle + db connection

import db from '@/app/lib/db';
import { beacon } from '@/db/schema';
import { eq } from 'drizzle-orm';
// import { drizzle } from 'drizzle-orm/mysql2';

export async function upsertBeaconBrodcast(uid: string) {

  // const db = drizzle(process.env.DATABASE_URL!)

  const existing = await db
    .select()
    .from(beacon)
    .where(eq(beacon.uid, uid))
    .limit(1);

  if (existing.length > 0) {
    // update
    await db
      .update(beacon)
      .set({ isNotification: 1 })
      .where(eq(beacon.uid, uid));
  } else {
    // insert
    await db.insert(beacon).values({ 
        uid: uid, 
        isNotification: 1 
    });

  }
}
