import React, { useState } from 'react'
import './Home.css'
import { Header } from '../../components/header/Header.jsx'
import { ExploreMenu } from '../../components/exploreMenu/ExploreMenu.jsx'
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay.jsx'
import { AppDownload } from '../../components/AppDownload/AppDownload.jsx'
export const Home = () => {

    const [category,setCategory]=useState('All')
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}
