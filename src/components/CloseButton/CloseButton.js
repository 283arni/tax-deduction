import {ReactComponent as CloseIcon} from "../../close.svg";
import classes from './CloseButton.module.scss'

const CloseButton = ({onTogglePopupClick}) => {
  return (
    <button
      className={classes.closeButton}
      onClick={() => onTogglePopupClick()}
      type="button"
    >
      <CloseIcon width="18" height="18"/>
    </button>
  )
}

export default CloseButton;
