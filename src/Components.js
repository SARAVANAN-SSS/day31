import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Edit from './table/Edit'
import Input from './table/Input'
import Table from './table/Table'
import View from './table/View'

function Components() {
  return (
    <div>
        <Header />
        <div className='mainbody'>
        <Routes>
            <Route path='/' element={<Table />} />
            <Route path='/addinput' element={<Input />} />
            <Route path={`/view/:id`} element={<View />} />
            <Route path={`/edit/:id`} element={<Edit />} />
        </Routes>
        </div>
    </div>
  )
}

export default Components