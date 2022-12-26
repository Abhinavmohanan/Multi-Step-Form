import './App.css';
import { MainForm } from './components/Form/MainForm';
import { StepProvider } from './Context/StepContext';
import { FormProvider } from './Context/FormContext';
import { PlanProvider } from './Context/PlanContext';

function App() {
  return (
    <>
    <StepProvider>
      <FormProvider>
        <PlanProvider>
        <MainForm/>
        </PlanProvider>
      </FormProvider>
    </StepProvider>  
    </>
  );
}

export default App;
