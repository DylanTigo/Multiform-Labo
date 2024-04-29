import { Search } from "lucide-react";

/* eslint-disable react/prop-types */
export default function TableRow({ element }) {
  return (
    <tr>
      <td className="border border-gray-300 p-3 text-center w-auto">
        {element.id}
      </td>
      {element.data.map((element, index) => (
        <td key={element+index} className="border border-gray-300 w-auto">
          <input
            type="text"
            name=""
            id=""
            className="w-full h-full p-3 outline-none"
          />
        </td>
      ))}
      <td className="border border-gray-300"><Search className="block mx-auto"/></td>
    </tr>
  );
}
