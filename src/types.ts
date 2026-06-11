import type React from "react";
import type { TextFieldProps } from "@material-ui/core/TextField";
import type uk from "./locales/uk";

export type LanguageCode = "UA" | "EN" | "RU";
export type Locale = typeof uk;

export interface PageProps {
  t: Locale;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
}

export type AppTextFieldProps = TextFieldProps & {
  startIcon?: React.ReactNode;
  passwordToggle?: boolean;
};

export interface LanguageMenuProps {
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface PageHeaderProps extends PageProps {
  logoTo?: string;
}

export interface ChipCardProps {
  number: string;
  label: string;
  numberFontSize?: number;
}

export interface FeatureItemProps {
  text: string;
}

export interface MarketingChip {
  number: string;
  label: string;
  numberFontSize?: number;
}

export interface MarketingPanelContent {
  subtitle: string;
  title: string;
  description: string;
  features: string[];
  chips: MarketingChip[];
}

export interface MarketingPanelProps {
  panel: MarketingPanelContent;
  variant?: "login" | "register";
  className?: string;
}

export interface LoginRightPanelProps {
  t: Locale;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface RegisterFormProps {
  t: Locale;
  selectedSource: string;
  onSourceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
