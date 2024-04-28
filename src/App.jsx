import Stepper from "./Components/Stepper";
import StandardSequency from "./Pages/StandardSequency/StandardSequency";
import { tabStandard } from "./utils/stepsTabs";

function App() {
  return (
    <>
    <div className="container max-w-4xl border mx-auto mt-4 rounded-xl overflow-hidden flex">
      <Stepper activeStep={0} stepsList={tabStandard}/>
      <StandardSequency/>
    </div>
    </>
  );
}

export default App;
