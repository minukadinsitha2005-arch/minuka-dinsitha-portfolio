import type { ComponentPropsWithoutRef } from "react";
import { classes } from "@/lib/classes";

type ContentContainerProps = ComponentPropsWithoutRef<"div"> & {
  width?: "wide" | "reading";
};

export function ContentContainer({ width = "wide", className, ...props }: ContentContainerProps) {
  return (
    <div
      className={classes("mx-auto w-full px-6 sm:px-10 lg:px-16", width === "wide" ? "max-w-[90rem]" : "max-w-[54rem]", className)}
      {...props}
    />
  );
}
