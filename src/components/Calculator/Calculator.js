import classes from "./Calculator.module.scss";
import {changeSalary} from "../../utils";


const Calculator = ({setIsCalculate, setSalary, salary}) => {

  const handleFieldChange = (e) => {

    const value = changeSalary(e.target.value);

    setSalary({money: value, isValidated: !!value});
    setIsCalculate(false)
  }

  const handleFieldKeydown = (e) => {

    if (e.key !== 'Backspace' && e.key !== 'Delete') {
      return;
    }

    setSalary({money: '', isValidated: false})
    setIsCalculate(false)
  }

  const handleCalcButtonClick = () => {

    if (salary.money.length < 8) {
      setSalary({...salary, isValidated: false})
      return;
    }

    setIsCalculate(true)
  }


  return (
    <div className={classes.calculator}>
      <label htmlFor="salary">Ваша зарплата в месяц</label>
      <input
        className={salary.isValidated ? null : classes.error}
        onKeyDown={(e) => handleFieldKeydown(e)}
        onChange={(e) => handleFieldChange(e)}
        type="text"
        id="salary"
        placeholder={salary.isValidated ? "Введите данные" : ""}
        maxLength={13}
        value={salary.money}
      />
      {
        !salary.isValidated ?
          <div>
            {salary.money.length < 8 && salary.money.length !== 0 ?
              "Слишком маленькая сумма"
              :
              "Поле обязательно для заполнения"
            }
          </div>
          : null
      }
      <button
        type="button"
        onClick={() => handleCalcButtonClick()}
      >Рассчитать</button>
    </div>
  )
}

export default Calculator;
