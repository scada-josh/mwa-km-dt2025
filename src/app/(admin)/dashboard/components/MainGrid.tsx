'use client'

import { fetcher } from '@/app/services/http-service';
import { statCardProps } from '@/types/dashboard';
import React from 'react'
import { io } from 'socket.io-client';
import useSWR from 'swr';

function MainGrid() {
  // const statsArray: statCardProps[] = [];

  // const statsArray: statCardProps[] = [{
  //     title: 'Customers',
  //     value: '300',
  //     interval: 'total',
  //     trend: 'neutral',
  //     data: [300]
  // }];

  const socketClient = io(process.env.API_DOMAIN);
  // const socketClient = io('http://localhost:3000');

  const {data, isLoading} = useSWR('/api/dashboard', fetcher, {
    revalidateOnFocus: false,
  });

  const [statsArray, setStatsArray] = React.useState <statCardProps[]>([]);

  // เขียน useEffect() เพื่อรับข้อมูล Realtime จาก Server
  React.useEffect(() => {
    socketClient.on('updateDashboard', (arg) => {
      // console.log('updateDashboard event: ', arg);
      setStatsArray((prevState:statCardProps[])=> {
        return prevState.map((item) => {
          if(item.title === 'จำนวนลูกค้า') {
            return {...item, data: arg?.countCustomer.toString() || 'Loading...'}
          } else if(item.title == 'จำนวนฟิล์ม') {
            return {...item, data: arg?.countFilm.toString() || 'Loading...'}
          }

          return item;
        })
      })
    });

    return () => {
      socketClient.off('updateDashboard');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  React.useEffect(() => {

    if(data) {
      setStatsArray([
        {
          title: 'จำนวนลูกค้า',
          value: data?.countCustomer.toString() || 'Loading...',
          interval: 'total',
          trend: 'up',
          data: [data?.countCustomer]
        },
        {
          title: 'จำนวนฟิล์ม',
          value: data?.countFilm.toString() || 'Loading...',
          interval: 'total',
          trend: 'up',
          data: [data?.countFilm]
        }
      ]);
    }

  }, [data])

  if(isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }


  return (
    <>
      <div className="grid grid-cols-3 gap-4">

        { data && statsArray.map((card, index) => (
          <div key={index} className="max-w-sm rounded-2xl shadow-md bg-white p-6 border border-gray-200">
            <div className="text-gray-500 text-sm font-medium mb-1">
              {card.title}
            </div>
            <div className="text-3xl font-bold text-gray-800">฿{card.data}</div>
          </div>
        ))}

        {/* <div className="max-w-sm rounded-2xl shadow-md bg-white p-6 border border-gray-200">
          <div className="text-gray-500 text-sm font-medium mb-1">
            จำนวนลูกค้า
          </div>
          <div className="text-3xl font-bold text-gray-800">฿123,456</div>
        </div>

        <div className="max-w-sm rounded-2xl shadow-md bg-white p-6 border border-gray-200">
          <div className="text-gray-500 text-sm font-medium mb-1">
            จำนวนฟิล์ม
          </div>
          <div className="text-3xl font-bold text-gray-800">฿123,456</div>
        </div> */}

      </div>
    </>
  );
}

export default MainGrid