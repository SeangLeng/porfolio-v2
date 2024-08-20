import { StaticImport } from "next/dist/shared/lib/get-img-props";
import galcorp from "@/asset/images/galcorp.png";
import taskdot from "@/asset/images/taskdot.png";
import Quicksight from "@/asset/images/Quicksight.jpg";

interface ProjectProps {
  title: string;
  link: string;
  images: StaticImport | string;
}

export const AllProjects: ProjectProps[] = [
  {
    title: "Galcorps",
    link: "https://www.gal-corp.com/",
    images: galcorp,
  },
  {
    title: "taskdot",
    link: "https://www.craftysite.co/en",
    images: taskdot,
  },
  {
    title: "K-Quicksight",
    link: "https://k-quicksight.istad.co/about-us",
    images: Quicksight,
  },
];
