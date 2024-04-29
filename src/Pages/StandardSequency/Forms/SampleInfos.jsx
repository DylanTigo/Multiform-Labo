import { Minus, Plus, TestTube } from "lucide-react";
import FormTitle from "../../../Components/Forms/FormTitle";
import { useState } from "react";
import { addRow, removeRow } from "../../../utils/addRemoveRow";
import TableRow from "../../../Components/Table/TableRow";

export default function SampleInfos() {
  const [sampleList, setSampleList] = useState([{ id: 0, data: ["", "", "", "", "", "", ""] }]);

  return (
    <>
      <FormTitle>
        <TestTube />
        Sample Informations
      </FormTitle>
      <div className="flex justify-end mb-4">
        <button onClick={() => addRow(sampleList, setSampleList)} className="flex gap-1 items-center rounded-lg py-1 ps-1 pe-2 hover:bg-blue-100 text-sm">
          <Plus /> Add
        </button>
        <button onClick={() => removeRow(sampleList, setSampleList)} className="flex gap-1 items-center rounded-lg py-1 ps-1 pe-2 hover:bg-blue-100 text-sm">
          <Minus /> Remove
        </button>
      </div>
      <table className="border-collapse w-full  border border-gray-400 bg-white text-sm shadow-sm">
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
        {sampleList.map((element) => (
            <TableRow key={element.id} element={element} />
          ))}
        </tbody>
      </table>
    </>
  );
}
