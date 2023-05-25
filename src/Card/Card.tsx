import { ReactNode } from "react";

import classes from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  header?: ReactNode;
  subheader?: ReactNode;
}

const Card = ({ children, header, subheader }: CardProps) => {
  return (
    <div className={classes.root}>
      {header && (
        <header className={classes.header}>
          <h3>{header}</h3>
          <p>{subheader}</p>
        </header>
      )}

      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Card;
