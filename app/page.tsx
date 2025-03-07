import ImageSlideshow from "@/components/images/image-slideshow";
import classes from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={classes.hero}>
          <h1>MundoGatuno</h1>
          <p>Arena para gatos Calabaza.</p>
        </div>
        <div className={classes.cta}>
          <Link href="/community">Unete a la comunidad</Link>
        </div>
      </header>
    </>
  );
}
