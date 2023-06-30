import Button from "../../genericComponents/Button/Button";
import style from "./LandingPageGlobal.module.css";

function LandingPageGlobal() {
  return (
    <article className={style.background}>
      <div className={style.container}>
        <div className={style.card}>
          <h2 className={style.title}>Maximum Global Citizen Flexibility</h2>
          <p className={style.text}>
            Protect your assets and minimize geopolitics and security risks by
            obatining global flexibility
          </p>
          <Button text="Learn More" containerStyle={style.button} />
        </div>
      </div>
    </article>
  );
}

export default LandingPageGlobal;
