"use client";
import Image from "next/image";
import React, { useState } from "react";
import StepOne from "./StepOne";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Onboarding from "../Oboarding";

const Advisor = ({ open, setOpen }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  return (
    <Dialog open={open} onOpenChange={setOpen} className="mx-4">
      <DialogContent className="w-full max-w-5xl flex p-0 overflow-hidden">
        <div className="w-1/2 hidden  md:flex">
          <Image
            src="/advisors.png"
            alt="Side visual"
            width={300}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-12 flex flex-col justify-center ">
          <DialogTitle />

          {step === 1 && (
            <Onboarding
              formData={formData}
              updateField={updateField}
              onNext={handleNext}
            />
          )}

          {step === 2 && (
            <StepOne
              formData={formData}
              updateField={updateField}
              onNext={handleNext}
            />
          )}
          {step === 3 && (
            <StepTwo
              formData={formData}
              updateField={updateField}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 4 && (
            <StepThree
              formData={formData}
              updateField={updateField}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 5 && (
            <StepFour
              formData={formData}
              updateField={updateField}
              onBack={handleBack}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Advisor;
