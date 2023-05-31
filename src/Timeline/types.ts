export interface TimeLineItem {
  id: string;
  title: string;
  description?: string;
  date: {
    start: string;
    end?: string;
  };
  icon?: string;
  onClick?: () => void;
  isActive?: boolean;
}
