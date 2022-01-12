import {React,useEffect} from 'react'
import jwt from 'jsonwebtoken'
import {useHistory}  from "react-router-dom"

const Dashboard = ()=> {
  useEffect(()=>{
       const populateQuote

      const history=useHistory()
      const token=localStorage.getItem('token')
      if(token){
          const user=jwt.decode(token)
          console.log(user)
          if(!user){
              localStorage.removeItem('token')
              history.replace('/login')
          }else{

          }
      }
  }, [])
    return (
        <div> 
            <h2>hello user</h2>
        </div>
    )
}


export default Dashboard
