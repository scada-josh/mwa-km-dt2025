import { countCustomerService, countFilmService } from '@/app/services/dashboard-service';
import { categpruProps } from '@/types/dashboare';
import { NextResponse } from 'next/server';


// // http://localhost:3000/api/dashboard
// export function GET() {
//   return NextResponse.json({
//     message: 'Next.js API v1.0.0 running...'
//   })
// }


// // ใน Next.js API route http://localhost:3000/api/dashboard
// export async function GET() {
//     const count = await countFilmService();
//     return Response.json({ totalFilms: count });
// }

// // Refactoring# 1
// // ใน Next.js API route http://localhost:3000/api/dashboard
// export async function GET() {
//   const countCustomer = await countCustomerService();
//   const countFilm = await countFilmService();

//   return NextResponse.json({
//     countCustomer,
//     countFilm
//   })
// }

// // Refactoring# 2
// // ใน Next.js API route http://localhost:3000/api/dashboard
// export async function GET() {
//   const countCustomerFn = countCustomerService();
//   const countFilmFn = countFilmService();

//   // init request in parallel
//   const count = await Promise.all([countCustomerFn, countFilmFn])

//   return NextResponse.json({
//     countCustomer: count[0],
//     countFilm: count[1]
//   })
// }


// Refactoring# 3
// ใน Next.js API route http://localhost:3000/api/dashboard
export async function GET() {

  const data: categpruProps = [{
    "category": "Sports",
    "totalSales": "375.83"
  },{
    "category": "Sci-Fi",
    "totalSales": "437.83"
  },{
    "category": "Animation",
    "totalSales": "475.83"
  },{
      "category": "Action",
      "totalSales": "45.833"
    }]

  return NextResponse.json(data)
}