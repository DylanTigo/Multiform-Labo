import { DollarSign } from "lucide-react";
import FormTitle from "../../../Components/Forms/FormTitle";
import RadioBox from "../../../Components/Forms/RadioBox";
import Checkbox from "../../../Components/Forms/Checkbox";
import ButtonInput from "../../../Components/Buttons/ButtonInput";
import ButtonGroup from "../../../Components/Buttons/ButtonGroup";

export default function BillingInfos() {
  return (
    <>
      <FormTitle>
        <DollarSign />
        Billing Informations
      </FormTitle>
      <form action="">
        <RadioBox label={"Blast Services"} choisesList={["Yes", "No"]} />
        <RadioBox
          label={"Storage Period"}
          choisesList={["Immediate disposal", "1 Month", "3 Month"]}
          description={"if immediate disposal is selected0"}
        />
        <div className="flex gap-4">
          <div className="inputContainer w-full">
            <label htmlFor="orderer">Ordered by</label>
            <input
              className="input w-full"
              type="text"
              name="orderer"
              id="orderer"
              placeholder="Orderer name"
            />
          </div>
          <div className="inputContainer w-full">
            <label htmlFor="ordererContact">Actual ordered contact</label>
            <input
              className="input w-full"
              type="text"
              name="ordererContact"
              id="ordererContact"
              placeholder="11564654654545"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="inputContainer w-full">
            <label htmlFor="email">Primary email</label>
            <input
              className="input w-full"
              type="email"
              name="email"
              id="email"
              placeholder="jhondoe@gmail.com"
            />
          </div>
          <div className="inputContainer w-full">
            <label htmlFor="secondaryEmail">Secondary email</label>
            <input
              className="input w-full"
              type="email"
              name="secondaryEmail"
              id="secondaryEmail"
              placeholder="jhondoe@gmail.com"
            />
          </div>
        </div>
        <div className="inputContainer">
          <label htmlFor="second-emai">Secondary email</label>
          <div className="flex gap-3">
            <input
              className="input w-full"
              type="email"
              name="second-email"
              id="second-email"
              placeholder="jhondoe@gmail.com"
            />
            <ButtonInput>Find</ButtonInput>
          </div>
        </div>
        <div className="inputContainer">
          <label htmlFor="about">Comment</label>
          <div className="mt-2">
            <textarea id="about" name="about" className="input w-full" />
          </div>
        </div>
        <div className="inputContainer w-full">
          <label htmlFor="phoneNumber">Mobile Number</label>
          <input
            className="input w-full"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="+237 655465467"
          />
        </div>
        <div className="inputContainer">
          <label>Coupon</label>
          <Checkbox choisesList={["Korrea", "Cameroon", "Germanie"]} />
        </div>
        <div className="inputContainer">
          <label>Billing Address</label>
          <div className=" space-y-5">
            <div className="flex gap-5">
              <input
                className="input w-full"
                type="text"
                name="city"
                id="city"
                placeholder="Enter your city"
              />
              <input
                className="input w-full"
                type="text"
                name="department"
                id="department"
                placeholder="Enter your departement"
              />
            </div>
            <div className="flex gap-3">
              <input
                className="input w-full"
                type="number"
                name="poBox"
                id="poBox"
                placeholder="Enter your BP"
              />
              <input
                className="input w-full"
                type="text"
                name="street"
                id="street"
                placeholder="Enter your street name"
              />
            </div>
          </div>
        </div>
        <div className="inputContainer w-auto">
          <label htmlFor="attn">ATTN</label>
          <input
            className="input w-full"
            type="text"
            name="attn"
            id="attn"
            placeholder="Marrogen"
          />
        </div>
        <div className="inputContainer">
          <label>Country</label>
          <div className="flex gap-3">
            <Checkbox
              choisesList={["Choose", "Choice"]}
              className={"w-full hfu"}
            />
          </div>
        </div>
        <div className="inputContainer">
          <label htmlFor="promoCode">Promotion Code</label>
          <div className="flex gap-3">
            <input
              className="input w-full"
              type="text"
              name="promoCode"
              id="promoCode"
              placeholder="Enter a promo code"
            />
            <ButtonInput>Apply Code</ButtonInput>
          </div>
        </div>
        <div className="inputContainer w-auto">
          <label htmlFor="requestOnPaye">Request on Payement</label>
          <input
            className="input w-ful"
            type="text"
            name="requestOnPaye"
            id="requestOnPaye"
            placeholder="request on payement"
          />
        </div>
        <ButtonGroup/>
      </form>
    </>
  );
}
