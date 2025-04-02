let Fuel = "1.dizel\n2.benzin\n3.premium\nChoose fuel type"

let liter = Number(prompt(Fuel))

let money = Number(prompt(liter))

switch (money) {
  case 1:

    alert(`Enter fuel liter ${mymoney}AZN`)
    let fuel = Number(prompt(`0.9 AZN`))
    if (liter < mymoney) {
      mymoney -= liter;
      alert(`You get ${liter}AZN. Your balance is ${mymoney}AZN`)
    } else {
      alert(`You don,t enough money. Your balance is ${mymoney}AZN. Your missing money is ${liter - mymoney}`)
    }
    break;
  case 2:

    alert(`Enter fuel liter ${mymoney}AZN`)
    let  liter= Number(prompt(`1 AZN`))
    if (liter < mymoney) {
      mymoney -= liter;
      alert(`You get ${liter}AZN. Your balance is ${mymoney}AZN`)
    } else {
      alert(`You don,t enough money. Your balance is ${mymoney}AZN. Your missing money is ${liter - mymoney}`)
    }
    break;
  case 3:

    alert(`Enter fuel liter ${mymoney}AZN`)
    let money = Number(prompt(`1.5 AZN`))
    if (liter < mymoney) {
      mymoney -= liter;
      alert(`You get ${liter}AZN. Your balance is ${mymoney}AZN`)
    } else {
      alert(`You don,t enough money. Your balance is ${mymoney}AZN. Your missing money is ${liter - mymoney}`)
    }
    break;



  default: alert("Please enter the correct Fuel Type.");
    break;
}

