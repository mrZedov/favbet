Задача:

Create a script which generates 10 arrays with random integer values from 1 to 10 and output them. Special condition is - if the random value is 5 it sticks to the same position in all next arrays. Save all positions of sticky numbers and output them in sorted order.

Your goal: Write clean and clear code

Tips

Feel free to design your abstract entities, use principles preferable by you. It doesn't matter if you use 1 file or more

Output example

Row 0

[
4, 7, 9, 8, 5,
9, 8, 6, 1, 6
]

Row 1

[
6, 4, 10, 7, 5,
9, 1, 10, 2, 5
]

…

Row 9

[
6, 7, 10, 2, 5,
8, 5, 3, 4, 5
]

sticky positions:

[4, 6, 9]

Additional task (optionally): Write a test of your code

Решение:

Тестовое выполнено в двух вариантах

test1.js - выполнено более лаконично

test2.js - в 1ом варианте заполнение stick и законченное формирование массива
	происходит при генерировании массива. Для возможности формирования тестов
	генерирование массива и вычисление stick разнесены на разные функции.
	Для тестов я не использовал mocha или аналоги. Надеюсь, этого достаточно.




Выравнивание комментариев может отображаться по разному
из-за вывода символов табуляции в разных программах по разному
