import React, { useContext,useState } from 'react'
import { FormContext } from '../../Context/FormContext'
import { StepContext } from '../../Context/StepContext'
import { useForm } from "react-hook-form";
import {motion} from "framer-motion"
import './Sideform.css'

export const Sideform = () => {
  const [step,updateStep] = useContext(StepContext)
  const [Form,updateForm] = useContext(FormContext)
//to set default values to named registered input field

  const errorStyle ={borderColor:"red"};

  const required = (<div className='error-required'> This field is required </div>)
  const error = {email:(<div className='error'> Enter valid email id </div>),name:(<div className='error'> Enter valid name </div>),phone:(<div className='error'> Enter valid phone number </div>)}
  
  //Form State
  const [name,updateName] = useState(Form.name);
  const [phone,updatePhone] = useState(Form.phone);
  const [mail,updateMail] = useState(Form.mail);

  const { handleSubmit, register, formState: { errors } } = useForm({defaultValues:{email:mail,name:name,phone:phone}}); 

  const nextStep = ()=>{
    console.log(mail);
    updateForm({name:name,mail:mail,phone:phone})
    updateStep(prevState => ++prevState);
  }


  return (
    <> 
    <motion.div animate={{opacity:1}} transition={{delay:0.2}} initial={{opacity:0}} exit={{opacity:0}}>
      <div>
        <div className='heading'>Personal info</div>
        <div className='sub-heading'>Please provide your name,email address, and phone number.</div>
      </div>
            <form className='main-form' id='sideform' onSubmit={handleSubmit(nextStep)}>
                <div className='form-sub-heading'>Name {errors.name && errors.name.message}</div>
                <input type="text" style={errors.name && errorStyle} className='input' placeholder="eg. Abhinav M M" {...register("name", {
                  required: required,
                  pattern: {
                    value: /^[A-Za-z ]{1,32}$/i,
                    message: error.name
                  },
                  onChange:(e)=>{updateName(e.target.value)}, 
                })}></input>
                <div className='form-sub-heading' >Email address {errors.email && errors.email.message}</div>
                <input type="text" style={errors.email && errorStyle} className='input' placeholder="eg. abhinavmohanan17@gmail.com" defaultValue={mail} {...register("email", {
                  required: required,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: error.email
                  },
                  onChange: (e)=>{updateMail(e.target.value)}
                })}/>
                <div className='form-sub-heading'>Phone number {errors.phone && errors.phone.message}</div>
                <input type="text" style={errors.phone && errorStyle} className='input' placeholder="eg. +91 987654345" value={phone} {...register("phone", {
                  required: required,
                  pattern: {
                    value: /^[0-9+ ]{10,14}$/i,
                    message: error.phone
                  },
                  onChange: (e)=>{updatePhone(e.target.value)},
                })}></input>
            </form>
    </motion.div>
            <input type="submit" className='submit-button' value="Next step" form='sideform'></input>
  </>
    

  )
}
