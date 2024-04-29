/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { tabStandard } from "../utils/stepsTabs";

export const StepperContext = createContext({})

export const StepperProvider = ({children}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (e) => {
    e?.preventDefault()
    if (activeStep === tabStandard.length - 1) return;
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = (e) => {
    e?.preventDefault()
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <StepperContext.Provider value={{activeStep, setActiveStep, handleBack, handleNext}}>{children}</StepperContext.Provider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useStepper = () => {
  return useContext(StepperContext)
}