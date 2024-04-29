import BasicsInfos from "./Forms/BasicsInfos";
import BillingInfos from "./Forms/BillingInfos";
import ReactionsInfos from "./Forms/ReactionsInfos";

export default function StandardSequency() {

  return (
    <div className="flex flex-col mx-5 growp px-8 py-12  w-full">
      {/* <BasicsInfos/> */}
      {/* <BillingInfos/> */}
      <ReactionsInfos/>
    </div>
  );
}
