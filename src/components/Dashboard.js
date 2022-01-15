
import axios from 'axios'
import {useEffect,useState} from 'react'
// import { removeAllListeners } from '../../../server/model/user'
// import {useHistory}  from "react-router-dom"

const Dashboard = ()=> {
 const [user,setuser]=useState([])
 
  useEffect(()=>{
    const token=localStorage.getItem('userdata')
    if(token){
        const data=JSON.parse(token)
        setuser([...user,data])
    }else{
        window.location.href='/register'
    }
   
  },[])
  
    return (
        <div> 
     {user.map((a)=>{
         return(
             <h1>hello {a.user.username}</h1>
             
     )})}
        </div>
    )
}


export default Dashboard
