"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useState } from "react";
import Homepage from "@/app/pages/homepage";
import Projects from "@/app/pages/project";
import { useRouter } from "next/navigation";

export default function TabsPages({
  value,
}: {
  value: "homepage" | "projects";
}) {
  const [currentValue, setValue] = useState<"homepage" | "projects">(value);
  const router = useRouter();
  return (
    <Tabs value={currentValue} defaultValue={"homepage"} className="pt-10">
      <TabsList className="flex justify-center items-center max-w-[400px] mx-auto rounded-full sticky top-10 z-40">
        <TabsTrigger
          value="homepage"
          onClick={() => router.push("/")}
          className="rounded-full w-full"
        >
          HOMEPAGE
        </TabsTrigger>
        <TabsTrigger
          value="projects"
          className="rounded-full w-full"
          onClick={() => router.push("/pages/projects")}
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
