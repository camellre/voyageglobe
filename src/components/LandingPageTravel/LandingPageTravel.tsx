import Button from "../../genericComponents/Button/Button";
import style from "./LandingPageTravel.module.css";
import passport from "../../assets/passport_1.webp";

function LandingPageTravel() {
  return (
    <article className={style.background}>
      <div className={style.container}>
        <h2 className={style.title}>
          Travel With True Freedom
          {/* <br />
          By Investing In A Second Citizenship */}
        </h2>
        <p className={style.subTitle}>
          Open the door to a truely free world for you and your family with
          zero-risk Citizenship by Investment Program
        </p>
        <Button text="Learn More" containerStyle={style.button} />
        <img src={passport} alt="" className={style.passportImage} />
      </div>
    </article>
  );
}

export default LandingPageTravel;
