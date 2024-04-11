
// Měsíční příjem
let monthIncome = 7*320*21
document.querySelector(".month-income span").innerHTML += monthIncome

// Daň
let lumpSum = (monthIncome/100)*60
let rest = monthIncome - lumpSum
let tax = (rest/100)*15
document.querySelector(".tax span").innerHTML += Math.floor(tax)
document.querySelector(".net-income span").innerHTML += Math.floor(monthIncome - tax)
