"use client";

import { motion, type AnimationProps } from "framer-motion";

import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;
interface ShinyButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}
const ShinyButton = ({
  text = "shiny-button",
  className,
  onClick,
}: ShinyButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      {...animationProps}
      className={cn(
        "relative rounded-full px-10 py-3 font-medium border-primaryColor border backdrop-blur-lg transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--white)/20%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--white)/30%)]",
        className
      )}
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide dark:font-light"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--white)) calc(var(--x) + 20%),transparent 30%),hsl(var(--white)) 100%))",
        }}
      >
        {text}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0),",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--white)/10%)_calc(var(--x)+20%),hsl(var(--white)/50%)_calc(var(--x)+25%),hsl(var(--white)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
