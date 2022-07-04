import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function View() {
    const nav = useNavigate()
    const {id} = useParams()
    const [data,setdata] = useState({
        id:"",
        student:"",
        teacher:""
    })

    useEffect(()=>{
        getdata()
    },[])

    const getdata = async () => {
        let response = await axios.get(`https://623fff530adaf66ad7494807.mockapi.io/axios/${id}`)
        setdata(response.data)
    }
  return (
    <div className='view'>
        <h1>ID of the Student : {data.id}</h1>
        <h1>Name of the Student : {data.student}</h1>
        <h1>Name of the Teacher : {data.teacher}</h1>
        <button onClick={()=>nav("/")}>Go Back</button>
    </div>
  )
}

export default View