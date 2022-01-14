
const DIM_ARRAY_X = 10  // размерность массива
const DIM_ARRAY_Y = 10  // размерность плодмассива как элемента массива
const RANGE_FROM = 1    // для начального диапазона генерируемых чисел
const RANGE_TO = 10     // для конечного диапазона генерируемых чисел
const SPECIAL_NUMBER = 10  // значение, позицию по которому будем фиксировать и сохранять в sticky

const genValueElement = function(idx){
	if(stick.has(idx)){
		return 5                                      // если индекс i уже есть в stick, тогда сразу возвращаем "5"
	}
	newValue = Math.floor(1 + Math.random() * 10)  // генерим значение от 1 до 10 включительно
	if(newValue===5) stick.add(idx)                   // если значение равно "5", тогда запоминаем индекс i в stick
	return newValue                                   // возвращаем сгенерированное значение в элемент массива
}

const stick = new Set()    // можно было бы использовать массив, но тогда пришлось бы делать проверку наличия
	                       // индекса в genValueElement используя цикл или filter. Но все равно уникальность будет соблюдаться,
                           // т.к. номер позиции будет добавлятья только из тех, что не встречались ранее
const arr = Array.from(
		Array(10),                                  // генерируем массив из 10 элементов
		() => new Array(10).fill(null)  // каждый элемент массива является 10-размерным массивом, инициализируем null
			.map((valueElement, idx) => genValueElement(idx))  // с помощью map задаём значения для каждого элемента
);

arr.forEach((valueElement,idx)=> {   // можно было бы написать console.log(arr), но для соблюдения требований ТЗ и
	console.log('Row ', idx)                // отображения формата с надписью "Row" организован цикл forEach
 	console.log(valueElement)
})

console.log('sticky positions:')
console.log(Array.from(stick).sort())   // создаем массив из stick, сортируем значения и выводим на экран
