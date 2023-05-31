import { useState } from "react";

import TimelineItem from "./TimelineItem";
import EmployerModal from "./EmployerModal/EmployerModal";

import { TimeLineItem } from "./types";

import classes from "./Timeline.module.css";

interface TimelineProps {
  items: Omit<TimeLineItem, "onClick" | "isActive">[];
}

const Timeline = ({ items }: TimelineProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className={classes.root}>
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          isActive={activeItem === item.id}
          onClick={() => setActiveItem(item.id)}
          {...item}
        />
      ))}

      <EmployerModal
        item={items.find((item) => item.id === activeItem)}
        onClose={() => setActiveItem(null)}
      />
    </div>
  );
};

export default Timeline;
