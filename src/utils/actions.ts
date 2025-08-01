/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

// import { user } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { resolve } from "path";
import { upsertUser } from "./actions/user";
import { checkUserExist } from "./actions/checkUserExist";

import { checkQuiz } from "./actions/checkQuiz";
import { upsertQuiz } from "./actions/upsertQuiz";

import { checkRedeem } from "./actions/checkRedeem";
import { upsertRedeem } from "./actions/upsertRedeem";
import { insertLur } from "./actions/insertLur";
import { object } from "framer-motion/client";
import { LineProfile } from "./types/line";
import { checkBeacon } from "./actions/checkBeacon";
import { upsertBeaconBrodcast } from "./actions/upsertBeaconBrodcast";

export const createCamps = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setInterval(resolve, 1000));

  // const title = formData.get('title')
  // const location = formData.get('location')
  const rawData = Object.fromEntries(formData);
  console.log(rawData);
  // prisma.camp.create()
  // revalidatePath('/camp')
  // redirect('/')
  return "create camp success!!!";
};


export const fetchCamp = async () => {
  // prisma.camp.findMany({})
  const camps = [
    { id: 1, title: "โคราช" },
    { id: 2, title: "สระบุรี" },
    { id: 3, title: "นครนายก" },
  ];
  return camps;
};

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const registerUser = async(prevState: any,formData: FormData) => {

  // await new Promise((resolve) => setInterval(resolve, 5000));

  // const fullname = formData.get('fullname')
  // const userId = formData.get('userId')

  // console.log('Register User')
  // console.log(fullname)
  // console.log(userId)

  const rawData = Object.fromEntries(formData)
  console.log(rawData)
  console.log(rawData.userId)

  // revalidatePath('/kmim-passport')
  // redirect('/')


    const userId = formData.get('userId') as string;
    const fullName = formData.get('fullname') as string;

    // console.log(userId)
    // console.log(fullName)

  await upsertUser(userId, fullName);
  // revalidatePath('/kmim-passport')
  // window.location.reload();
  redirect('https://liff.line.me/1585440068-O4grBJW3')
  // revalidatePath('/register')

  return 'Register Success!!!!'

}

export const fetchUser = async() => {

  const users = [
    {id: 1, uid:123,  fullname: 'xxxx1'},
    {id: 2, uid:456,  fullname: 'xxxx2'},
    {id: 3, uid:789,  fullname: 'xxxx3'}
  ]

  return users

}

export async function handleFormRegister(prevState: any,formData: FormData) {
  const userId = formData.get('uid') as string;
  const fullName = formData.get('fullName') as string;

  await upsertUser(userId, fullName);
}

export const findUser = async(uid:any) => {

    const found = uid
    // console.log(uid)

    // const found = await findUser()
    return found
}


export async function handleCheckUserExist(userId: string) {

  return await checkUserExist(userId);
}

// ตรวจสอบการทำแบบทดสอบ Quiz
export async function handleCheckQuiz(userId: string) {

  return await checkQuiz(userId);
}

export async function handleSaveQuiz(userId: string) {

  await upsertQuiz(userId);

  redirect('https://liff.line.me/1585440068-MErl3jgz')

  // return 'success'
}

// ตรวจสอบการรับของรางวัล Redeem
export async function handleCheckRedeem(userId: string) {

  return await checkRedeem(userId);
}

export async function handleSaveRedeem(userId: string) {

  await upsertRedeem(userId);

   await delay(5000); 
  redirect('https://liff.line.me/1585440068-MErl3jgz')

  // return 'success'
}

export const reflectionLur = async(prevState: any,formData: FormData) => {

  // const uid = formData.get('userId')
  const rawData = Object.fromEntries(formData)
  console.log(rawData)
  console.log(rawData.userId)
  console.log(rawData.learn)

  // const userId = formData.get('userId')
  // const learn = formData.get('learn')
  // const unlearn = formData.get('unlearn')
  // const relearn = formData.get('relearn')

  await insertLur(rawData)
  // await insertLur(userId, learn, unlearn, relearn)

//   setTimeout(() => {
//   window.close();
// }, 800);
  // revalidatePath('/lur')
  redirect('https://liff.line.me/1585440068-bJqRVGxJ')

  await new Promise((resolve) => setInterval(resolve, 2000));
  // // await new Promise((resolve) => setInterval(resolve, 5000));

  // // const fullname = formData.get('fullname')
  // // const userId = formData.get('userId')

  // // console.log('Register User')
  // // console.log(fullname)
  // // console.log(userId)

  // const rawData = Object.fromEntries(formData)
  // console.log(rawData)
  // console.log(rawData.userId)

  // // revalidatePath('/kmim-passport')
  // // redirect('/')


  //   const userId = formData.get('userId') as string;
  //   const fullName = formData.get('fullname') as string;

  //   // console.log(userId)
  //   // console.log(fullName)

  //   await insertLur(userId, learn, unlearn, relearn)
  // // await upsertUser(userId, fullName);
  // // revalidatePath('/kmim-passport')
  // // window.location.reload();
  // redirect('https://liff.line.me/1585440068-O4grBJW3')
  // // revalidatePath('/register')

  return 'ขอบคุณสำหรับการสะท้อนการเรียนรู้ของคุณ!'

}

// ตรวจสอบการทำแบบทดสอบ Quiz
export async function handleCheckBeaconBrodcast(userId: string) {
  console.log("handleCheckBeaconBrodcast")
  return await checkBeacon(userId);
}

export async function handleSaveBeaconBrodcast(userId: string) {

  console.log("handleSaveBeaconBrodcast")
  await upsertBeaconBrodcast(userId);

  // return 'success'
}