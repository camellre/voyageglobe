import style from "./NavBar.module.css";
import logo from "../../assets/voyageglobe_logo_new_color_no_padding.webp";
import Button from "../../genericComponents/Button/Button";
function NavBar() {
  return (
    <nav className={style.background}>
      <div className={style.navBar}>
        <img src={logo} alt="" className={style.logo} />
        <div className={style.menu}>
          <a href="#">Home</a>
          <a href="#">Citizenship</a>
          <a href="#">Service</a>
          <a href="#">About</a>
        </div>
        <Button text="Contact Us" containerStyle={style.contactButton} />
      </div>
    </nav>
  );
}

export default NavBar;
