import { VariantProps } from "tailwind-variants";
import { input } from "../../utils/base";
import { InputHTMLAttributes } from "react";

export interface InputProps
  extends VariantProps<typeof input>,
    InputHTMLAttributes<HTMLInputElement> {}
