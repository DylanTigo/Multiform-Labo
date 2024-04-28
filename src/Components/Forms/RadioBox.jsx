/* eslint-disable react/prop-types */
import { Info } from "lucide-react";
import { useState } from "react";

export default function RadioBox({ label, choisesList, description}) {
  const [choise, setChoise] = useState(choisesList[0]);

  const handleChoiseChange = (event) => {
    setChoise(event.target.value);
  };
  return (
    <div>
      <div className="label">{label}</div>
      <div className="flex gap-3">
        {choisesList.map((elt, index) => (
        <label key={index + elt}>
          <input
            type="radio"
            value={elt}
            checked={choise === elt}
            onChange={handleChoiseChange}
          />
          <span className="font-normal">{elt}</span>
        </label>
        ))}
      </div>
      {description && <div className="description text-blue-500"><Info/>{description}</div>}
    </div>
  );
}
