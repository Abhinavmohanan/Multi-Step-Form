import React ,{useState,createContext} from 'react'

export const PlanContext = createContext();

export const PlanProvider = (props) => {
  const [Plan,updatePlan] = useState({toggle:false,selectedPlan:{id:0,name:'Arcade',cost:9},addons:[null,null,null]});

  return (
    <PlanContext.Provider value={[Plan,updatePlan]}>
      {props.children}
    </PlanContext.Provider>
  )
}