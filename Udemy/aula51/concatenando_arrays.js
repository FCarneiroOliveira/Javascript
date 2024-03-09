const num1 = [1,2,3]
const num2 = [4,5,6]


// const num3 = num1.concat(num2,[7,8,9],'Luiz') // pode concatenar arrays e strings

const num3  = [...num1,...num2,'Luiz',...[7,8,9]] // oncatenando usando o spread

console.log(num3)