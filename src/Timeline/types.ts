import { ReactNode } from "react";

export interface TimeLineItem {
  achievements?: string[];
  date?: { start: string; end?: string };
  description?: string;
  expandedOffset?: number;
  icon?: string;
  id: string;
  isActive?: boolean;
  title: string;
  stub?: boolean;
  skills?: { name: string; icon: ReactNode }[];
  onClick?: () => void;
}
