import React from 'react'
import sidebar_img from '../../assets/images/bg-sidebar-desktop.svg' 
import './Sidebar.css'

const pressed = ()=>{
  console.log("pRESSED");
}

export const Sidebar = (props) => {
  const style = [];
  style[props.step] = {
    backgroundColor: "hsl(206, 94%, 87%)",
    color:"black",}

  return (
    <>
        <div className='sidebar'>
            <img src={sidebar_img} alt='Sidebar'></img>
            <div className='side-list'>
                <ul>
                  <div className='list-item'>
                    <button className='circular' onClick={pressed()} style={style[0]}>
                      1
                    </button>
                    <li>
                      <div className='side-menu-heading'>STEP 1</div>
                      <div className='side-menu-info'>YOUR INFO</div>
                    </li>
                  </div>  
                  <div className='list-item'>
                    <button className='circular' style={style[1]}>
                      2
                    </button>
                    <li>
                      <div className='side-menu-heading'>STEP 2</div>
                      <div className='side-menu-info'>SELECT PLAN</div>
                    </li>
                  </div>  
                  <div className='list-item'>
                    <button className='circular' style={style[2]}>
                      3
                    </button>
                    <li>
                      <div className='side-menu-heading'>STEP 3</div>
                      <div className='side-menu-info'>ADD-ONS</div>
                    </li>
                  </div>  
                  <div className='list-item'>
                    <button className='circular' style={style[3]}>
                      4
                    </button>
                    <li>
                      <div className='side-menu-heading'>STEP 4</div>
                      <div className='side-menu-info'>SUMMARY</div>
                    </li>
                  </div>  
                  
                </ul>
            </div>
        </div>
    </>
  )
}
