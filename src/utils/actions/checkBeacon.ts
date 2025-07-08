'use server'

import { beacon } from '@/db/schema';
import { and, eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/mysql2';

export async function checkBeacon(userId: string): Promise<'ส่งข้อความไปแล้ว' | 'ยังไม่ได้ส่งข้อความ'> {
  const db = drizzle(process.env.DATABASE_URL!)

  const result = await db
    .select()
    .from(beacon)
    // .where(eq(kmapQuestion.uid, userId))
    .where(
      and(
        eq(beacon.uid, userId),
        eq(beacon.isNotification, 1)
      )
    )
    .limit(1);

  return result.length > 0 ? 'ส่งข้อความไปแล้ว' : 'ยังไม่ได้ส่งข้อความ';
}
