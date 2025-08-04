import { ArrowLeft } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const StepSix = ({ formData, updateField, onBack }) => {
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
        What price range would you consider for a single artwork?
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Indicate the budget range you're comfortable with when acquiring a piece.
      </p>

       <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="size" className="mb-1 block">
                  Select range
                </Label>
                <Select
                  value={formData.size || ""}
                  onValueChange={(value) => updateField("size", value)}
                >
                  <SelectTrigger className="w-full rounded-none p-2">
                    <SelectValue placeholder="under $5000" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under 1000">Under 1000</SelectItem>
                    <SelectItem value="under 5000">Under 5000</SelectItem>
                    <SelectItem value="under 10000">Under 10000</SelectItem>
                    
                  </SelectContent>
                </Select>
              </div>
            </div>
      
            <Button
             
              className="w-full py-6 rounded-none  mt-8 md:mt-16"
            >
              Complete
            </Button>
    </div>
  );
};

export default StepSix;
