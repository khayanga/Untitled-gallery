
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from './Dashboard';
import Settings from '../Settings';
import Events from './Events';

const Main = () => {
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
                  value="manage_events"
                  
                >
                  Manage Events
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  
                >
                  Settings
                </TabsTrigger>
              </TabsList>
            </div>
    
            <TabsContent value="dashboard">
                <Dashboard/>
              
            </TabsContent>
            <TabsContent value="manage_events">
              <Events/>
              
            </TabsContent>
            <TabsContent value="settings">
                <Settings/>

             
            </TabsContent>
          </Tabs>
        </section>
  )
}

export default Main