import React from "react";
import { ButtonProps, SocialAuthButtonProps } from "@/app/types/reusable.type";

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left", // "left" | "right"
  onClick,
  className = "flex justify-center grow",
}) => {
  const baseStyles =
    "inline-flex items-center text-sm justify-center font-medium cursor-pointer rounded-lg disabled:opacity-50 disabled:cursor-not-allowed ";
  const variantStyles = {
    primary:
      "hover:bg-gray-900 text-white transition-all  px-4 disabled:bg-sand-40 disabled:text-dark active:text-dark focus:text-dark text-nowrap",
    secondary: "bg-yellow1 text-dark ",
    outline:
      "border border-dark hover:bg-white text-dark focus:ring-gray-500 ",
    ghost: "bg-transparent text-dark hover:text-gray-500 focus:ring-gray-500",
    danger: "bg-red-600 text-white focus:ring-red-500",
  };

  const sizeStyles = {
    sm: "px-3 py-[4px] text-sm gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-xl gap-2",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
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

export const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  provider = "Google",
  onClick,
  icon,
  className = "kt-btn kt-btn-outline justify-center",
  disabled = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md transition-all duration-200";
  const disabledStyles = "opacity-50 cursor-not-allowed";
  const buttonClasses = `${baseStyles} ${disabled ? disabledStyles : ""
    } ${className}`;

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      aria-disabled={disabled}
    >
      {icon && (
        <span className="size-3.5 shrink-0 flex items-center justify-center">
          {typeof icon === "string" ? (
            <img src={icon} alt="provider logo" />
          ) : (
            icon
          )}
        </span>
      )}
      <span>Use {provider}</span>
    </button>
  );
};
