"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "btn-text relative z-10 inline-flex items-center justify-center overflow-hidden cursor-pointer select-none whitespace-nowrap px-6 text-white transition-colors duration-250",
  {
    variants: {
      color: {
        default: "",
        primary: "bg-navy hover:bg-slate-blue",
        secondary: "bg-secondary-pattern gradient-secondary",
        tertiary: "bg-tertiary-pattern gradient-tertiary",
      },
      size: {
        default: "h-12 rounded-[1.75rem] xl:h-14",
        large: "h-14 rounded-[2rem] xl:h-16",
      },
    },
    defaultVariants: {
      color: "default",
      size: "default",
    },
  }
);

type LinkProps = React.ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof buttonVariants>;

export const Link = (props: LinkProps) => {
  const { className, color, size, ...restProps } = props;

  return (
    <a
      className={cn(buttonVariants({ color, size, className }))}
      {...restProps}
    />
  );
};
