/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import io from "../../../../../socket-io";
import { countCustomerService, countFilmService } from "@/app/services/dashboard-service";

export async function POST(request: NextRequest) {
  // const body = await request.json();

  const countCustomerFn = countCustomerService();
  const countFilmFn = countFilmService();

  // init request in parallel
  const [countCustomer, countFilm] = await Promise.all([countCustomerFn, countFilmFn])
  
    io?.emit("updateDashboard", {countCustomer, countFilm});

  try {
    // const result = await saveData(body);
    const result = 'เพิ่มข้อมูลลูกค้าสำเร็จ'
    return NextResponse.json({ message: "OK", result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}