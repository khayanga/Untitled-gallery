import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'


const experienceOptions = [
  "Yes, I have bought contemporary art",
  "No, I have never bought contemporary art before",
  
]

const StepThree = ({ formData, updateField, onNext, onBack }) => {
     const selected = formData.experienceOptions || []

  const selectOption = (option) => {
    const updated = selected === option ? "" : option;
    updateField("experienceOptions", updated);
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
        Have you ever collected contemporary art?
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Tell us about your experience in acquiring contemporary artworks.
      </p>

      <div className="grid grid-cols-1 gap-4">
        {experienceOptions.map((option) => {
          const isSelected = selected === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => selectOption(option)}
              className={`w-full border px-4 py-4 text-left  text-sm rounded-none ${
                isSelected
                  ? "bg-gray-100 text-gray-800 border-black"
                  : "bg-white text-gray-800 border-gray-400"
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>

      <Button
        onClick={onNext}
        className="w-full py-6 rounded-none mt-8 md:mt-12"
       
      >
        Continue
      </Button>
    </div>
  )
}

export default StepThree