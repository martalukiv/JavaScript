let count = 0;
console.log(`Start count = `, count);

let ask = prompt (`Прізвище першого президента незалежної України`);
if (ask == `Кравчук` || ask == `кравчук`) {
    console.log (`Відповідь вірна`);
    count++;
}
let ask2 = prompt (`Рік проголошення незалежності України`);
if (ask2 == `1991`) {
    console.log (`Відповідь вірна`);
    count++;
}
let ask3 = prompt (`Назва найбільшого літака у світі`);
if (ask3 == `Мрія` || ask3 == `мрія`) {
    console.log (`Відповідь вірна`);
    count++;
}
let ask4 = prompt (`Скільки країн-сусідів має Україна?`);
if (ask4 == `7` || ask4 == `сім`) {
    console.log (`Відповідь вірна`);
    count++;
}

let ask5 = prompt ('Найбільше місто України за площею');
if (ask5 == `Київ` || ask5 == `київ`) {
    console.log (`Відповідь вірна`);
    count++;
}
let ask6 = prompt ('Рік Помаранчевої революції');
if (ask6 == `2004`) {
    console.log (`Відповідь вірна`);
    count++;
}
let ask7 = prompt ('Найвища вершина України');
if (ask7 == `говерла`|| ask7 == `Говерла`) {
    console.log (`Відповідь вірна`);
    count++;
}
let ask8 = prompt ('Рік Революції гідності');
if (ask8 == `2014`) {
    console.log (`Відповідь вірна`);
    count++;
}
let ask9 = prompt ('Найбільша річка України');
if (ask9 == `дніпро` || ask9 == `Дніпро`) {
    console.log (`Відповідь вірна`);
    count++;
}
let ask10 = prompt ('Кількість президентів України на 2022 рік');
if (ask10 == `7`) {
    console.log (`Відповідь вірна`);
    count++;
}

console.log (count)

if (count>=0 && count<=3) {
    console.log (`Погано`)
}
if (count>=4 && count<=7) {
    console.log (`Задовільно`)
}
if (count>=8 && count<=10) {
    console.log (`Добре`)
}
