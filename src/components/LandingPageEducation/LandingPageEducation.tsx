import style from "./LandingpageEducation.module.css";
import educationImage from "../../assets/classroom.webp";

function LandingPageEducation() {
  return (
    <article className={style.container}>
      <img src={educationImage} alt="" className={style.image} />
    </article>
  );
}

export default LandingPageEducation;
