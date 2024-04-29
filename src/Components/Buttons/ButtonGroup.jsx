/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ButtonGroup() {
  return (
    <div className="flex gap-4">
      <button type="submit" className="btn min-w-40 group toleft">
        <ArrowLeft className="group-hover:-translate-x-1" /> Previous Step 
      </button>
      <button type="submit" className="btn min-w-40 group toRight">
        Next Step <ArrowRight className="group-hover:translate-x-1" />
      </button>
    </div>
  );
}
