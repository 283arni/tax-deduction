import {yearsPayment, yearsPaymentAnother} from "./data";

export const addSpace = (salary) => {
  return salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


export const transformSalary = (salary) => {
  return parseInt(salary.split(` `).join(``).replace(`₽`,''), 10);
}

export const changeSalary = (salary) => {

  salary = transformSalary(salary)

  if (Number.isNaN(salary)) {
    return '';
  }

  return `${addSpace(salary)} ₽`
};

export const getTaxes = (salary) => {
  salary = transformSalary(salary)

  const tax = Math.floor((salary * 12) * 0.13)

  const taxes = []

  for(let i = tax; i <= 260000; i += tax) {
      taxes.push(tax)
  }

  if(260000 % tax !== 0) {
    taxes.push(260000 % tax)
  }

  return taxes
}

export const choiceEnding = (index) => {
  if(yearsPayment.includes(index)) {
    return `${index}-ой`
  }

  if(yearsPaymentAnother.includes(index)) {
    return `${index}-ий`
  }

  return `${index}-ый`
}
