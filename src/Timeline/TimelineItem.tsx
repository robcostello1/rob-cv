import classes from "./Timeline.module.css";
import Card from "../Card";
import { TimeLineItem as TimeLineItemProps } from "./types";

const TimelineItem = ({ title, date }: TimeLineItemProps) => (
  <div className={classes.item}>
    <Card header={title} subheader={date}>
      {null}
    </Card>
  </div>
);

export default TimelineItem;
