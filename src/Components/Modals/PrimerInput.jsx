/* eslint-disable react/prop-types */
import { Info } from "lucide-react";
import RadioBox from "../Forms/RadioBox";
import { primerList } from "../../utils/stepsTabs";
import { removeModal } from "../../utils/toggleModal";

export default function PrimerInput() {
  
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-20 hidden" id="modalConatiner">
      <div onClick={removeModal} className=" bg-black opacity-40 w-svw h-svh"></div>
      <div className="bg-white min-w-[50rem] rounded-lg h-[95vh] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-6 py-10">
        <h3 className="text-xl text-center font-semibold pb-4">Primer Input</h3>
        <RadioBox
          className={"modalRadio"}
          label={"Primer Selection"}
          choisesList={["Universal Primer", "Stored Primer"]}
        />
        <div className="description text-blue-500 justify-center">
          <Info />
          Double click to Select
        </div>
        <table className="border-collapse w-full  border border-gray-400 bg-white text-sm shadow-sm mt-5">
          <thead className="bg-gray-50">
            <tr>
              <th className=" border border-gray-300 font-semibold p-3 text-center">
                No
              </th>
              <th className=" w-40 border border-gray-300 font-semibold p-3 text-center">
                Primer
              </th>
              <th className="w-auto border border-gray-300 font-semibold p-3 text-center">
                Length
              </th>
            </tr>
          </thead>
          <tbody>
            {primerList.map((element) => (
              <tr key={element.id} >
                {
                  <td className="border border-gray-300 p-3 text-center w-auto">
                    {element.id}
                  </td>
                }
                {element.data.map((element, index) => (
                  <td
                    key={element + index}
                    className="border border-gray-300 w-auto text-center"
                  >
                    {element}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
