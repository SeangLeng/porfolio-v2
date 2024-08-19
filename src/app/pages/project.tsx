import React from "react";
import { AllProjects } from "../constrains/MockupProjects";
import ImageCard from "@/components/cards/ImageCard";

export default function Projects() {
  return (
    <section className="container">
      <section className="my-10">
        <h1 className="text-primaryColor font-bold uppercase leading-relaxed">
          ALl projects
        </h1>
        <article
          aria-label="project-description"
          className="font-normal text-gray-300 my-5 md:text-base text-xs"
        >
          Every project in this portfolio has been carefully chosen to highlight
          a certain set of abilities, an inventive idea, or a solution to one of
          the many problems our clients have faced. Here, we offer a brief
          overview of each project, highlighting its goals, tactics used,
          results, and added value to our clients&apos; businesses.
        </article>
      </section>
      <section aria-label="project-list" className="py-10">
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          {AllProjects.map((item) => (
            <li key={item.title + item.link}>
              <ImageCard
                images={item.images}
                link={item.link}
                altImage={item.title}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
