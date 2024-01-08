/*
 Розробити функцію, яка використовує метод reduce масиву для обчислення суми усіх елементів масиву чисел.
 Функція повинна приймати масив чисел та повертати їх суму.
*/

function sumArray(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0)
}

// Використання функції
// const exampleArray = [1, 2, 3, 4, 5]
// const sum = sumArray(exampleArray)
// console.log('Сума елементів масиву:', sum) // Виведення суми

module.exports = sumArray // Експорт функції
