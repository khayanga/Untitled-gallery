import {  Check, FolderHeart, Palette } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const accounts = [
  {
    id: "curator",
    title: "Curator",
    description: "Attend art events and purchase artworks.",
    icon: <FolderHeart className="w-6 h-6 text-gray-500" />,
  },
  {
    id: "art-director",
    title: "Art Director",
    description: "Host art events and manage artists.",
    icon: <Palette className="w-6 h-6 text-gray-500" />,
  },
];
const Onboarding = ({ formData, updateField, onNext }) => {
  const selectedAccountType = formData.accountType;

  const handleSelect = (accountType) => {
    updateField("accountType", accountType);
  };

  return (
    <div>
      <h2 className="text-2xl text-gray-800 font-light mb-2">Who are you?</h2>
      <p className=" text-sm text-gray-600">
        Join our community of visual storytellers, choose the account that fits
        you.
      </p>

      <div className="grid grid-cols-1 gap-6 mt-4">
        {accounts.map((account) => (
          <div
            key={account.id}
            onClick={() => handleSelect(account.id)}
            className={`
              relative flex items-center p-5 cursor-pointer  border 
              ${
                selectedAccountType === account.id
                  ? "border-gray-800 bg-gray-100"
                  : "border-gray-300"
              }
              transition-colors duration-200
            `}
          >
            {/* The icon and text content on the left */}
            <div className="flex-shrink-0 mr-4">{account.icon}</div>
            <div className="flex-grow">
              <h3 className="font-medium text-gray-800">{account.title}</h3>
              <p className="text-sm text-gray-500">{account.description}</p>
            </div>

            {/* The radio button / checkmark on the right */}
            <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center">
              {selectedAccountType === account.id && (
                <Check className="w-4 h-4 text-white bg-black rounded-full" />
              )}
              {selectedAccountType !== account.id && (
                <div className="w-3 h-3 rounded-full bg-white"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
      onClick={onNext}
       className="w-full py-6 rounded-none  mt-8 md:mt-16">
        Next
      </Button>
    </div>
  );
};

export default Onboarding;
