import TabsPages from "@/components/tabs/Tabs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PROJECTS | JENZY",
  description: "Completely projects",
  
};

export default function ProjectsPage() {
  return <TabsPages value="projects" />;
}
