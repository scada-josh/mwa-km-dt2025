/* eslint-disable @typescript-eslint/no-explicit-any */
// app/actions/user.ts หรือใน API route
// import { db } from '@/db'; // config drizzle + db connection

import { lurs } from '@/db/schema';
import { drizzle } from 'drizzle-orm/mysql2';

export async function insertLur(rawData:any) {

  const db = drizzle(process.env.DATABASE_URL!)

    if (typeof rawData.userId === 'string' && typeof rawData.learn === 'string' && typeof rawData.unlearn === 'string' && typeof rawData.relearn === 'string') {
        // insert
        await db.insert(lurs).values({ 
            uid: rawData.userId, 
            learn: rawData.learn ,
            unlearn: rawData.unlearn ,
            relearn: rawData.relearn 
        });

  }


}
