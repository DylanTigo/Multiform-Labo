import { Minus, Plus } from "lucide-react";
import TableRow from "./TableRow";
import { useState } from "react";
import PrimerInput from "../Modals/PrimerInput";
import { addRow, removeRow } from "../../utils/addRemoveRow";

export default function Table() {
  const [elementList, setElementList] = useState([{ id: 0, data: ["", ""] }]);

  return (
    <>
      <div className="flex justify-end mb-4">
        <button onClick={() => addRow(elementList, setElementList)} className="flex gap-1 items-center rounded-lg py-1 ps-1 pe-2 hover:bg-blue-100 text-sm">
          <Plus /> Add
        </button>
        <button onClick={() => removeRow(elementList, setElementList)} className="flex gap-1 items-center rounded-lg py-1 ps-1 pe-2 hover:bg-blue-100 text-sm">
          <Minus /> Remove
        </button>
      </div>
      <table className="border-collapse w-full  border border-gray-400 bg-white text-sm shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className=" border border-gray-300 font-semibold p-3 text-center">
              No
            </th>
            <th className=" w-40 border border-gray-300 font-semibold p-3 text-left">
              Sample Name
            </th>
            <th className="w-auto border border-gray-300 font-semibold p-3 text-left">
              Primer
            </th>
            <th className=" border border-gray-300 font-semibold p-3 text-left"></th>
          </tr>
        </thead>
        <tbody>
        {elementList.map((element) => (
            <TableRow key={element.id} type={"withBtn"} element={element} />
          ))}
        </tbody>
      </table>
      <PrimerInput/>
    </>
  );
}
