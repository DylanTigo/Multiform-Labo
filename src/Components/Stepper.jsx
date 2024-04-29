/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {Check} from "lucide-react"
import { tabStandard } from '../utils/stepsTabs';
import { useStepper } from '../Context/StepperContect';

const Stepper = () => {
  const { activeStep } = useStepper()

  let [progress, setProgress] = useState((activeStep / (tabStandard.length - 1)) * 100);

  useEffect(() => {
    setProgress((activeStep / (tabStandard.length- 1)) * 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  return (
    <div className=" font-semibold px-10 py-12 bg-gray-100 relative -z-20">
      <div className="flex flex-col gap-14 justify-between relative w-fit h-fit">

      <div className="absolute left-[18px] h-full w-[4px] bg-white -z-10">
        <div
          className={`rounded-md bg-blue-500 w-full transition duration-500`}
          style={{ height: `${progress}%`, transformOrigin: 'left' }}
          />
      </div>
      {tabStandard.map((step, index) => (
        <div key={index} className="flex gap-3">
          <div className={`progressBtn ${index <= activeStep && "check"}`}>
            {index >= activeStep ? index + 1 : <Check size={18}  strokeWidth={3}/>}
          </div>
          <div>
            <p className="text-slate-700 text-[10px]">Step {index + 1}</p>
            <p className="text-nowrap">{step}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Stepper;
