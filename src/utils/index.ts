import { twMerge } from "tailwind-merge";
import { ClassValue } from "clsx";
import { cx } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs));
}
