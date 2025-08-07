import { Box, Check, CreditCard } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Stepper from "./Stepper";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const paymentOptions = [
  {
    id: "creditCard",
    title: "Credit Card",
    description: "Use your master or visa card to make payment.",
    icon: <CreditCard className="w-6 h-6 text-gray-500" />,
  },
  {
    id: "applePay",
    title: "Apple Pay",
    description: "Pay via apple pay.",
    icon: <Box className="w-6 h-6 text-gray-500" />,
  },
];

const StepTwo = ({ formData, updateField, onNext }) => {
  const selectedpaymentOption = formData.paymentOption;

  const handleSelect = (paymentOption) => {
    updateField("paymentOption", paymentOption);
  };
  return (
    <div>
      <Stepper currentStep={1} />

      <h2 className="text-2xl font-light mb-4">Payment Options</h2>
      <div className="flex  flex-col md:flex-row gap-6 mb-8">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`
              relative flex items-center px-6 py-8 cursor-pointer  border 
              ${
                selectedpaymentOption === option.id
                  ? "border-gray-800 bg-gray-100"
                  : "border-gray-300"
              }
              transition-colors duration-200
            `}
          >
            <div className="flex-shrink-0 mr-4">{option.icon}</div>
            <div className="flex-grow">
              <h3 className="font-medium text-gray-800">{option.title}</h3>
              <p className="text-sm text-gray-500">{option.description}</p>
            </div>

            <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center">
              {selectedpaymentOption === option.id && (
                <Check className="w-4 h-4 text-white bg-black rounded-full" />
              )}
              {selectedpaymentOption !== option.id && (
                <div className="w-3 h-3 rounded-full bg-white"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-2xl font-light mb-4">Payment Details</h2>

        <div>
          <Label
            htmlFor="accountNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Account Number
          </Label>
          <Input
            id="accountNumber"
            type="text"
            placeholder="12345"
            value={formData.accountNumber || ""}
            onChange={(e) => updateField("accountNumber", e.target.value)}
            className="w-full rounded-none p-2"
          />
        </div>
        <div className="flex md:flex-row flex-col  justify-between md:gap-6 gap-4 ">
          <div className="md:w-1/2">
            <Label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date
            </Label>
            <Input
              id="date"
              type="text"
              placeholder="MM/YY"
              value={formData.date || ""}
              onChange={(e) => updateField("date", e.target.value)}
              className="w-full rounded-none p-2"
            />
          </div>
          <div className="md:w-1/2">
            <Label
              htmlFor="cvc"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              CVC
            </Label>
            <Input
              id="cvc"
              type="text"
              placeholder="CVC"
              value={formData.cvc || ""}
              onChange={(e) => updateField("cvc", e.target.value)}
              className="w-full rounded-none p-2"
            />
          </div>
        </div>
      </div>
      <Button
        onClick={onNext}
        className="w-full py-6 rounded-none  mt-4 md:mt-8 lg:mt-16"
      >
        Save & Continue
      </Button>
    </div>
  );
};

export default StepTwo;
