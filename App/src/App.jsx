import React, { useState } from 'react'
import './App.css'
import DashBase from './components/dashBase/dashBase'
import Products from './components/products/products'
import Categories from './components/categories/categories'
import { Card, Metric, Text, Title, TabList, Tab } from "@tremor/react"

const component = (selectedView) => {
  console.log(selectedView);
  switch (selectedView) {
    case 1: return <DashBase />
    case 2: return <Products />
    case 3: return <Categories />
    default:
      return <p> Cual</p>
  }
}

function App() {
  const [value, setValue] = useState(null);

  
  return (
    <div className='bg-slate-200 p-6 sm:p-10'>
      <Title>IBikes</Title>
      <TabList value={value} onValueChange={setValue}  marginTop="mt-6">
        <Tab value={1} text="Principal"/>
        <Tab value={2} text="Productos"/>
        <Tab value={3} text="Detalles"/>
      </TabList>
        
{component(value)}
{/*       {selectedView === 1 ? (
        <>
          <DashBase />
        </>
      ) : (
        <>
          <Products />
        </>
      )
      } */}

    </div>

  )
}

export default App
