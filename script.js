const wage = 460
const hours = 7
const days = 20

const salary = (wage, hours, days) => {
    return Math.round(wage * hours * days)
}

const taxPercentage = (salary * 15 / 100)

const taxed = (salary, taxPercentage) => {
  return Math.round((salary * (100 - taxPercentage)) / 100)
}

const beforeTaxation = salary(wage, hours, days)
const afterTaxation = taxed(beforeTaxation, 15)


 document.body.innerHTML = `
<p>Vaše měsíční hrubá mzda činí: ${beforeTaxation} Kč<p/>
<p>Vaše měsíční mzda po zdanění je: ${afterTaxation} Kč<p/>
 `


