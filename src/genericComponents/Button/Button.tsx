import style from "./Button.module.css";

interface ButtonProps {
  text: string;
  containerStyle?: string;
  onClick?: () => void;
}

function Button({ text, containerStyle, onClick }: ButtonProps) {
  return (
    <div className={containerStyle}>
      <button onClick={onClick} className={style.button}>
        {text}
      </button>
    </div>
  );
}

export default Button;
