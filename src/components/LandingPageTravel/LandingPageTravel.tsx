import Button from "../../genericComponents/Button/Button";
import style from "./LandingPageTravel.module.css";

function LandingPageTravel() {
  return (
    <article className={style.background}>
      <h2>Travel With True Freedom</h2>
      <h2>By Investing In A Second Citizenship</h2>
      <p>
        Open the door to a truely free world for you and your family by
        zero-risk Citizenship by Investment program
      </p>
      <Button text="Learn More" />
    </article>
  );
}

export default LandingPageTravel;
