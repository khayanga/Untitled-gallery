import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

const eventOptions = [
  "Gallery Openings",
  "Artist Studio Visits",
  "Live Paintings",
  "Workshops",
  "Museum Tours",
]

const StepThree = ({ formData, updateField, onNext, onBack }) => {
    const selected = formData.eventTypes || []

  const toggleOption = (option) => {
    const updated = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option]

    updateField("eventTypes", updated)
  }
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
        Select the kinds of events you'd like to organize.
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        You can select multiple
      </p>

       <div className="grid grid-cols-1 gap-3">
        {eventOptions.map((option) => {
          const isSelected = selected.includes(option)
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleOption(option)}
              className={`w-full border px-4 py-2 text-left rounded-none ${
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
        className="w-full py-6 rounded-none mt-8"
       
      >
        Continue
      </Button>

    </div>
  )
}

export default StepThree