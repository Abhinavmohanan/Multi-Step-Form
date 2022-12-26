import React, { useContext } from 'react'
import { PlanContext } from '../../Context/PlanContext';
import { StepContext } from '../../Context/StepContext';
import {motion} from "framer-motion"
import './Summary.css'

export const Summary = () => {
    const [,updateStep] = useContext(StepContext)
    const [plan,] = useContext(PlanContext)
    var sum = plan.toggle? plan.selectedPlan.cost*10: plan.selectedPlan.cost;

    const nextStep = ()=>{
      updateStep(prevState => ++prevState);
    }

    const prevStep = ()=>{
        updateStep(prevState => --prevState);
      }

    const onChangeStep = () =>{
        updateStep(1);
    }  

    const getaddons = () =>{
        // eslint-disable-next-line array-callback-return
        return (plan.addons.map((addon)=>{
            if(addon != null){
            const price = plan.toggle? addon.price*10 : addon.price
            sum += price;
            return (<div className='summary-item'>
                <div className='summary-heading'>
                    {addon.name}
                </div>
                <div className='summary-price'>
                    +${plan.toggle? price + "/yr" : price + "/mo"}
                </div>
        </div>)}}))
    } 

  return (
    <>
    <motion.div animate={{opacity:1}} transition={{delay:0.2}} initial={{opacity:0}} exit={{opacity:0}}>
    <div>
        <div className='heading'>Finishing up</div>
        <div className='sub-heading'>Double-check everything looks OK before confirming</div>
    </div>
    <div className='main-summary'>
        <div className='summary-item'>
                <div className='summary-heading'>
                    <div id="plan-summary">{plan.selectedPlan.name} ({plan.toggle ? "Yearly" : "Monthly"}) </div>
                    <div className="change" onClick={onChangeStep}>Change</div>
                </div>
                <div className='summary-price' id="plan-pricing">
                    ${plan.toggle? (plan.selectedPlan.cost * 10)+ "/yr": (plan.selectedPlan.cost) + "/mo"}
                </div>
        </div>
        <hr/>
        {getaddons()}
        {(plan.addons[0] == null && plan.addons[1] == null && plan.addons[2] == null)? null:<hr/> }
        <div className='summary-item'>
                <div className='summary-heading'>
                    Total(per {plan.toggle? "year":"month"})
                </div>
                <div id="total-price">
                    +${sum}/{plan.toggle? "yr":"mo"}
                </div>
        </div>
    </div>
    </motion.div>
    <div className='buttons'>
        <input type="submit" className='back-button' value="Go back" onClick={prevStep}></input>
        <input type="submit" className='submit-button' value="Confirm"  onClick={nextStep}></input>
    </div>
</>
  )
}
