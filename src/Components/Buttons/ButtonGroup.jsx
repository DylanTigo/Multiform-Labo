/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useStepper } from "../../Context/StepperContect";

export default function ButtonGroup() {
  const {handleNext, handleBack} = useStepper()
  return (
    <div className="flex justify-center gap-4 mt-auto text-sm">
      <button onClick={handleBack} type="submit" className="btn min-w-40 group toleft">
        <ArrowLeft className="group-hover:-translate-x-1" /> Previous Step 
      </button>
      <button onClick={handleNext} type="submit" className="btn min-w-40 group toRight">
        Next Step <ArrowRight className="group-hover:translate-x-1" />
      </button>
    </div>
  );
}
