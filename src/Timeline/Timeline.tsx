import { useState } from "react";
import classes from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";
import { TimeLineItem } from "./types";
import Modal from "../Modal/Modal";

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

      <Modal
        layoutId={activeItem ? activeItem : null}
        onClick={() => setActiveItem(null)}
      >
        {items?.find((item) => item.id === activeItem)?.description}
      </Modal>
    </div>
  );
};

export default Timeline;
