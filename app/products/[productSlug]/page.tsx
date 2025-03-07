import Image from "next/image";
import classes from "./page.module.scss";

export default function MealDetailsPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src="test" alt="test" fill />
        </div>
        <div className={classes.headerText}>
          <h1>Title</h1>
          <p className={classes.creator}>
            by <a href={`mailto:`}>Creator</a>
          </p>
          <p className={classes.summary}>Resumen</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: "",
          }}
        ></p>
      </main>
    </>
  );
}
