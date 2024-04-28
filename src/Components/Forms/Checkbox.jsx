/* eslint-disable react/prop-types */

import { ChevronDown } from "lucide-react";

export default function Checkbox({ choisesList, className }) {
  return (
    <>
      <div className={`${className} relative !w-full sm:w-1/2`}>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none size-4"/>
        <select
          className="input w-full !py-2"
        >
          {choisesList.map((choise, index) => (
            <option key={choise + index}>{choise}</option>
          ))}
        </select>
      </div>
    </>
  );
}
