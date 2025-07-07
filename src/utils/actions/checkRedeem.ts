'use server'

import { redeems } from '@/db/schema';
import { and, eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/mysql2';

export async function checkRedeem(userId: string): Promise<'รับของแล้ว' | 'ยังไม่ได้รับของ'> {
  const db = drizzle(process.env.DATABASE_URL!)

  const result = await db
    .select()
    .from(redeems)
    // .where(eq(kmapQuestion.uid, userId))
    .where(
      and(
        eq(redeems.uid, userId),
        eq(redeems.isRedeem, 1)
      )
    )
    .limit(1);

  return result.length > 0 ? 'รับของแล้ว' : 'ยังไม่ได้รับของ';
}
