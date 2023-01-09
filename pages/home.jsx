import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const home = ({data,data2}) => {

    

 
  return (
    <div style={{display:"grid", gridTemplateColumns:"30% 65%",gap:"5px",gridTemplateRows:"100vh"}}>
        <div style={{border:"1px dashed red"}}>
           <div align="center"><img src={data.avatar_url} width="200px" height="auto" style={{borderRadius:"50%"}}/>
    </div>     <h1 align="center">{data.name}</h1>
         <h1 >Tech Stacks</h1>
        <div align="center">{data.bio}</div> 
         <br/>
        <Link  href="https://drive.google.com/file/d/1xMMFWpietjNymM1NeB3wafLPa4iBI9q3/view?usp=sharing" target="_blank"><button style={{backgroundColor:"green"}}>Resume</button></Link> <Link  href="https://github.com/sushantshekhar82" target="_blank"> <button style={{backgroundColor:"green"}}>Follow</button></Link>
        </div>
        <div>
            <h1 align="center">Projects</h1>
            <div style={{display:"grid",gridTemplateColumns:"40% 40%",gap:"10px" }}>
            {
                data2.map((e)=>(
               <Link key={e.id} style={{textDecoration:"none"}}  href={e.html_url} target="_blank"><div key={e.id} style={{width:"350px",height:"auto",border:"1px solid gray"}}>
                <h2 style={{color:"black"}}>{e.name}</h2>
                <h6 style={{color:"gray"}}>{e.full_name}</h6>
                <p>Fork count :{e.forks_count}</p>
                <p>Star count :{e.score}</p>
                <h3>{e.language}</h3>
                </div></Link> 
                ))
            }
            </div>
        </div>
     
    </div>
  )
}

export async function getServerSideProps() {
    let res=await fetch("https://api.github.com/users/sushantshekhar82")
   let  d=await res.json()
   let res2=await fetch("https://api.github.com/search/repositories?q=user:sushantshekhar82+fork:true&sort=updated&per_page=10&type=Repositories")
   let  d2=await res2.json()
    return {
      props: {
        data:d,
        data2:d2.items
      }, // will be passed to the page component as props
    }
  }

 


export default home