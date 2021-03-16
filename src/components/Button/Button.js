import classes from './Button.module.scss'

const Button = ({text, onTogglePopupClick, isOpen}) => {
  let modClass = classes.button__start

  if (isOpen) {
    modClass = classes.button__add
  }

  return (
    <button
      className={`${classes.button} ${modClass}`}
      onClick={() => onTogglePopupClick()}
    >
      {text}
    </button>
  )
}
export default Button;
