import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
<h1>Explore our menu</h1>
<p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque tempore temporibus illum fugit, inventore eius veniam deleniti iste officia odio obcaecati, sapiente expedita necessitatibus repellendus repellat? Obcaecati, totam aut!</p>
<div className="explore-menu-list">
    {menu_list.map((item,index)=>{
        return (
            <div 
            onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)}className="explore-menu-list-item" key={index}>
<img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
<p>{item.menu_name}</p>
            </div>
        )
    })}
</div>
<hr  style={{margin:'10px 0px ', height:'2px',backgroundColor:'#e2e2e2',border:'none'}}/>
    </div>
  )
}
