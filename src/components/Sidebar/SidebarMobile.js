import React from 'react'
import sidebar_img from '../../assets/images/bg-sidebar-mobile.svg'
import './SidebarMobile.css'

export const SidebarMobile = (props) => {
  const style = [];
  style[props.step] = {
    backgroundColor: "hsl(206, 94%, 87%)",
    color:"black",}
  return (
    <>
        <div className='stepList'>
          <div className='circularItem' style={style[0]}>1</div>
          <div className='circularItem' style={style[1]}>2</div>
          <div className='circularItem' style={style[2]}>3</div>
          <div className='circularItem' style={style[3]}>4</div>
        </div>
        <img src={sidebar_img} alt="sidebarimg" className='sidebarimg'/>
    </>
  )
}
