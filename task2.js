// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark

function isParent(parent, child) {
    return child.parentNode===parent;
}
console.log(isParent(document.body.firstElementChild, document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));


// 2. Получить список всех ссылок, которые не находятся внутри списка ul

let links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));
console.log(links);


// 3. Найти элемент, который находится перед и после списка ul 

console.log(document.querySelector('ul').previousSibling); 
console.log(document.querySelector('ul').nextSibling); 

// 4. Посчитать количество элементов li в списке
 console.log(document.getElementsByTagName('ul')[0].getElementsByTagName('li'));

 



