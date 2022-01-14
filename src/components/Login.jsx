import {useState} from "react";
import axios from 'axios'

const Login=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
 
    const loginuser=async (e)=>{
        e.preventDefault()
        await  axios.post('http://localhost:5000/api/login',{
           email:email,
           password:password,
       },{
           headers: {
           'Content-Type': 'application/json',
           }
       }).then((res)=>{      
            if(res.data){
                alert('login sucessfully')
                window.location.href='/dashboard'
                localStorage.setItem('userdata',JSON.stringify(res.data))
               }else{
                alert('check ur username or password')
                window.location.href='/dashboard'
               }
           }).catch((err)=>{
               alert(err)
        })
    }
    return(
       <div>
           <h2>login</h2>
           <form onSubmit={loginuser}>
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
               <input type="submit"  value="login"/>
           </form>
       </div>
    )
}
     

export default Login