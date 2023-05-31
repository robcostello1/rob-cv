import { ReactNode } from "react";
import classNames from "classnames";

import classes from "./Card.module.css";

export interface CardProps {
  children: ReactNode;
  header?: ReactNode;
  subheader?: ReactNode;
  isSkeleton?: boolean;
}

const Card = ({ children, header, subheader, isSkeleton }: CardProps) => {
  return (
    <div className={classNames(classes.root, isSkeleton && classes.skeleton)}>
      {header && (
        <header className={classes.header}>
          <h3 className="para">{header}</h3>
          <p>{subheader}</p>
        </header>
      )}

      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Card;
