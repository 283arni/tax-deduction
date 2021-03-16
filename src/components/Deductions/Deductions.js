import classes from './Deductions.module.scss'
import Tax from "../Tax/Tax";
import {getTaxes} from "../../utils";


const Deductions = ({salary}) => {
  const taxes = getTaxes(salary)
  return (
    <div className={classes.Deductions}>
      <div>Итого можете внести в качестве досрочных:</div>
      <ul>
        {taxes.map((item, i) => <Tax key={i} item={item} index={i}/>)}
      </ul>
    </div>
  )
}

export default Deductions;
