import React from "react";
import { ButtonProps, SocialAuthButtonProps } from "@/app/types/reusable.type";

const Button: React.FC<
  ButtonProps & { rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full" }
> = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  onClick,
  onMouseEnter,
  onFocus,
  className = "flex justify-center grow",
  rounded = "lg",
  "aria-label": ariaLabel,
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center text-sm justify-center font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ";

  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const variantStyles = {
    primary:
      "hover:bg-gray-900 text-white transition-all px-4 disabled:bg-sand-40 disabled:text-dark active:text-white focus:text-white text-nowrap bg-dark hover:bg-[rgba(0,0,0,.2)]",
    secondary:
      "bg-yellow1 text-dark hover:bg-yellow-600 hover:text-white transition-colors",
    blue: "bg-primary text-white hover:bg-blue-700 transition-colors",
    outline:
      "border border-dark hover:bg-dark hover:text-white text-dark focus:ring-gray-500 transition-colors",
    ghost:
      "bg-transparent text-dark hover:bg-gray-100 hover:text-gray-700 focus:ring-gray-500 transition-colors",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 transition-colors",
  };

  const sizeStyles = {
    sm: "px-3 py-[4px] text-sm gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-xl gap-2",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const roundedKey = rounded as keyof typeof roundedStyles;
  const variantKey = variant as keyof typeof variantStyles;
  const sizeKey = size as keyof typeof sizeStyles;

  const buttonClasses = `${baseStyles} ${roundedStyles[roundedKey]} ${variantStyles[variantKey]} ${sizeStyles[sizeKey]} ${widthStyles} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      disabled={disabled || loading}
      className={buttonClasses}
      aria-label={ariaLabel}
      {...rest}
    >
      {loading && <h2 className="w-4 h-4 animate-spin">⏳Loading...</h2>}
      {!loading && icon && iconPosition === "left" && (
        <span className="flex items-center justify-center">{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === "right" && (
        <span className="flex items-center justify-center">{icon}</span>
      )}
    </button>
  );
};

export default Button;
