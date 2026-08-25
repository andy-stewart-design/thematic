export const themes = [
  { label: "Inherit", value: undefined },
  { label: "Blue", value: "blue" },
  { label: "Lilac", value: "lilac" },
  { label: "Green", value: "green" },
] as const;

export const schemes = [
  { label: "Inherit", value: undefined },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "Inverted", value: "inverted" },
] as const;

export const scopes = [
  { label: "Inherit", value: undefined },
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
  { label: "Tertiary", value: "tertiary" },
] as const;

export type ThemeOption = (typeof themes)[number]["value"];
export type SchemeOption = (typeof schemes)[number]["value"];
export type ScopeOption = (typeof scopes)[number]["value"];
export type Option = string | undefined;
