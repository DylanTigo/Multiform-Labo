import { useStepper } from "../../Context/StepperContect";
import Complete from "./Complete";
import BasicsInfos from "./Forms/BasicsInfos";
import BillingInfos from "./Forms/BillingInfos";
import PrimerInfos from "./Forms/PrimerInfos";
import ReactionsInfos from "./Forms/ReactionsInfos";
import SampleInfos from "./Forms/SampleInfos";

export default function StandardSequency() {
  const { activeStep } = useStepper();
  let stepComponent;

  switch (activeStep) {
    case 0:
      stepComponent = <BasicsInfos />;
      break;
    case 1:
      stepComponent = <ReactionsInfos />;
      break;
    case 2:
      stepComponent = <SampleInfos />;
      break;
    case 3:
      stepComponent = <PrimerInfos />;
      break;
    case 4:
      stepComponent = <BillingInfos />;
      break;
    case 5:
      stepComponent = <Complete />;
      break;
    default:
      stepComponent = null;
  }

  return (
    <div className="flex flex-col mx-5 growp px-8 py-12 w-full">
      {stepComponent}
    </div>
  );
}
