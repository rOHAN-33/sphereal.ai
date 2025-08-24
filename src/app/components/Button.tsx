import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg transition-colors duration-200",
  {
    variants: {
      block: {
        true: "w-full flex justify-center items-center",  // full-width button
        false: "",                           // inline button
      },
      intent: {
        primary:
          "border-gradient",
        secondary:
          "bg-gray-100 text-gray-950 hover:bg-gray-300",
        tertiary:
          "bg-gray-800 text-gray-200 hover:bg-gray-700",
      },
    },
    defaultVariants: {
      intent: "primary",
      block: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof classes> {}

export const Button = ({ intent, block, className, children, ...props }: ButtonProps) => {
  return (
    <button className={classes({ intent, block, className })} {...props}>
      {children}
    </button>
  );
};
