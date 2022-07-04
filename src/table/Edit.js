import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const nav = useNavigate()
    const {id} = useParams()
    const [list,setlist] = useState({
        student:"",
        teacher:""
    })

    useEffect(()=>{
        getdata()
    },[])

    const getdata = async () => {
        let response = await axios.get(`https://623fff530adaf66ad7494807.mockapi.io/axios/${id}`)
        setlist({
            student:response.data.student,
            teacher:response.data.teacher
        })
    }
    const handlechange = (e) => {
        e.preventDefault()
        setlist({...list,[e.target.name]:e.target.value})
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        let response = await axios.put(`https://623fff530adaf66ad7494807.mockapi.io/axios/${id}`,list)
        nav("/")
    }
  return (
    <div>
        <div>
        <form  onSubmit={handlesubmit} className="editform">
            <input type={"tetx"} placeholder="Enter Student Name" value={list.student} onChange={handlechange} name="student" required="required"/>
            <br />
            <br />
            <input type={"tetx"} placeholder="Enter Student Name" value={list.teacher} onChange={handlechange} name="teacher" required="required"/>
            <br />
            <br />
            <button>Save</button>
        </form>
    </div>
    </div>
  )
}

export default Edit