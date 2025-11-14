import { ButtonVariants } from "@/components/Button";
import { ComponentProps } from "react";

export interface PillProps {
  title: string
}

type SizeVariants = NonNullable<ButtonVariants["size"]>;
type ShapeVariants = NonNullable<ButtonVariants["shape"]>;

export interface ButtonProps extends ComponentProps<"button"> {
  size?: SizeVariants
  shape?: ShapeVariants
}