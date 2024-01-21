"use client";

import React from "react";
import { motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: { opacity: 0, y: -15 },
};

type FadeProps<T extends { as: keyof JSX.IntrinsicElements }> = {
  as: T["as"];
  withMargin?: boolean;
} & React.ComponentPropsWithoutRef<T["as"]>;

export function Fade<T extends { as: keyof JSX.IntrinsicElements }>(
  props: FadeProps<T>
) {
  const { as, withMargin = false, ...restProps } = props;

  //@ts-ignore
  const Component = motion[as];
  const margin = withMargin ? "-125px 0px" : "";

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 1,
      }}
      viewport={{ once: true, margin }}
      {...restProps}
    />
  );
}
