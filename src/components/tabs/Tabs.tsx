import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import Homepage from "@/app/pages/homepage";
import Projects from "@/app/pages/project";

export default function TabsPages() {
  return (
    <Tabs defaultValue="homepage" className="pt-10 ">
      <TabsList className="flex justify-center items-center max-w-[400px] mx-auto rounded-full sticky top-10 z-40">
        <TabsTrigger value="homepage" className="rounded-full w-full">
          HOMEPAGE
        </TabsTrigger>
        <TabsTrigger value="projects" className="rounded-full w-full">
          PROJECTES
        </TabsTrigger>
      </TabsList>
      <TabsContent value="homepage">
        <Homepage />
      </TabsContent>
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
    </Tabs>
  );
}
