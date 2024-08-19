"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useState } from "react";
import Homepage from "@/app/pages/homepage";
import Projects from "@/app/pages/project";

export default function TabsPages() {
  const [currentValue, setValue] = useState<"homepage" | "projects">(
    "homepage"
  );
  return (
    <Tabs value={currentValue} defaultValue={"homepage"} className="pt-10">
      <TabsList className="flex justify-center items-center max-w-[400px] mx-auto rounded-full sticky top-10 z-40">
        <TabsTrigger
          value="homepage"
          onClick={() => setValue("homepage")}
          className="rounded-full w-full"
        >
          HOMEPAGE
        </TabsTrigger>
        <TabsTrigger
          value="projects"
          className="rounded-full w-full"
          onClick={() => setValue("projects")}
        >
          PROJECTES
        </TabsTrigger>
      </TabsList>
      <TabsContent value="homepage">
        <Homepage changeTab={setValue} />
      </TabsContent>
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
    </Tabs>
  );
}
