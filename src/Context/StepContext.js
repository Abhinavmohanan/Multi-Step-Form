import React ,{useState,createContext} from 'react'

export const StepContext = createContext();

export const StepProvider = (props) => {
  const [step,updateStep] = useState(0);

  return (
    <StepContext.Provider value={[step,updateStep]}>
      {props.children}
    </StepContext.Provider>
  )
}