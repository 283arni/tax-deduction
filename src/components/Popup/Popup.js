import classes from './Popup.module.scss';
import {useState} from 'react';
import Button from "../Button/Button";
import CloseButton from "../CloseButton/CloseButton";
import Tags from "../Tags/Tags";
import Deductions from "../Deductions/Deductions";

const transformSalary = (sum) => {

  sum = parseInt(sum.split(` `).join(``).replace(`₽`,''), 10);

  if (Number.isNaN(sum)) {
    return '';
  }

  return `${sum.toString().replace(/(.{3})/g, "$1 ")} ₽`
};

const Popup = ({isOpen, onTogglePopupClick}) => {
  const [salary, setSalary] = useState('')

  const handleFieldChange = (e) => {
    const value = transformSalary(e.target.value);

    setSalary(value);
  }

  return (
    <div className={classes.Popup}>
       <div className={classes.Popup__container}>
         <CloseButton
           onTogglePopupClick={onTogglePopupClick}
         />
         <div>
           <h1>Налоговый вычет</h1>
           <p>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
           <div className={classes.Popup__calculate}>
             <label htmlFor="salary">Ваша зарплата в месяц</label>
             <input
               onChange={(e) => handleFieldChange(e)}
               type="text"
               id="salary"
               placeholder="Введите данные"
               maxLength={13}
               value={salary}
             />
             <button type="button">Рассчитать</button>
           </div>
           <Deductions/>
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
