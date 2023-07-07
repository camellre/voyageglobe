import LandingPageEducation from "../LandingPageEducation/LandingPageEducation";
import LandingPageGlobal from "../LandingPageGlobal/LandingPageGlobal";
import LandingPageTravel from "../LandingPageTravel/LandingPageTravel";
import Reason from "../Reason/Reason";
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
      <section>
        <LandingPageGlobal />
      </section>
      <section>
        <Reason />
      </section>
    </main>
  );
}

export default HomePage;
