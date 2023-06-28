import style from "./LandingpageEducation.module.css";
import educationImage from "../../assets/classroom.webp";
import Button from "../../genericComponents/Button/Button";

function LandingPageEducation() {
  return (
    <article className={style.container}>
      <img src={educationImage} alt="" className={style.image} />
      <div className={style.card}>
        <h2 className={style.title}>
          The Best Education For Your Beloved Family
        </h2>
        <p>
          Invest in the future of your family by accessing the world renowned
          education system
        </p>
        <Button text="Learn More" />
      </div>
    </article>
  );
}

export default LandingPageEducation;
