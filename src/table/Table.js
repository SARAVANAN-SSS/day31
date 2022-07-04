import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Table() {
    const [list,setlist] = useState([])

    useEffect(()=>{
        getdata()
    },[])

    const getdata = async () =>{
        let response = await axios.get("https://623fff530adaf66ad7494807.mockapi.io/axios")
        setlist(response.data)
    }

    const deletehandle = async (e,id) => {
        e.preventDefault()
        let response = await axios.delete(`https://623fff530adaf66ad7494807.mockapi.io/axios/${id}`)
        getdata()
    }
  return (
    <div>
        {
            list == "" ? <h1>No Data to Display</h1>
            :(
                <table className='table'>
                    <thead>
                        <tr>
                            <th>SL.NO</th>
                            <th>Student</th>
                            <th>Teacher</th>
                            <th colSpan={"3"}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.student}</td>
                                        <td>{item.teacher}</td>
                                        <td>
                                            <NavLink to={`/view/${item.id}`}><button className='viewbtn'>View</button></NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={`/edit/${item.id}`}><button className='editbtn'>Edit</button></NavLink>
                                        </td>
                                        <td>
                                            <button onClick={(e)=>deletehandle(e,item.id)} className="deletebtn">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )
        }
    </div>
  )
}

export default Table