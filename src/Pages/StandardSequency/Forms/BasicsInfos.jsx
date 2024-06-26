import { ArrowRight, Info } from "lucide-react";
import Checkbox from "../../../Components/Forms/Checkbox";
import RadioBox from "../../../Components/Forms/RadioBox";
import FormTitle from "../../../Components/Forms/FormTitle";
import { useStepper } from "../../../Context/StepperContect";

export default function BasicsInfos() {
  const {handleNext} = useStepper()
  return (
    <>
      <FormTitle>
        <Info />
        Basics Informations
      </FormTitle>
      <form action="" onSubmit={handleNext}>
        <div className="inputContainer">
          <label>Sample Type</label>
          <Checkbox choisesList={["PCR product", "Plasmid", "Premix"]} />
        </div>
        <div className="inputContainer">
          <label>Sample Type</label>
          <Checkbox choisesList={["Purification", "Quantification"]} />
        </div>
        <RadioBox
          label={"Product Size(bp)"}
          choisesList={["Over 600bp", "Less 600bp"]}
        />
        <RadioBox
          label={"Tube Type"}
          choisesList={["Tube", " 96- well plate"]}
        />
        <RadioBox label={"Run Type"} choisesList={["Regular", "Express"]} />
        <button type="submit" className="btn mx-auto group toRight">
          Next Step <ArrowRight className="group-hover:translate-x-1" />
        </button>
      </form>
    </>
  );
}
