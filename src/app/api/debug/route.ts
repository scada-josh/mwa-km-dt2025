// app/api/debug/route.ts
export async function GET() {
  return Response.json({
    NODE_ENV: process.env.NODE_ENV,
    API_DOMAIN: process.env.API_DOMAIN,
    APP_NAME: process.env.APP_NAME,
    NEXT_PUBLIC_LIFF_ID: process.env.NEXT_PUBLIC_LIFF_ID,
    DATABASE_URL:process.env.DATABASE_URL
  })
}
