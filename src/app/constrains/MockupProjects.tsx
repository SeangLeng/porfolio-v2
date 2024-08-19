import { StaticImport } from "next/dist/shared/lib/get-img-props";
import sampleProjectImage from '@/asset/images/11c29c0ccc53858cbad8ca2e1e99e7c5.png';

interface ProjectProps {
  title: string;
  link: string;
  images: StaticImport | string;
}

export const AllProjects: ProjectProps[] = [
  {
    title: "sample project",
    link: "sample link",
    images: sampleProjectImage
  },
  {
    title: "sample project",
    link: "sample link",
    images: sampleProjectImage
  },
  {
    title: "sample project",
    link: "sample link",
    images: sampleProjectImage
  },
  {
    title: "sample project",
    link: "sample link",
    images: sampleProjectImage
  },
  {
    title: "sample project",
    link: "sample link",
    images: sampleProjectImage
  },
  {
    title: "sample project",
    link: "sample link",
    images: sampleProjectImage
  },
];
