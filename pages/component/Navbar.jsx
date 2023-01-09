import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{width:"100%",height:"30px",backgroundColor:"skyblue",position:"sticky",top:"0",display:"flex",gap:"10px",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"25px"}}>
   <Link style={{textDecoration:"none"}} href="/">Home</Link>
   <Link style={{textDecoration:"none"}} href="/home">Sushant Shekhar</Link> 
   <Link style={{textDecoration:"none"}} href="/projects">Projects</Link>  
  

    </div>
  )
}

export default Navbar