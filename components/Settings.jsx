"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  locationFields,
  passwordFields,
  personalInfoFields,
} from "@/data";

const Settings = () => {
  const renderField = (field) => {
    return (
      <div key={field.id}>
        <Label
          htmlFor={field.id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {field.label}
        </Label>
        {field.type === "select" ? (
          <Select defaultValue={field.defaultValue}>
            <SelectTrigger className="w-full rounded-none p-2">
              <SelectValue placeholder={`Select ${field.label}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {field.options.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        ) : (
          <Input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            defaultValue={field.defaultValue}
            className="w-full rounded-none p-2"
          />
        )}
      </div>
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-light mb-8">Settings</h1>
      <main>
        {/* Personal Info */}
        <section className="flex flex-col md:flex-row gap-6 bg-white p-4">
          <aside className="md:w-1/4">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <p className="text-sm text-gray-600 mt-2">
              Update personal information.
            </p>
          </aside>
          <div className="md:w-3/4">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mr-4">
                <Image
                  src="/artist1.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Add Profile Image
                </p>
                <p className="text-xs text-gray-500">
                  PNG or JPEG, at least 128x128px
                </p>
              </div>
              <button className="ml-auto px-4 py-2 border border-gray-300 text-sm font-medium">
                Update
              </button>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfoFields.map(renderField)}
              <div className="md:col-span-2 mt-4">
                <Button className="p-4 bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
                  <Link href="/signin">Update Profile</Link>
                </Button>
              </div>
            </form>
          </div>
        </section>

        <div className="w-full border-b border-gray-200 my-12" />

        {/* Location */}
        <section className="flex flex-col md:flex-row gap-6 bg-white p-4">
          <aside className="md:w-1/4">
            <h2 className="text-lg font-semibold">Location</h2>
            <p className="text-sm text-gray-600 mt-2">Manage your location.</p>
          </aside>
          <div className="md:w-3/4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locationFields.map(renderField)}
              <div className="md:col-span-2 mt-4">
                <Button className="p-4 bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
                  <Link href="/signin">Update Location</Link>
                </Button>
              </div>
            </form>
          </div>
        </section>

        <div className="w-full border-b border-gray-200 my-12" />

        {/* Security */}
        <section className="flex flex-col md:flex-row gap-6 bg-white p-4 mb-24">
          <aside className="md:w-1/4">
            <h2 className="text-lg font-semibold">Security</h2>
            <p className="text-sm text-gray-600 mt-2">Manage your password</p>
          </aside>
          <div className="md:w-3/4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {passwordFields.map((field) => (
                <div
                  key={field.id}
                  className={
                    field.id === "currentPassword" ? "md:col-span-2" : ""
                  }
                >
                  <Label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                  </Label>
                  <div className="relative">
                    <Input
                      id={field.id}
                      type="password"
                      placeholder={field.placeholder}
                      className="w-full rounded-none shadow-sm p-2 pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                      {/* Eye Icon - placeholder only */}
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5
                            c4.478 0 8.268 2.943 9.542 7
                            -1.274 4.057-5.064 7-9.542 7
                            -4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
              <div className="md:col-span-2 mt-4">
                <Button className="p-4 bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
                  <Link href="/signin">Update Password</Link>
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Settings;
