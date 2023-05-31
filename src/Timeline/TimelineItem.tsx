import { motion } from "framer-motion";
import { Tooltip } from "react-tippy";

import Card from "../Card";
import { TimeLineItem as TimeLineItemProps } from "./types";

import classes from "./Timeline.module.css";
import classNames from "classnames";
import { EmployerDetail } from "./EmployerModal/EmployerModal";

const EXPANDED = true;

const TimelineItem = ({
  id,
  title,
  date,
  description,
  expandedOffset,
  isActive,
  skills,
  stub,
  onClick,
  ...item
}: TimeLineItemProps) => (
  <div
    className={classes.item}
    style={{
      marginTop:
        EXPANDED && expandedOffset ? `${expandedOffset}rem` : undefined,
    }}
  >
    {date && (
      <div className={classes.date}>
        <div>{date.end}</div>
        <div>{date.start}</div>
      </div>
    )}

    <motion.div layoutId={id}>
      <Card
        header={title}
        footer={
          skills && onClick && !stub && !EXPANDED ? (
            <div className={classes["item-footer"]}>
              <div className={classes["item-skills"]}>
                {skills?.map((skill) => (
                  // @ts-expect-error // TODO
                  <Tooltip
                    html={
                      <div
                        className={classNames(
                          classes["skill-tooltip"],
                          "small"
                        )}
                      >
                        {skill.name}
                      </div>
                    }
                    position="bottom"
                  >
                    {skill.icon}
                  </Tooltip>
                ))}
              </div>

              {onClick && !stub && (
                <button className={classes.button} onClick={onClick}>
                  More
                </button>
              )}
            </div>
          ) : undefined
        }
        isSkeleton={isActive}
        variant={!EXPANDED ? "mini" : undefined}
      >
        {!EXPANDED ? (
          <p className="sub">{description}</p>
        ) : (
          <EmployerDetail
            item={{
              id,
              title,
              date,
              description,
              skills,
              ...item,
            }}
          />
        )}
      </Card>
    </motion.div>
  </div>
);

export default TimelineItem;
