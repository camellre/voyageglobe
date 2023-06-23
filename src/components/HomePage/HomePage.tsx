import LandingPageTravel from "../LandingPageTravel/LandingPageTravel";
import style from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={style.pageContainer}>
      <section>
        <LandingPageTravel />
      </section>
    </main>
  );
}

export default HomePage;
