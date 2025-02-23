//циклы
//Выведите числа от 1 до 10 в консоль. Используйте цикл for.
for (let i = 1; i <= 10; i++) {
    console.log(i);
} 
//Выведите чётные числа от 1 до 20 в консоль. Используйте цикл for. 
for (let number = 1; number <= 20; number++) {
    if(number % 2 === 0) {
      console.log(number)
    }
  }
 //Выведите таблицу умножения на 5 от 1 до 10.
 for (let number = 1; number <= 10; number++) {
    console.log(`5 * ${number}`)
  }

//Напишите генератор случайных строк до 7 символов и выведите результат в консоль.
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
let randomIndex = "";
 while (randomIndex.length < 7) {
            randomIndex += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        console.log(randomIndex);

//Ссумируйте числа по порядку от 1, что-бы сумма этих чисел cтала больше 100. Результат выведите в консоль.
function sumTo(n) {
    let sum = 0
  for  (let i = 1; i <=n; i++){
    sum += i;
  }
     return sum;
  }
  
  console.log(sumTo(100));
  //Выведите числа от 1 до 20, пропуская числа, которые делятся на 3, используя цикл do...while.
  let i = 1;

  do {
      if (i % 3 !== 0) {
          console.log(i);
      }
      i++;
  } while (i <= 20); 


//Выведите в консоль значения элементов массива до первого отрицательного числа, используя цикл do...while.
  const random = [2, 4, 6, -3, 8, 10]
let i = 0;
do {
    if (random[i] < 0) break; // Останавливаем цикл при первом отрицательном числе
    console.log(random[i]);
    i++;
} while (i < random.length);

//Выведите в консоль все отрицательные числа массива, используя цикл for...of. 
const allNumbers = [1, 2, 3, -4, 5]
for (const number of allNumbers) {
    if (number < 0) {
        console.log(number);
    }
}

//Выведите числа от 1 до 10 в консоль в обратном порядке, используя цикл while. 
let number = 10
while (number >= 1) {
    console.log(number)
    number--;
} 

//Объедините все строки массива в одну строку с пробелами между ними. 
const words = ['Hello', 'world', '!'];
const result = words.join(' '); // Объединяем элементы через пробел
console.log(result);

//Подсчитайте количество гласных букв в строке
const greeting = 'Hello, world!'
const vowels = ['a', 'e', 'i', 'o', 'u']
let count = 0
for (let vowel of vowels) {
  const newGreeting = greeting.toLowerCase()
  for (let item of newGreeting) {
    if(item === vowel) {
      count += 1
    }
  }
}
console.log(count)

//Преобразуйте каждый элемент массива words в верхний регистр.
const words = ['apple', 'banana', 'cherry']
for (let word of words) {
  const newWord = word.toUpperCase()
  console.log(newWord)
}

//Выведите длину каждого слова из массива строк в консоль.
const list = ['apple', 'banana', 'cherry']
list.forEach(word => console.log(`${word}: ${word.length}`)); 

//Выведите сумму всех элементов массива используя цикл for..of.
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let number of numbers) {
  sum += number
}
console.log(sum)

//Выведите символы в строке в консоль.
const str = 'Hello'
for (const char of str) {
    console.log(char);
}

//Вычислить сумму чисел от 1 до 100 и вывести значение в консоль.
let sum = 0
for (let number = 1; number <= 100; number++) {
  sum += number
}
console.log(sum) 

//Выведите сумму всех элементов массива, используя цикл for.
const array = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < array.length; i++) {
  sum += array[i]
}
console.log(sum)

//Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"] Цикл должен сделать его таким ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
let animals = ["Кот", "Рыба", "Лемур"];

for (let i = 0; i < animals.length; i++) {
    animals[i] += " - прекрасное животное";
}

console.log(animals);