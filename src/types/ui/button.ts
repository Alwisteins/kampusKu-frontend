import { VariantProps } from "tailwind-variants";
import { button } from "../../utils/base";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends VariantProps<typeof button>,
    ButtonHTMLAttributes<HTMLButtonElement> {}
