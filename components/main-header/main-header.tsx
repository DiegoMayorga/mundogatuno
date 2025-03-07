import Link from "next/link";

import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.scss";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={LogoImg} alt="A plate with food on it" priority />
          Mundo Gatuno
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink
                startsWith
                navPath="meals"
              >
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                navPath="community"
              >
                Comunidad
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
