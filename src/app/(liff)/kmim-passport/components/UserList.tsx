// import React from 'react'

import { fetchUser } from "@/utils/actions"

const UserList = async () => {
  
  const users = await fetchUser();
  console.log(users)
  
  return (
    <div>
        {
            users.map((item, index) => {
                    return <li key={index}>{item.fullname}</li>
            })
        }
    </div>
  )
}

export default UserList