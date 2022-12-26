import React, { useContext } from 'react'
import './Plans.css'
import arcadeIcon from '../../assets/images/icon-arcade.svg'
import advancedIcon from '../../assets/images/icon-advanced.svg'
import proIcon from '../../assets/images/icon-pro.svg'
import { ToggleIcon } from './ToggleIcon/ToggleIcon'
import { StepContext } from '../../Context/StepContext'
import { PlanContext } from '../../Context/PlanContext'
import {motion} from "framer-motion"

export const Plans = () => {
    const [,updateStep] = useContext(StepContext)
    const [plan,updatePlan] = useContext(PlanContext)

    const Plans = [{id:0,name:"Arcade",price:9},{id:1,name:"Advanced",price:12},{id:2,name:"Pro",price:15}]

    const selectedBox = []
    selectedBox[plan.selectedPlan.id] = {border:"1px solid hsl(243, 100%, 62%)",}
    const nextStep = ()=>{
      updateStep(prevState => ++prevState);
    }

    const prevStep = ()=>{
        updateStep(prevState => --prevState);
      }

    const updateBoxSelection =(e)=>{
        updatePlan({toggle:plan.toggle,selectedPlan:{id:e.id,name:e.name,cost:e.price},addons:plan.addons})
    }


  return (
<>
<motion.div animate={{opacity:1}} transition={{delay:0.2}} initial={{opacity:0}} exit={{opacity:0}}>
    <div>
    <div className='heading'>Select your plan</div>
    <div className='sub-heading'>You have option of monthly or yearly billing</div>
    </div>
    <div className='plan-container'>
    <div className='main-plans'>
            <div className='plan-item' style={selectedBox[0]} onClick = {()=>{updateBoxSelection(Plans[0])}}>
                <img src={arcadeIcon} className='plan-icon' alt='arcadeIcon'></img>
                <div className='plan-info'>
                    <div className='plan-name'>{Plans[0].name}</div>
                    <div className='plan-price'>${Plans[0].price}{plan.toggle && 0}/{!plan.toggle ? "mo":"yr"}</div>
                    {plan.toggle && (<div className='plan-yearly'>2 months free</div>)}
                </div>
            </div>
            <div className='plan-item' style={selectedBox[1]} onClick = {()=>{updateBoxSelection(Plans[1])}}>
                <img src={advancedIcon} className='plan-icon' alt='advancedIcon'></img>
                <div className='plan-info'>
                    <div className='plan-name'>{Plans[1].name}</div>
                    <div className='plan-price'>${Plans[1].price}{plan.toggle && 0}/{!plan.toggle ? "mo":"yr"}</div>
                    {plan.toggle && (<div className='plan-yearly'>2 months free</div>)}
                </div>
            </div>
            <div className='plan-item' style={selectedBox[2]} onClick = {()=>{updateBoxSelection(Plans[2])}}>
                <img src={proIcon} className='plan-icon' alt='proIcon'></img>
                <div className='plan-info'>
                    <div className='plan-name'>{Plans[2].name}</div>
                    <div className='plan-price'>${Plans[2].price}{plan.toggle && 0}/{!plan.toggle ? "mo":"yr"}</div>
                    {plan.toggle && (<div className='plan-yearly'>2 months free</div>)}
                </div>
            </div>
   </div>
   <div className='toggle-plan'>
                <div className='toggle-item'>
                    Monthly
                </div>
                <div>
                    <ToggleIcon/>
                </div>
                <div className='toggle-item'>
                    Yearly
                </div>
    </div>
    </div>
</motion.div>
    <div className='buttons'>
        <input type="submit" className='back-button' value="Go back" onClick={prevStep}></input>
        <input type="submit" className='submit-button' value="Next step" onClick={nextStep}></input>
    </div>
</>
  )
}
