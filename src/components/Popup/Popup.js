import classes from './Popup.module.scss';
import {useState} from 'react';
import Button from "../Button/Button";
import CloseButton from "../CloseButton/CloseButton";
import Tags from "../Tags/Tags";
import Deductions from "../Deductions/Deductions";
import Calculator from "../Calculator/Calculator";



const Popup = ({isOpen, onTogglePopupClick}) => {
  const [salary, setSalary] = useState({money: '', isValidated: true})
  const [isCalculate, setIsCalculate] = useState(false)

  return (
    <div className={classes.Popup}>
       <div className={classes.Popup__container}>
         <CloseButton
           onTogglePopupClick={onTogglePopupClick}
         />
         <div>
           <h1>Налоговый вычет</h1>
           <p>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
           <Calculator
             setSalary={setSalary}
             setIsCalculate={setIsCalculate}
             salary={salary}
           />
           {
             isCalculate ?
             <Deductions
               salary={salary.money}
             /> : null
           }
           <Tags />
         </div>
         <Button
           isOpen={isOpen}
           onTogglePopupClick={onTogglePopupClick}
           text={"Добавить"}
         />
       </div>
    </div>
  )
}

export default Popup;
