'use server'

import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/mysql2';

export async function checkUserExist(userId: string): Promise<'มี' | 'ไม่มี'> {
    const db = drizzle(process.env.DATABASE_URL!)

  const result = await db
    .select()
    .from(users)
    .where(eq(users.uid, userId))
    .limit(1);

  return result.length > 0 ? 'มี' : 'ไม่มี';
}
