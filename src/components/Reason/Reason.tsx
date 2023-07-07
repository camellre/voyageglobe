import style from "./Reason.module.css";
import video from "../../assets/pexels-vlada-karpovich-7429830-1280x720-25fps.mp4";
import Button from "../../genericComponents/Button/Button";

function Reason() {
  return (
    <article className={style.container}>
      <div className={style.card}>
        <h2 className={style.title}>Why You Need A Second Citizenship</h2>
        <p className={style.text}>
          In today's rapidly changing world, there are many reasons why
          high-net-worth individuals should consider an alternative citizenship,
          including but not limited to security, travel convenience, tax and
          financial planning, and geopolitical situation. We are assisting our
          clients to obtain a second citizenship through investment without
          affecting their lifestyle. In these Citizenship by Investment
          projects, there is no need to give up your original nationality.
          Without language and residence requirements, you can legally obtain a
          second citizenship and a new passport in a short time.
        </p>
        <Button text="Learn More" containerStyle={style.button} />
      </div>
      <video src={video} className={style.video} />
    </article>
  );
}

export default Reason;
