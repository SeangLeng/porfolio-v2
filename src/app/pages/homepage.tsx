"use client";

import ShinyButton from "@/components/magicui/shiny-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import profile from "@/asset/images/positive-asian-man-pointing-finger-aside 2.png";
import NumberTicker from "@/components/magicui/number-ticker";
import TypingAnimation from "@/components/magicui/typing-animation";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import ShimmerButton from "@/components/magicui/shimmer-button";
import ImageCard from "@/components/cards/ImageCard";
import { AllProjects } from "../constrains/MockupProjects";
import Link from "next/link";
import { Mail, PhoneCall, Telescope } from "lucide-react";

export default function Homepage({ changeTab }: { changeTab: any }) {
  const router = useRouter();
  const HandleRoute = () => {
    router.push("#contact");
  };

  return (
    <section>
      <section className="my-10 container">
        <h1 className="text-center font-bold uppercase leading-relaxed">
          Crafting Innovative & User-Centric Web Experiences with{" "}
          <span className="text-primaryColor">
            <TypingAnimation text="JENZY" />
          </span>
        </h1>
        <article
          aria-label="home-intro"
          className="text-center font-normal text-gray-400 my-5 md:text-base text-xs"
        >
          I specialize in transforming ideas into digital experiences that not
          only look amazing but also drive results. With a deep understanding of
          both design and user experience, I craft websites that are not just
          visually appealing, but also intuitive and easy to navigate.
        </article>
        <div className="flex items-center justify-center mt-10">
          <ShinyButton text="GET IN TOUCH" onClick={HandleRoute} />
        </div>
        <section className="grid lg:grid-cols-5 my-10 justify-center items-center">
          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#00E7E7] p-1 rounded-xl lg:col-span-2 w-full">
            <div className="bg-foreground w-full h-full rounded-lg p-6">
              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col gap-1 justify-center items-center">
                  <p>
                    <NumberTicker
                      value={25}
                      className="text-white text-4xl font-bold"
                    />
                  </p>
                  <p className="text-xl font-bold">PROJECTS</p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <NumberTicker
                    value={12}
                    className="text-white text-4xl font-bold"
                  />
                  <p className="text-xl font-bold">SKILLS</p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <NumberTicker
                    value={4}
                    className="text-white text-4xl font-bold"
                  />
                  <p className="text-xl font-bold">LAUNCHED</p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-10 lg:col-span-3 lg:block hidden relative">
            <Image priority src={profile} alt="profile-images" />
            <div className="backdrop-saturate-100 bg-gradient-to-t from-foreground/70 w-full h-full z-20 absolute top-0"></div>
          </div>
        </section>
      </section>
      <section aria-label="skills in VelocityScroll" className="my-20">
        <VelocityScroll
          text="uxui/designer developer next app astro "
          default_velocity={1}
          className="font-display italic uppercase text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </section>
      <section aria-label="projects" className="container">
        <section className="grid sm:grid-cols-4 gap-3 items-center">
          <div className="col-span-3">
            <h2 className="uppercase font-bold text-primaryColor">
              the lasted project
            </h2>
            <article className="text-gray-400 text-lg">
              Every project I take on is an opportunity to blend creativity with
              strategy, transforming concepts into digital experiences that
              captivate and convert.
            </article>
          </div>
          <div className="cols-span-1 flex justify-end">
            <ShimmerButton
              onClick={() => {
                if (typeof changeTab === "function") {
                  changeTab("projects");
                }
              }}
            >
              All projects
            </ShimmerButton>
          </div>
        </section>
        <section aria-label="project-list" className="py-10">
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-5">
            {AllProjects.slice(0, 4).map((item) => (
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
      <section
        aria-label="experiences"
        className="relative my-10 bg-[url('/asset/images/background.jpg')]"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 items-start gap-5 container px-0">
          <Image
            priority
            src={profile}
            alt="profile-images"
            className="w-full h-full scale-x-[-1] object-cover md:block hidden"
          />
          <div className="p-5">
            <h3 className="text-primaryColor font-bold uppercase">
              My expertise{" "}
            </h3>
            <p className="text-lg">As an Frontend developer + UX/UI designer</p>
            <div className="my-10 flex flex-col gap-3">
              <p className="md:text-7xl sm:text-5xl text-4xl uppercase font-extrabold italic lightShadowText">
                figma
              </p>
              <p className="md:text-7xl sm:text-5xl text-4xl uppercase font-extrabold italic lightShadowText">
                next.js app
              </p>
              <p className="md:text-7xl sm:text-5xl text-4xl uppercase font-extrabold italic lightShadowText">
                react.js
              </p>
              <p className="md:text-7xl sm:text-5xl text-4xl uppercase font-extrabold italic lightShadowText">
                tailwind
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20 container">
        <article className="text-center md:text-4xl text-xl font-bold leading-relaxed uppercase">
          &quot;Design isn&apos;t just about how it looks, but how it works. I
          bring together the art of user experience and the science of front-end
          development to create seamless, intuitive, and visually compelling
          digital solutions.&quot;
        </article>
      </section>
      <section className="container my-10" id="contact">
        <ShinyButton text="GET IN TOUCH!" className="tracking-wider" />
        <section className="grid md:grid-cols-2 my-20">
          <div className="flex flex-col gap-3">
            <p className="text-5xl font-bold">
              Interesting to in{" "}
              <span className="px-3 bg-white rounded-lg text-foreground">
                work
              </span>{" "}
              together?
            </p>
            <p className="text-lg">
              Showcasing Diverse Expertise and Innovative Solutions
            </p>
          </div>
          <div className="w-1/2 mx-auto">
            <div className="flex flex-col gap-5">
              <Link
                href={"/"}
                className="flex justify-start items-center gap-5"
              >
                <Mail /> mr.lengseng@gmail.com
              </Link>
              <Link
                href={"/"}
                className="flex justify-start items-center gap-5"
              >
                <Telescope /> (+855) 113 421 9
              </Link>
              <Link
                href={"/"}
                className="flex justify-start items-center gap-5"
              >
                <PhoneCall /> (+855) 113 421 9
              </Link>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
