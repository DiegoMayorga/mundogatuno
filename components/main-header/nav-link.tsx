"use client";

import Link from "next/link";
import classes from "./nav-link.module.scss";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  startsWith?: boolean;
  navPath: string;
}

const NavLink:React.FC<NavLinkProps> = ({ children, startsWith, navPath }) => {
  const path = usePathname();
  const pathName = startsWith
    ? path.startsWith(`/${navPath}`)
    : path === `/${navPath}`;
  return (
    <Link
      href={`/${navPath}`}
      className={pathName ? `${classes.link} ${classes.active}` : classes.link}
    >
      {children}
    </Link>
  );
};

export default NavLink;
