import Link from "next/link";
import clsx from "clsx";

const variantStyles: any = {
  primaryClassName: "text-white bg-roze hover:bg-black",
  secondaryClassName: "text-black",
};
const sizeStyles: any = {
  lgClassName: "px-8 py-2 text-md",
};

export const Button = ({
  children,
  variant = "primary",
  className,
  href,
  size = "lg",
  ...props
}: any) => {
  className = clsx(
    "font-medium relative leading-normal inline-flex items-center justify-center duration-300 ease-in-out outline-none group",
    variantStyles[`${variant}ClassName`],
    sizeStyles[`${size}ClassName`],
    className
  );
  return href ? (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
