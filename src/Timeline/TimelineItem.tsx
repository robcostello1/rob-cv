import { ReactNode } from "react";

import classes from "./Timeline.module.css";

interface TimelineItemProps {
  children: ReactNode;
}

const TimelineItem = ({ children }: TimelineItemProps) => (
  <div className={classes.item}>{children}</div>
);

export default TimelineItem;
