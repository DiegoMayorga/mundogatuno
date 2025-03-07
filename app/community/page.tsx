import Image from "next/image";

import catIcon from "@/assets/icons/cat.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.scss";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared love: <span className={classes.highlight}>Cats</span>
        </h1>
        <p>Join our community and share your favorite pictures!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={catIcon} alt="Un gato jugando" />
            <p>Share & discover cat images</p>
          </li>
          <li>
            <Image src={communityIcon} alt="Un gato en su computador" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="Un gato volando"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
