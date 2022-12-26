import React from 'react'
import "./Confirm.css"
import iconthankyou from "../../assets/images/icon-thank-you.svg"
import {motion} from "framer-motion"

export const Confirm = () => {
  return (
    <motion.div className='confirmed' animate={{opacity:1}} transition={{delay:0.2}} initial={{opacity:0}} exit={{opacity:0}}>
        <div><img src={iconthankyou} /></div>
        <div className='heading'>Thank you!</div>
        <div className='subheading'> Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </div>
    </motion.div>
  )
}
