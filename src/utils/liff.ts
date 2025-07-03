import liff from '@line/liff';

export const initLIFF = async () => {
  try {
    await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! });
    console.log('LIFF initialized');
  } catch (error) {
    console.error('LIFF initialization failed', error);
  }
};
