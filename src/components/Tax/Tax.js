import {useState} from 'react';
import classes from './Tax.module.scss';
import {ReactComponent as CheckIcon} from '../../check.svg'
import {addSpace, choiceEnding} from "../../utils";

const Tax = ({item, index}) => {
  const [isCheck, setIsCheck] = useState(true)

  const handleCheckboxClick = () => {
    setIsCheck(!isCheck)
  }

  return (
    <li className={classes.tax}>
      <input type="checkbox" id={`checkbox-${index}`} onChange={() => handleCheckboxClick()} checked={isCheck}/>
      <label htmlFor={`checkbox-${index}`} tabIndex={0}>
        <CheckIcon width="14" height="11"/>
      </label>
      <span>{`${addSpace(item)} рублей`} <span>{choiceEnding(index + 1)}</span></span>
    </li>
  )
}

export default Tax;
