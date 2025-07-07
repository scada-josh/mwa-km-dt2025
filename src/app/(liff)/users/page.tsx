import { users } from '@/db/schema';
import { drizzle } from 'drizzle-orm/mysql2';

export default async function UserPage() {

  const db = drizzle(process.env.DATABASE_URL!);
  const user = await db.select().from(users)

  console.log(user)

  return (
    <main>
      {JSON.stringify(user)}
    </main>
  );
}