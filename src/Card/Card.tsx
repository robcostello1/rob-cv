import { ReactNode } from "react";
import classNames from "classnames";

import classes from "./Card.module.css";

export interface CardProps {
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  isSkeleton?: boolean;
  subheader?: ReactNode;
  variant?: "mini";
}

const Card = ({
  children,
  footer,
  header,
  isSkeleton,
  subheader,
  variant,
}: CardProps) => {
  return (
    <div className={classNames(classes.root, isSkeleton && classes.skeleton)}>
      {header && (
        <header className={classes.header}>
          <h3 className={classNames(variant === "mini" && "para")}>{header}</h3>
          {subheader && <p className={classes.subheader}>{subheader}</p>}
        </header>
      )}

      <div className={classes.content}>{children}</div>

      {footer && <footer className={classes.footer}>{footer}</footer>}
    </div>
  );
};

export default Card;
