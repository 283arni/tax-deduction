import classes from './Popup.module.scss';
import Button from "../Button/Button";
import CloseButton from "../CloseButton/CloseButton";
import Tags from "../Tags/Tags";
import Deductions from "../Deductions/Deductions";

const Popup = ({isOpen, onTogglePopupClick}) => {
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
             <input type="text" id="salary" placeholder="Введите данные"/>
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
