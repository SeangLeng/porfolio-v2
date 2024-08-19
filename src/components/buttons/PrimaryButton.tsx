"use client";

import React from "react";
import Link from "next/link";

import { Button } from "../ui/button";

export interface ButtonProps {
  route: string;
  text?: string;
  variant?:
    | "destructive"
    | "outline"
    | "default"
    | "secondary"
    | "ghost"
    | "link";
  disable?: boolean;
  className?: string | undefined;
  onClick?: () => void;
}

export default function PrimaryButton({
  variant = "default",
  className,
  route,
  text = "Button",
  disable = false,
  onClick,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disable}
      variant={variant}
      className={className}
      asChild
    >
      <Link href={route}>{text}</Link>
    </Button>
  );
}
