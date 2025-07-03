import db from "@/app/lib/db";
import { user } from "@/db/schema";
// import { drizzle } from "drizzle-orm/mysql2";

export default async function UserPage() {

    // const db = drizzle(process.env.DATABASE_URL!);
    // const users = await db.select().from(user)

    const users = await db.select().from(user)
    const countUser = await db.$count(user)


  return (
    <main>
      <div>จำนวนผู้ใช้ทั้งหมด {countUser} คน</div>
      {JSON.stringify(users)}
        { (users.length > 0) && users.map((item)=> {
           return <p key={item.id}>{item.fullname}</p>
        })}
    </main>
  );
}