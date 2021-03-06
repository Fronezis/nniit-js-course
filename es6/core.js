// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
  let fio = str.split(" ");
  return fio[1] + " " + fio[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
  return Array.from(new Set(arr));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference() {
  let maxSalary = Math.max(arr);
  let minSalary = Math.max(arr);
  return maxSalary / minSalary;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      arr.push("FooBar");
    } else if (i % 5 == 0) {
      arr.push("Bar");
    } else if (i % 3 == 0) {
      arr.push("Foo");
    } else arr.push(i);
  }
  return arr;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
  constructor() {
    this.map = new Map();
  }

  addWord(key, value) {
    if (typeof key == "string" && typeof value == "string") {
      this.map.set(key, value);
    }
  }

  deleteWord(key) {
    this.map.delete(key);
  }
}

module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference,
};
