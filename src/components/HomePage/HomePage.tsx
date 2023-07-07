import CountrySlider from "../CountrySlider/CountrySlider";
import LandingPageEducation from "../LandingPageEducation/LandingPageEducation";
import LandingPageGlobal from "../LandingPageGlobal/LandingPageGlobal";
import LandingPageTravel from "../LandingPageTravel/LandingPageTravel";
import Reason from "../Reason/Reason";
import style from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={style.pageContainer}>
      <section className={style.pageSection}>
        <LandingPageTravel />
      </section>
      <section className={style.pageSection}>
        <LandingPageEducation />
      </section>
      <section className={style.pageSection}>
        <LandingPageGlobal />
      </section>
      <section className={style.pageSection}>
        <Reason />
      </section>
      <section className={style.pageSection}>
        <CountrySlider />
      </section>
    </main>
  );
}

export default HomePage;
