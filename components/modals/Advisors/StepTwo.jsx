import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft } from "lucide-react" 

const StepTwo = ({ formData, updateField, onNext, onBack }) => {
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
        Where will you be hosting events?
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Tell us your primary location for hosting.
      </p>

      
      <div className="grid grid-cols-1 gap-4">
        
        <div>
          <Label htmlFor="country" className="mb-1 block">
            Country
          </Label>
          <Select
            value={formData.country || ""}
            onValueChange={(value) => updateField("country", value)}
          >
            <SelectTrigger className="w-full rounded-none p-2">
              <SelectValue placeholder="Choose a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ghana">Ghana</SelectItem>
              <SelectItem value="kenya">Kenya</SelectItem>
              <SelectItem value="congo">Congo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        
        <div>
          <Label htmlFor="city" className="mb-1 block">
            City
          </Label>
          <Select
            value={formData.city || ""}
            onValueChange={(value) => updateField("city", value)}
          >
            <SelectTrigger className="w-full rounded-none p-2">
              <SelectValue placeholder="Choose a city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nairobi">Nairobi</SelectItem>
              <SelectItem value="accra">Accra</SelectItem>
              <SelectItem value="kinshasa">Kinshasa</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Continue Button */}
      <Button
        onClick={onNext}
        className="w-full py-6 rounded-none mt-12"
        
      >
        Continue
      </Button>
    </div>
  )
}

export default StepTwo
