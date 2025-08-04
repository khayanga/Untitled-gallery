import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const StepOne = ({ formData, updateField, onNext }) => {
  return (
    <div>

      <h2 className="text-2xl text-gray-800 font-light mb-2">
        Personal information
      </h2>
      <p className=" text-sm text-gray-600">
        Enter your name and phone number to set up your profile{" "}
      </p>

      <div className="grid grid-cols-1 gap-4 mt-6">
        <div>
          <Label
            htmlFor="first name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="First Name"
            value={formData.fisrtName || ""}
            onChange={(e) => updateField("firstName", e.target.value)}
            className="w-full rounded-none p-2"
          />
        </div>

        <div>
          <Label
            htmlFor="first name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName || ""}
            onChange={(e) => updateField("lastName", e.target.value)}
            className="w-full rounded-none p-2"
          />
        </div>

        <div>
          <Label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            type="tel"
            placeholder="+254..."
            value={formData.phoneNumber || ""}
            onChange={(e) => updateField("phoneNumber", e.target.value)}
            className="w-full rounded-none p-2"
          />
        </div>
      </div>
      
      
      
      <Button onClick={onNext} className="w-full py-6  rounded-none mt-12">
        Continue
      </Button>
    </div>
  );
};

export default StepOne;
