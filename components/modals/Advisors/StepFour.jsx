import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, User, Camera } from 'lucide-react'; 
import React, { useRef } from 'react';

const StepFour = ({ formData, updateField,  onBack }) => {
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateField('profileImage', reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div > 
      
      <button
        onClick={onBack}
        className="flex items-center text-sm text-gray-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4 inline-block mr-2" />
        <span>Go back</span>
      </button>
     

      <h2 className="text-3xl text-gray-800 font-normal mb-1"> 
        Set up your profile
      </h2>
      <p className="text-sm text-gray-600 mb-4"> 
        Add a profile Image, and also a bio
      </p>

      <div className="grid grid-cols-1 gap-6"> 

        
        <div className="flex flex-col items-center gap-2"> 
          <div
            onClick={() => fileInputRef.current.click()}
            className="relative w-28 h-28 border border-dashed border-gray-300  flex items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors" 
          >
            {formData.profileImage ? (
              <img
                src={formData.profileImage}
                alt="Profile"
                className="w-full h-full object-cover "
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <User className="w-12 h-12 text-gray-800" /> 
                <Camera className="absolute bottom-1 right-1 w-5 h-5 text-gray-800 bg-white  p-1 border border-gray-300" /> 
              </div>
            )}
          </div>
          <p className='text-sm text-gray-500'>Add a Profile/ Logo</p> 
          <Input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        
        <div>
          <Label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2"> 
            Add a short bio
          </Label>
          <textarea
            id="bio"
            rows={4}
            className="w-full border border-gray-300  p-3 text-sm text-gray-700 placeholder-gray-400  transition-colors" 
            placeholder="Start typing" 
            value={formData.bio || ''}
            onChange={(e) => updateField('bio', e.target.value)}
          />
        </div>

        
        <Button  className="w-full py-6 mt-4 rounded-none  text-white font-medium"> 
          Complete
        </Button>

      </div>
    </div>
  );
};

export default StepFour;