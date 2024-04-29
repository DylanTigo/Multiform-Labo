import Stepper from "../Components/Stepper";
import StandardSequency from "./StandardSequency/StandardSequency";
import { StepperProvider } from "../Context/StepperContect";

export default function PrimePlate() {
  return (
    <StepperProvider>
      <div className="container min-w-[56rem)] border mx-auto mt-4 rounded-xl overflow-hidden flex">
        <Stepper/>
        <StandardSequency />
      </div>
    </StepperProvider>
  );
}
