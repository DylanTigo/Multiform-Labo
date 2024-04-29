import { Flashlight } from "lucide-react";
import FormTitle from "../../../Components/Forms/FormTitle";
import { useState } from "react";
import TableRow from "../../../Components/Table/TableRow";
import ButtonGroup from "../../../Components/Buttons/ButtonGroup";

export default function PrimerInfos() {
  const [primerList, setPrimerList] = useState([
    { id: 0, data: ["1_F", "", "", "1.5", "Y", "N"] },
  ]);
  return (
    <>
      <FormTitle>
        <Flashlight />
        Primer Informations
      </FormTitle>
      <table className="border-collapse w-full  border border-gray-400 bg-white text-sm shadow-sm mt-8">
        <thead className="bg-gray-50">
          <tr>
            <th className=" border border-gray-300 font-semibold p-3 text-center">
              No
            </th>
            <th className=" w-40 border border-gray-300 font-semibold p-3 text-center">
              Sample Name
            </th>
            <th className="w-auto border border-gray-300 font-semibold p-3 text-center">
              React Count
            </th>
            <th className="w-auto border border-gray-300 font-semibold p-3 text-center">
              Conc.(ng/ul)
            </th>
            <th className="w-auto border border-gray-300 font-semibold p-3 text-center">
              Plate Name
            </th>
            <th className="w-auto border border-gray-300 font-semibold p-3 text-center">
              Well
            </th>
            <th className="w-auto border border-gray-300 font-semibold p-3 text-center">
              Product size(bp)
            </th>
            <th className="w-auto border border-gray-300 font-semibold p-3 text-center">
              Target size(bp)
            </th>
          </tr>
        </thead>
        <tbody>
          {primerList.map((element) => (
            <TableRow key={element.id} element={element} />
          ))}
        </tbody>
      </table>
      <ButtonGroup/>
    </>
  );
}
