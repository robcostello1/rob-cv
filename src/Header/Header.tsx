import { ReactNode } from "react";

import classes from "./Header.module.css";

interface HeaderProps {
  children: ReactNode;
  subheader?: ReactNode;
}

const Header = ({ children, subheader }: HeaderProps) => (
  <header className={classes.root}>
    <h1>{children}</h1>
    <p>{subheader}</p>
  </header>
);

export default Header;
