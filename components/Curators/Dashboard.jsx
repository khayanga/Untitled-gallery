import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Main from "./Main";
import Artwork from "./Artwork";
import CuratorSettings from "../Settings";

const Dashboard = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8 ">
      <Tabs defaultValue="dashboard" className="w-full ">
        <div className="w-full border-b border-gray-200 ">
          <TabsList className="flex space-x-4 bg-transparent p-0 border-none shadow-none">
            <TabsTrigger
              value="dashboard"
              
            >
              Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="purchased_art"
              
            >
              Purchased Artwork
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              
            >
              Settings
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="dashboard">
          <Main/>
        </TabsContent>
        <TabsContent value="purchased_art">
          <Artwork/>
        </TabsContent>
        <TabsContent value="settings">
         <CuratorSettings/>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Dashboard;
