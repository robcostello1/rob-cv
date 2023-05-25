import classes from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";
import { TimeLineItem } from "./types";

interface TimelineProps {
  items: TimeLineItem[];
}

const Timeline = ({ items }: TimelineProps) => (
  <div className={classes.root}>
    {items.map((item) => (
      <TimelineItem key={item.id} {...item} />
    ))}
  </div>
);

export default Timeline;
