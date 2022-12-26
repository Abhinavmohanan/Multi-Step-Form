import React ,{useState,createContext} from 'react'

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [Form,updateForm] = useState({name:'',mail:'',phone:''});

  return (
    <FormContext.Provider value={[Form,updateForm]}>
      {props.children}
    </FormContext.Provider>
  )
}