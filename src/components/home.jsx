import axios from 'axios'
import {React,useEffect,useState} from 'react'
import './style.css'

 const Home = () => {
     const [data,setdata]=useState([])
     const [ud,setud]=useState([])
    useEffect(async () => {
        await axios.get('http://localhost:5000/api/all').then((res)=>{
         setdata(res.data)
        const it= localStorage.getItem('userdata')
        const datas=JSON.parse(it)
        setud([...ud,datas])
        }).catch((e)=>{
          alert(e)
        })
       }, [])
       console.log(ud);
    return (
        <div>
            {data.map((use)=>{
                return(
                    <div className='con' key={use._id}>
                    <h1 >{use.username}</h1>
                     <h2>{use.email}</h2>
                     {ud.map((a)=>{
                      return(
                          <>
                          {a.user._id === use._id?`delete`:` `}</>
                      )
                     })}
                    </div>
             
                )
            })}
        </div>
    )
}

export default Home