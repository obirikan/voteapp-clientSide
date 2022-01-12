import {React,useEffect,useState} from "react";
import axios from 'axios'

const Register=()=>{
    const [username,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
 
    const registeruser=async (e)=>{
        e.preventDefault()
     await  axios.post('http://localhost:5000/api/register',{
        username:username,
        email:email,
        password:password,
    },{
        headers: {
        'Content-Type': 'application/json',
        }
    }).then((res)=>{
            
            alert('registered sucessfully')
        }).catch((err)=>{
            alert(err)
        })
    }
    return(
       
       <div>
           <h2>register</h2>
           <form onSubmit={registeruser}>
               <input 
               type="text" 
               value={username} 
               placeholder="name" 
               onChange={(e)=>setName(e.target.value)}
               />
               <br /><br />
               <input 
               type="email" 
               value={email} 
               placeholder="email"
               onChange={(e)=>setEmail(e.target.value)}
                />
                 <br /><br />
               <input 
               type="password" 
               value={password} 
               placeholder="password"
               onChange={(e)=>setPassword(e.target.value)}
               />
               <br /><br />
               <input type="submit"  value="register"/>
           </form>
       </div>
    )
}
     

export default Register