import React, { useContext } from 'react'
import './ToggleIcon.css'
import { useState } from 'react'
import { PlanContext } from '../../../Context/PlanContext'

export const ToggleIcon = () => {
  const [plan,updatePlan] = useContext(PlanContext)

  return (
    <>
        <input type="checkbox" id="togglebox" defaultChecked={plan.toggle? true:false}/>
        <label className='toggle' for="togglebox" onClick={()=>{updatePlan({toggle:!plan.toggle,selectedPlan:plan.selectedPlan,addons:plan.addons})}}>
          <div className='span'></div>
        </label>
    </>
  )
}
