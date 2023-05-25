import React, { useState } from 'react'
import './App.css'
import DashBase from './components/dashBase/dashBase'
import Products from './components/products/products'
import Categories from './components/categories/categories'
import {Title, TabList, Tab } from "@tremor/react"

const component = (selectedView) => {
  switch (selectedView) {
    case 1: return <DashBase />
    case 2: return <Products />
    case 3: return <Categories />
    default:
      return <p> Cual</p>
  }
}

function App() {
  const [value, setValue] = useState(1);


  return (
    
    <div className='bg-slate-200 p-6 sm:p-10'>
      <Title>IBikes</Title>
      <TabList value={value} onValueChange={setValue} marginTop="mt-6">
        <Tab value={1} text="Principal" />
        <Tab value={2} text="Productos" />
        <Tab value={3} text="Detalles" />
      </TabList>

      {component(value)}

      

    </div>
  )
}

export default App
