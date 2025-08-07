import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Box, Check, ShoppingCart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Button } from "@/components/ui/button";
import Stepper from "./Stepper";

const shippingOptions = [
  {
    id: "shipping",
    title: "Shipping",
    description:
      "Get your order delivered to your doorstep—fast, secure, and reliable.",
    icon: <ShoppingCart className="w-6 h-6 text-gray-500" />,
  },
  {
    id: "pick-up",
    title: "Pick up (Free)",
    description: "Once confirmed, we’ll contact you to arrange pickup.",
    icon: <Box className="w-6 h-6 text-gray-500" />,
  },
];

const StepOne = ({ formData, updateField, onNext }) => {
  const selectedShippingOption = formData.shippingOption;

  const handleSelect = (shippingOption) => {
    updateField("shippingOption", shippingOption);
  };
  return (
    <div>

      <Stepper currentStep={0} />


      <h2 className="text-2xl font-light mb-4">Shipping Options</h2>
      <div className="flex  flex-col md:flex-row gap-6 mb-8">
        {shippingOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`
              relative flex items-center px-6 py-8 cursor-pointer  border 
              ${
                selectedShippingOption === option.id
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
              {selectedShippingOption === option.id && (
                <Check className="w-4 h-4 text-white bg-black rounded-full" />
              )}
              {selectedShippingOption !== option.id && (
                <div className="w-3 h-3 rounded-full bg-white"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {(!selectedShippingOption || selectedShippingOption === "shipping") && (
        <div className="grid grid-cols-1 gap-4">
          <h2 className="text-2xl font-light mb-4">Delivery Address</h2>
          <div>
            <Label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Fullname
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your name"
              value={formData.fisrtName || ""}
              onChange={(e) => updateField("fullName", e.target.value)}
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
          <div>
            <Label
              htmlFor="country"
              className=" block text-sm font-medium text-gray-700 mb-1"
            >
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
            <Label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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

          <div>
            <Label
              htmlFor="streetAddress"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Street Address
            </Label>
            <Input
              id="streetAddress"
              type="text"
              placeholder="Enter Address"
              value={formData.streetAddress || ""}
              onChange={(e) => updateField("streetAddress", e.target.value)}
              className="w-full rounded-none p-2"
            />
          </div>
          <div className="flex md:flex-row flex-col  justify-between md:gap-6 gap-4 ">
            <div className="md:w-1/2">
              <Label
                htmlFor="apartment"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Apartment(optional)
              </Label>
              <Input
                id="apartment"
                type="text"
                placeholder="Enter apartment"
                value={formData.streetAddress || ""}
                onChange={(e) => updateField("apartment", e.target.value)}
                className="w-full rounded-none p-2"
              />
            </div>
            <div className="md:w-1/2">
              <Label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Postal Code
              </Label>
              <Input
                id="postalCode"
                type="text"
                placeholder="1234"
                value={formData.posalCode || ""}
                onChange={(e) => updateField("postalCode", e.target.value)}
                className="w-full rounded-none p-2"
              />
            </div>
          </div>
        </div>
      )}

      {selectedShippingOption === "pick-up" && (
        <div className="grid grid-cols-1 gap-4">
          <h2 className="text-2xl font-light mb-4">Medium of Contact</h2>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.fisrtName || ""}
              onChange={(e) => updateField("email", e.target.value)}
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
      )}

      <Button
        onClick={onNext}
        className="w-full py-6 rounded-none  mt-4 md:mt-8 lg:mt-16"
      >
        Save & Continue
      </Button>
    </div>
  );
};

export default StepOne;
