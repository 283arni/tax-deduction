import classes from './Deductions.module.scss'
import Tax from "../Tax/Tax";



const Deductions = () => {
  return (
    <div className={classes.Deductions}>
      <div>Итого можете внести в качестве досрочных:</div>
      <ul>
        {[1,2,3,4].map((item) => <Tax key={item} id={item}/>)}
      </ul>
    </div>
  )
}

export default Deductions;
