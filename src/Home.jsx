import React, { useEffect, useState } from 'react'

const Home = () => {
    const [user,setUser]=useState()
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('userdata')))
    },[])
  return (
    <div>
        <h1>Welcome {user?.name}</h1>

        <h3>email : {user?.email}</h3>

    </div>
  )
}

export default Home
