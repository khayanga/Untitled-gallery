import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const ShippingModal = ({ art }) => {
  const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
  
    const updateField = (field, value) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };
  
    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

  const total = art.price + art.shippingTax;
  return (
    <section className="mx-auto max-w-7xl px-6 pb-6 lg:pb-24 lg:px-8 ">
      <Navbar />

      <div className="flex flex-col-reverse md:flex-row justify-between gap-6 lg:gap-12  mt-6">
        <div className=" w-full md:w-1/2 lg:w-3/4 ">
        {
          step === 1 &&(
            <StepOne
            formData={formData}
            updateField={updateField}
            onNext={handleNext}
            />
          )
        }

        {
          step === 2 && (
            <StepTwo
            formData={formData}
            updateField={updateField}
            onNext={handleNext}
            />
            
          )
        }
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 ">
        <div className="border border-gray-300 p-4 " >
          <div className="p-4 bg-gray-100 w-[200px] ">
            <Image
              src={art.image}
              alt={art.title}
              width={400}
              height={250}
              className="w-full h-[150px] object-cover"
            />
          </div>
          <h2 className="text-xl text-gray-800 font-light my-2">{art.title}</h2>
          <p className="text-md text-gray-600">By:{art.artist}</p>

          <h1 className="text-3xl font-bold my-2">${art.price.toFixed(2)}</h1>

          <div className="w-full border-b border-gray-300  my-4 " />

          <div >

            <div className="flex flex-row justify-between mb-2 text-gray-600">
              <p>Price</p>
              <p>${art.price.toFixed(2)}</p>

            </div>
            <div className="flex flex-row justify-between text-gray-600">
              <p>Shipping Tax</p>
              <p>${art.shippingTax.toFixed(2)}</p>

            </div>
            <div className="flex flex-row justify-between text-gray-800 mt-4 font-bold">
              <p>Total </p>
              <p>${total.toFixed(2)}</p>

            </div>

          </div>

          
        </div>
        <div className="bg-green-50 p-2 flex flex-row gap-4 mt-4">  
            <ShieldCheck className="w-8 h-8 text-green-500" />
            <div>
              <h2 className="text-md text-gray-800 mb-1">Your purchase is protected.</h2>
              <p className="text-gray-600 text-sm">Learn more about Untitled Gallery’s Buyer Guarantee.</p>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ShippingModal;
