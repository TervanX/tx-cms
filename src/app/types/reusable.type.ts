import { z } from "zod";
import React from "react";

export const ButtonVariantSchema = z.enum([
  "primary",
  "secondary",
  "outline",
  "ghost",
  "danger",
]);

export const ButtonSizeSchema = z.enum(["sm", "md", "lg"]);

export const ButtonTypeSchema = z.enum(["button", "submit", "reset"]);

export const IconPositionSchema = z.enum(["left", "right"]);

export const ButtonPropsSchema = z.object({
  children: z.custom<React.ReactNode>(),
  type: ButtonTypeSchema.optional(),
  variant: ButtonVariantSchema.optional(),
  size: ButtonSizeSchema.optional(),
  fullWidth: z.boolean().optional(),
  disabled: z.boolean().optional(),
  loading: z.boolean().optional(),
  icon: z.custom<React.ReactNode>().optional(),
  iconPosition: IconPositionSchema.optional(),
  onClick: z
    .custom<React.MouseEventHandler<HTMLButtonElement>>()
    .optional(),
  className: z.string().optional(),
});

export const SocialAuthButtonVariantSchema = z.enum([
  "outline",
  "solid",
  "ghost",
]);

export const SocialAuthButtonPropsSchema = z.object({
  provider: z.string().optional(),
  icon: z.custom<React.ReactNode>().optional(),
  onClick: z
    .custom<React.MouseEventHandler<HTMLButtonElement>>()
    .optional(),
  variant: SocialAuthButtonVariantSchema.optional(),
  className: z.string().optional(),
  disabled: z.boolean().optional(),
});

export const InputPropsSchema = z.object({
  label: z.string().optional(),
  name: z.string().optional(),
  placeholder: z.string().optional(),
  value: z.string().optional(),
  onChange: z
    .custom<(e: React.ChangeEvent<HTMLInputElement>) => void>()
    .optional(),
  className: z.string().optional(),
  required: z.boolean().optional(),
  error: z.string().optional(),
});

export const PasswordInputPropsSchema = InputPropsSchema;

// Type inference
export type ButtonVariant = z.infer<typeof ButtonVariantSchema>;
export type ButtonSize = z.infer<typeof ButtonSizeSchema>;
export type ButtonType = z.infer<typeof ButtonTypeSchema>;
export type IconPosition = z.infer<typeof IconPositionSchema>;
export type ButtonProps = z.infer<typeof ButtonPropsSchema>;

export type SocialAuthButtonVariant = z.infer<typeof SocialAuthButtonVariantSchema>;
export type SocialAuthButtonProps = z.infer<typeof SocialAuthButtonPropsSchema>;

export type InputProps = z.infer<typeof InputPropsSchema>;
export type PasswordInputProps = z.infer<typeof PasswordInputPropsSchema>;

// Validation functions that apply defaults during parsing
export const validateButtonProps = (props: unknown) => {
  return ButtonPropsSchema.safeParse({
    type: "button",
    variant: "primary",
    size: "md",
    fullWidth: false,
    disabled: false,
    loading: false,
    iconPosition: "left",
    className: "kt-btn kt-btn-primary flex justify-center grow",
    ...(typeof props === "object" && props !== null ? props : {}),
  });
};

export const validateSocialAuthButtonProps = (props: unknown) => {
  return SocialAuthButtonPropsSchema.safeParse({
    provider: "Google",
    href: "#",
    className: "kt-btn kt-btn-outline justify-center",
    disabled: false,
    ...(typeof props === "object" && props !== null ? props : {}),
  });
};

export const validateInputProps = (props: unknown) => {
  return InputPropsSchema.safeParse({
    className: "",
    required: false,
    ...(typeof props === "object" && props !== null ? props : {}),
  });
};

export const validatePasswordInputProps = (props: unknown) => {
  return PasswordInputPropsSchema.safeParse({
    className: "",
    required: false,
    ...(typeof props === "object" && props !== null ? props : {}),
  });
};