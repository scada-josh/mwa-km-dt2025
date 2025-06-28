'use client'

import { fetcher } from '@/app/services/http-service';
import type { categoryProps } from '@/types/dashboard';
import React from 'react'
import useSWR from 'swr';

function PageViewBarChart() {

  const {data} = useSWR<categoryProps[]>('/api/dashboard/chart', fetcher, {
    revalidateOnFocus: false,
  });

//   const {data} = useSWR('/api/dashboard/chart', fetcher, {
//     revalidateOnFocus: false,
//   });
  

  const [xArray, setXArray] =  React.useState<string[]>([]); // category
  const [yArray, setYArray] =  React.useState<number[]>([]); // totalsales

  React.useEffect(() => {
    if(data) {
        // console.log(data);
        // const categoryData = data.map((item, index) => ()


        // const categoryData = data.map((item) => {
        //     // console.log(item)
        // });

        const categoryData = data.map((item) => (
            item.category
        ));

        const totalSalesData = data.map((item) => (
             (parseFloat(item.totalSales))
        ));

        setXArray(categoryData); // ['Sports', 'Sci-fi']
        setYArray(totalSalesData); // [5341.21, 546.98]

        // console.log(xArray)
        // console.log(yArray)

    }
  }, [data])


  return (
    <>
      <div>PageViewBarChart</div>
      
      <div className="grid grid-cols-2 gap-x-8 p-4">
        <ul className="space-y-2">
          {xArray.map((item, index) => (
            <li key={index} className="text-gray-800">
              • {item}
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {yArray.map((item, index) => (
            <li key={index} className="text-gray-800">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PageViewBarChart