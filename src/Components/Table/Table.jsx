import { Minus, Plus } from "lucide-react";
import TableRow from "./TableRow";
import { useState } from "react";

export default function Table() {
  const [elementList, setElementList] = useState([{ id: 0, data: ["", ""] }]);

  const addRow = () => {
    const newId = elementList.length;
    const newElementList = [...elementList, { id: newId, data: ["", ""] }];
    setElementList(newElementList);
  };

  const removeRow = () => {
    if (elementList.length > 1) {
      const newElementList = elementList.slice(0, -1); 
      setElementList(newElementList);
    }
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <button onClick={addRow} className="flex gap-1 items-center rounded-lg py-1 ps-1 pe-2 hover:bg-blue-100 text-sm">
          <Plus /> Add
        </button>
        <button onClick={removeRow} className="flex gap-1 items-center rounded-lg py-1 ps-1 pe-2 hover:bg-blue-100 text-sm">
          <Minus /> Remove
        </button>
      </div>
      <table className="border-collapse w-full border border-gray-400 bg-white text-sm shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className=" border border-gray-300 font-semibold p-3 text-left">
              No
            </th>
            <th className="w-auto border border-gray-300 font-semibold p-3 text-left">
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
            <TableRow key={element.id} element={element} />
          ))}
        </tbody>
      </table>
    </>
  );
}
