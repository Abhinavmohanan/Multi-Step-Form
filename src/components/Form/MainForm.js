import React,{useContext} from 'react'
import { StepContext } from '../../Context/StepContext'
import { Addons } from '../Addons/Addons'
import { Confirm } from '../Confirm/Confirm'
import { Plans } from '../Plans/Plans'
import { Sidebar } from '../Sidebar/Sidebar'
import { SidebarMobile } from '../Sidebar/SidebarMobile'
import {Sideform} from '../Sideform/Sideform'
import { Summary } from '../Summary/Summary'
import './MainForm.css'

export const MainForm = () => {
  const [step,] = useContext(StepContext);
  const steps = [<Sideform />,<Plans/>,<Addons/>,<Summary/>,<Confirm/>]
  return (
    <>
            <div className='container'>
                <div className='mobile-sidebar'><SidebarMobile step={step}/></div>
                <div className='form-outer'>
                    <Sidebar step={step} className="sidebar"/>
                    <div className='sideform'>
                        {steps[step]}
                    </div>
                </div>
            </div>
    </>
  )
}
