'use server'

import { kmapQuestion } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/mysql2';

export async function checkQuiz(userId: string): Promise<'ทำแล้ว' | 'ยังไม่ทำ'> {
  const db = drizzle(process.env.DATABASE_URL!)

  const result = await db
    .select()
    .from(kmapQuestion)
    .where(eq(kmapQuestion.uid, userId))
    .limit(1);

  return result.length > 0 ? 'ทำแล้ว' : 'ยังไม่ทำ';
}
