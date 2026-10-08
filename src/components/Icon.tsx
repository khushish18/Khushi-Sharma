import React from "react";
import * as LucideIcons from "lucide-react";

export type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = "w-5 h-5",
  size,
  color,
}) => {
  const iconsMap = LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ className?: string; size?: number; color?: string }>
  >;
  const IconComponent = iconsMap[name] || LucideIcons.Code2;

  return <IconComponent className={className} size={size} color={color} aria-hidden="true" />;
};
