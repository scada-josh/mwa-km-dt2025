// app/actions/user.ts หรือใน API route
// import { db } from '@/db'; // config drizzle + db connection

import db from '@/app/lib/db';
import { kmapQuestion } from '@/db/schema';
import { eq } from 'drizzle-orm';
// import { drizzle } from 'drizzle-orm/mysql2';

export async function upsertQuiz(uid: string) {

  // const db = drizzle(process.env.DATABASE_URL!)

  const existing = await db
    .select()
    .from(kmapQuestion)
    .where(eq(kmapQuestion.uid, uid))
    .limit(1);

  if (existing.length > 0) {
    // update
    await db
      .update(kmapQuestion)
      .set({ testResult: 1 })
      .where(eq(kmapQuestion.uid, uid));
  } else {
    // insert
    await db.insert(kmapQuestion).values({ 
        uid: uid, 
        testResult: 1 
    });

  }
}
