
// 🧪 ตัวอย่าง 1: จำลองการเรียกฐานข้อมูลแบบ async
export async function countCustomerService(): Promise<number> {
    // simulate async delay, เช่น DB query หรือ external API call
    return new Promise((resolve) => {
        setTimeout(() => resolve(Math.floor(Math.random() * 10)), 100); // return 2 หลังจาก 100ms
    });
}


// 🧪 ตัวอย่าง 2: ใช้ await กับ Promise จริง (สั้น)
export async function countFilmService(): Promise<number> {
    const filmCount = await Promise.resolve(Math.floor(Math.random() * 100));
    return filmCount;
}

// call mysql view
export async function getSaleByFilmCategoryService() {
    const filmCategoryCount = await Promise.resolve(Math.floor(Math.random() * 100));
    return filmCategoryCount;
}