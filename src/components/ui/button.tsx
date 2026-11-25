import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { classes } from "@/lib/classes";

type Variant = "primary" | "secondary";
type ButtonBaseProps =
  | (ComponentPropsWithoutRef<"button"> & { href?: never })
  | (Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string });
type ButtonProps = ButtonBaseProps & { variant?: Variant };

/** A destination renders as a link; an action renders as a native button. */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant = "primary", className, children, ...linkProps } = props;
    return (
      <Link className={classes("editorial-button", `editorial-button--${variant}`, className)} {...linkProps}>
        {children}
      </Link>
    );
  }
  const { variant = "primary", className, children, type = "button", ...buttonProps } = props;
  return (
    <button type={type} className={classes("editorial-button", `editorial-button--${variant}`, className)} {...buttonProps}>
      {children}
    </button>
  );
}

export function PrimaryButton(props: ButtonBaseProps) {
  return <Button {...props} variant="primary" />;
}

export function SecondaryButton(props: ButtonBaseProps) {
  return <Button {...props} variant="secondary" />;
}
