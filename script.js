//  Функции (ДЗ:стрелочные функции, анонимные самовызывающие функции)

function logName(name, age) {
    console.log(`Hello my name ${name} is and my age is ${age}`);
}
logName('Dinar', 23)

// Объекты (ДЗ: методы объектов,)


var x = {
    a: 100,
    b: 1000,
    c: 'Dinar',
}

console.log(x['a'], x.a);



var button = document.getElementById('action-button');



var div = document.querySelector('div')

console.log(div);

div.addEventListener('mouseover', function() {
    console.log('mouse over');
})

div.addEventListener('mouseleave', function() {
    console.log('mouse leave');
})

button.addEventListener('click', function() {
    div.classList.add('custom');
    div.id = 'custom-div-id'
});
