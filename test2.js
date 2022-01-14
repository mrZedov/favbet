
const DIM_ARRAY_X = 10  // размерность массива
const DIM_ARRAY_Y = 10  // размерность плодмассива как элемента массива
const RANGE_FROM = 1    // для начального диапазона генерируемых чисел
const RANGE_TO = 10     // для конечного диапазона генерируемых чисел
const SPECIAL_NUMBER = 10  // значение, позицию по которому будем фиксировать и сохранять в sticky

function gerNumber(){   // генерим значение от 1 до 10 включительно
	return Math.floor(RANGE_FROM + Math.random() * RANGE_TO)
}

function generateArray(){
	return Array.from(
		Array(DIM_ARRAY_X),                                      // генерируем массив из 10 элементов
			() => new Array(DIM_ARRAY_Y).fill(null)  // каждый элемент массива является 10-размерным массивом, инициализируем null
			.map(()=>gerNumber())
	)
}

function getStick(arr){                     // вычияляет значение stick
	const stick = new Set()
	for(let i=0;i<arr.length;i++){          // перебираем все подмассиввы
		const arr2 = arr[i]
		for(let j=0;j<arr2.length;j++){     // перебираем все элементы подмассива
			if(stick.has(j)) continue       // если по колонке j уже проставили 5, то нет необходимости её обходить
			if(arr2[j]===SPECIAL_NUMBER){
				stick.add(j)                // если значение ячейки 5, то добавяем в stick
				for(let x=i+1;x<arr.length;x++)
					arr[x][j] = SPECIAL_NUMBER  // пробегаем все значения колонки j по всем подмассивам и проставляем 5
			}

		}
	}
	return Array.from(stick).sort()         // конвертим в массив, сортируем и возвращаем как результат функции
}

function test(value){
	return {
		toBe: rightValue => {
			if(isEqual(value,rightValue))   // сравниваем вычиленное значение getStick с правильным знаечнием
				console.log('Тест прошел успешно')
			else
				console.error(`Тест не прошел: результат ${value}, но должно быть ${rightValue}`)
		}
	}
}

function isEqual(a, b) {    // сверяем два массива
	return
			a.length==b.length
		&&  a.every((v,i) => {
				return v === b[i]
			});
}

let arr2 = generateArray()  // генерируем матрицу 10*10
stick = getStick(arr2)      // вычисляем stick

arr2.forEach((y,i)=> {   // можно было бы написать console.log(arr), но для соблюдения требований ТЗ и
	console.log('Row ', i)                // отображения формата с надписью "Row" организован цикл forEach
	console.log(y)
})

console.log(stick)  // выводим stick

// Дальше код по тестам:
arr2 = [[1,2,5,4],[2,7,4,5],[1,5,8,9],[2,1,6,8]]    // для простоты восприятия матрица 4*4, но можно забить любой размерности
stick = getStick(arr2)
test(getStick(arr2)).toBe([1,2,3])  // Тест прошел успешно

arr2 = [[1,2,5,4],[5,7,4,5],[1,5,8,9],[2,1,6,8]]
stick = getStick(arr2)
test(getStick(arr2)).toBe([0,1,2,3])  // Тест прошел успешно

arr2 = [[1,2,5,4],[2,7,4,5],[1,5,8,9],[1,1,6,8]]
stick = getStick(arr2)
test(getStick(arr2)).toBe([0,1,2,3])  // Тест не прошел: результат 1,2,3, но должно быть 0,1,2,3

