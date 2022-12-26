import React, { useContext } from 'react'
import { PlanContext } from '../../Context/PlanContext'
import { StepContext } from '../../Context/StepContext'
import {motion} from "framer-motion"
import './Addons.css'

export const Addons = () => {

    const [,updateStep] = useContext(StepContext)
    const [plan,updatePlan] = useContext(PlanContext)

    const nextStep = ()=>{
      plan.addons = selectedAddons  
      updatePlan(plan)
      updateStep(prevState => ++prevState);
    }

    const prevStep = ()=>{
        updateStep(prevState => --prevState);
      }

    const addons = [{name:"Online Service",price:1},{name:"Large Storage",price:2},{name:"Customizable Profile",price:1}];
    
    const selectedAddons = plan.addons

    const updateList = (e) =>{
            console.log(e.target.id)
            const index = parseInt(e.target.id)
            if(e.target.checked){
                selectedAddons[index] = addons[index]
            }
            else{
                selectedAddons[index] = null;
            }
    }
        
    return (
        <>
        <motion.div animate={{opacity:1}} transition={{delay:0.2}} initial={{opacity:0}} exit={{opacity:0}}>
        <div>
            <div className='heading'>Pick add-ons</div>
            <div className='sub-heading'>Add-ons help enhance your gaming experience</div>
        </div>
        <div className='addons-container'>
            <form className='main-addons'>
                    <label className='addon-item'>
                        <div  className='addon-info'>
                            <div><input type="checkbox" className='addon-checkbox' id="0" onChange={updateList} defaultChecked={selectedAddons[0] ? true:false}/></div>
                            <div>
                                <div className='addon-name'>Online Service</div>
                                <div className='addon-desc'>Access to multiplayer games</div>
                            </div>
                        </div>
                        <div className='addon-price'>+$1/mo</div>
                    </label>
                    <label className='addon-item'>
                        <div className='addon-info'>
                            <div><input type="checkbox" className='addon-checkbox' id="1" onChange={updateList} defaultChecked={selectedAddons[1] ? true:false}/></div>
                            <div>
                                <div className='addon-name'>Large storage</div>
                                <div className='addon-desc'>Extra 1TB of cloud save</div>
                            </div>
                        </div>    
                        <div className='addon-price'>+$2/mo</div>
                    </label>
                    <label className='addon-item'>
                        <div className='addon-info'>
                            <div><input type="checkbox" className='addon-checkbox' id="2" onChange={updateList} defaultChecked={selectedAddons[2] ? true:false}/></div>
                            <div>
                                <div className='addon-name'>Customizable Profile</div>
                                <div className='addon-desc'>Custom theme on your profile</div>
                            </div>
                        </div>
                        <div className='addon-price'>+$1/mo</div>
                    </label>
            </form>
        </div>
        </motion.div>
        <div className='buttons'>
            <input type="submit" className='back-button' value="Go back" onClick={prevStep}></input>
            <input type="submit" className='submit-button' value="Next step" onClick={nextStep}></input>
        </div>
    </>
    )
}
