import { tv } from "tailwind-variants";

export const button = tv({
  base: "flex items-center font-medium jsutify-center gap-x-2 text-gray-100 active:scale-[98%] w-max active:opacity-90 duration-200",
  variants: {
    variant: {
      primary:
        "bg-blue-500 shadow-blue-100 from-blue-500 via-blue-300 to-indigo-500",
      secondary:
        "bg-violet-500 shadow-violet-100 from-violet-500 via-violet-300 to-purple-500",
      success:
        "bg-lime-500 shadow-lime-100 from-lime-500 via-lime-300 to-green-500",
      danger:
        "bg-pink-500 shadow-pink-100 from-pink-500 via-pink-300 to-rose-500",
      warning:
        "bg-yellow-500 shadow-yellow-100 from-yellow-500 via-yellow-300 to-amber-500",
      link: "bg-transparent underline undeline-offset-2 text-blue-600",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-5 py-2",
      lg: "px-6 py-3",
      xl: "px-8 py-4 text-lg",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded",
      md: "rounded-lg",
      lg: "rounded-xl",
      xl: "rounded-2xl",
      full: "rounded-full",
    },
    loading: {
      true: "opacity-60 active:scale-100 active:opacity-100",
    },
    bg: {
      solid: "whatever",
      gradient: "bg-gradient-to-r",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow",
      md: "shadow-lg",
      xl: "shadow-xl",
      xxl: "shadow-2xl",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    rounded: "md",
    shadow: "md",
    bg: "gradient",
  },
});

export const input = tv({
  base: "focus-within:ring-2 text-gray-400 focus-within:outline-none w-full focus-within:border-gray-400 focus-within:ring-offset-2 border border-gray-300 duration-300",
  variants: {
    sizes: {
      sm: "px-3 py-2 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3",
      xl: "px-4 py-3 text-lg",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded",
      md: "rounded-lg",
      lg: "rounded-xl",
      xl: "rounded-2xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    sizes: "md",
    rounded: "md",
  },
});

export const flexbox = tv({
  base: "flex gap-2 w-full",
  variants: {
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      evenly: "justify-evenly",
      around: "justify-around",
      stretch: "justify-stretch",
    },
    items: {
      baseline: "items-baseline",
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
  },
});
