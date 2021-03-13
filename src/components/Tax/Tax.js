import classes from './Tax.module.scss';
import {ReactComponent as CheckIcon} from '../../check.svg'

const Tax = ({id}) => {
  return (
    <li className={classes.Tax}>
      <input type="checkbox" id={`checkbox-${id}`}/>
      <label htmlFor={`checkbox-${id}`} tabIndex={0}>
        <CheckIcon width="14" height="11"/>
      </label>
      <span>78 000 рублей <span>в 1-ый год</span></span>
    </li>
  )
}

export default Tax;
