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

const StepFour = ({ formData, updateField, onNext, onBack }) => {
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
        How many artworks do you own?
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        We’d love to know the size of your current collection.
      </p>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="size" className="mb-1 block">
            Select size
          </Label>
          <Select
            value={formData.size || ""}
            onValueChange={(value) => updateField("size", value)}
          >
            <SelectTrigger className="w-full rounded-none p-2">
              <SelectValue placeholder="1-10 artworks" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        onClick={onNext}
        className="w-full py-6 rounded-none  mt-8 md:mt-16"
      >
        Continue
      </Button>
    </div>
  );
};

export default StepFour;
