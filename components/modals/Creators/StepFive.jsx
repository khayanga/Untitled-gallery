import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";

const interestOptions = [
  "Investing in art",
  "Collecting art for personal enjoyment",
  "Professional (e.g., gallery owner, curator, advisor)",
  "Artist",
  "General interest in art",
];

const StepFive = ({ formData, updateField, onNext, onBack }) => {
  const selected = formData.interestOptions || [];

  const selectOption = (option) => {
    const updated = selected === option ? "" : option;
    updateField("interestOptions", updated);
  };
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-sm text-gray-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4 inline-block mr-2" />
        <span>Go back</span>
      </button>

      <h2 className="text-2xl text-gray-800 font-light mb-1">
        What is your primary interest in the art market?
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Select the option that best describes your relationship with art.
      </p>

      <div className="grid grid-cols-1 gap-4 md:gap-2">
        {interestOptions.map((option) => {
          const isSelected = selected === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => selectOption(option)}
              className={`w-full border px-4 py-2 text-left  text-sm rounded-none ${
                isSelected
                  ? "bg-gray-100 text-gray-800 border-black"
                  : "bg-white text-gray-800 border-gray-400"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <Button onClick={onNext} className="w-full py-6 rounded-none mt-8">
        Continue
      </Button>
    </div>
  );
};

export default StepFive;
