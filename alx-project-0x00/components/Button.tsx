import { ButtonProps } from "@/interfaces";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils/lib";

const variants = cva("rounded w-fit px-4 py-2 focus-within:outliine", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-lg px-5",
      lg: "text-2xl px-5",
    },
    shape: {
      sm: "rounded-sm",
      md: "rounded-md",
      full: "rounded-full",
    },
  },
});

export type ButtonVariants = VariantProps<typeof variants>;

const Button: React.FC<ButtonProps> = ({
  size,
  shape,
  className,
  ...props
}) => {
  return (
    <button className={cn(variants({ size, shape, className }))} {...props} />
  );
};

export default Button;
