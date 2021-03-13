import classes from './Button.module.scss'

const Button = ({text, onTogglePopupClick, isOpen}) => {
  let modClass = classes.Button__start

  if (isOpen) {
    modClass = classes.Button__add
  }

  return (
    <button
      className={`${classes.Button} ${modClass}`}
      onClick={() => onTogglePopupClick()}
    >
      {text}
    </button>
  )
}
export default Button;
