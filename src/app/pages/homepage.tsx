"use client";

import ShinyButton from "@/components/magicui/shiny-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import profile from "@/asset/images/positive-asian-man-pointing-finger-aside 2.png";
import NumberTicker from "@/components/magicui/number-ticker";
import TypingAnimation from "@/components/magicui/typing-animation";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Homepage() {
  const router = useRouter();
  const handleRoute = () => {
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
        <div className="flex items-center justify-center mt-10 container">
          <ShinyButton text="GET IN TOUCH" onClick={handleRoute} />
        </div>
        <section className="grid lg:grid-cols-5 my-10 justify-center items-center container">
          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#00E7E7] p-1 rounded-xl lg:col-span-2 gradient-box">
            <div className="bg-foreground h-full rounded-lg p-6">
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
      <section className="my-20">
        <VelocityScroll
          text="uxui/designer developer next app astro "
          default_velocity={1}
          className="font-display italic uppercase text-center text-4xl font-bold tracking-[-0.02em] text-gray-300 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </section>
    </section>
  );
}
