import { ReactNode } from "react";

import classes from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  items: ReactNode[];
}

const Timeline = ({ items }: TimelineProps) => (
  <div className={classes.root}>
    {items.map((item) => (
      <TimelineItem>{item}</TimelineItem>
    ))}
  </div>
);

export default Timeline;
