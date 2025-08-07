import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";

const steps = ["Shipping", "Payment", "Review"];

const Stepper = ({ currentStep }) => {
  return (
    <div className="flex justify-around items-center w-full mb-12  border-b border-gray-300">
      {steps.map((step, index) => {
        const isActive = index === currentStep;

        return (
          <div key={step} className=" flex items-center justify-between  w-[280px]">
            <div className={`text-center text-sm font-medium ${isActive ? "text-gray-800 border-b-2 border-gray-800" : "text-gray-400"}`}>
              {step}
            </div>
            {index < steps.length - 1 && (
              <ChevronRight className="w-5 h-5 text-gray-600"/>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Stepper;