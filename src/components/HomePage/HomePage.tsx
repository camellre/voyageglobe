import LandingPageEducation from "../LandingPageEducation/LandingPageEducation";
import LandingPageTravel from "../LandingPageTravel/LandingPageTravel";
import style from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={style.pageContainer}>
      <section>
        <LandingPageTravel />
      </section>
      <section>
        <LandingPageEducation />
      </section>
    </main>
  );
}

export default HomePage;
