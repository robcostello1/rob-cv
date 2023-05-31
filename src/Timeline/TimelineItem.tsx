import classes from "./Timeline.module.css";
import Card from "../Card";
import { TimeLineItem as TimeLineItemProps } from "./types";
import { motion } from "framer-motion";

const TimelineItem = ({
  id,
  title,
  date: { start, end },
  description,
  isActive,
  onClick,
}: TimeLineItemProps) => (
  <div className={classes.item}>
    <div className={classes.date}>
      <div>{end}</div>
      <div>{start}</div>
    </div>

    <motion.div layoutId={id}>
      <Card header={title} isSkeleton={isActive}>
        <p className="sub">{description}</p>

        {onClick && (
          <button className={classes.button} onClick={onClick}>
            More
          </button>
        )}
      </Card>
    </motion.div>
  </div>
);

export default TimelineItem;
