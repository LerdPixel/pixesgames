var tom = {}
tom.nowName = "Tom"
tom.newName = function(string) {
    tom.nowName = string
    console.log("Tom's new name = " + string)
}
var timerOlimp = 0
tom.newName("bob")
/*var tasks = ["Отец  и  сын  несут  одинаковые  банки  консервов.  Масса  каждой  банки  выражается целым числом граммов, не меньшим чем 300, но не большим чем 400. Отец несёт 6 кг500 г, а сын –2 кг600 г. Сколько банок у отца и сколько у сына?",
"Ответ. 20 банок у отцаи 8 банок у сына.", "Решение. Масса mкаждой банки является общим делителем чисел 6500 и 2600. Так как  НОД(6500;  2600)  =  225213  =  1300,  то  любой  общий делитель  чисел  6500  и  2600 является делителем 1300. Начнём перечислять их по парам, проверяя условие 300 m400: 1 и 1300 (оба не подходят), 2 и 650 (оба не подходят), 4 и 325 (325 подходит), 5 и 260 (оба  не  подходят).  В  остальных  парах  оба  делителя  меньше  чем  260,значит,  они  не удовлетворяют условию 300 m400. Таким образом, отец несёт 6500 : 325 = 20банок, а сын несет 2600 : 325 = 8 банок",
"Найдите  все  такие  тройки  чисел,  что  каждое  число  равно  квадрату  суммы  двух остальных",
" (0, 0, 0); 111,,444", "Решение.  Запишем  условие  алгебраически: 2abc, 2bac, 2cab. Пусть  среди  чисел  есть  различные,  например, ab. Вычитая  из  первого  равенства второе,  получим 222abbcacbabac                .  Так  как ab,  то  из полученного равенства следует, что 21abc      . Но это невозможно, так как числа a, bи cявляются квадратами, поэтому их сумма неотрицательна.Таким  образом, abc.  Тогда каждое  уравнение  имеет  вид 2(2 )aa, значит,0abc    или 14",
"Придумайте, как разрезать контур квадрата со стороной 1 на четыре части и сложить из этих частей контур треугольника. Найдите площадь получившегося у вас треугольника. (Толщины контур не имеет. Сгибать и разгибать части нельзя)",
"Ответ: 2.3SРешение.  Отметим  на  стороне АDквадрата АВСDточку Мтак,  что 13AM. Разрежем  контур  квадрата  в  вершинах В, Си Dи  точке М.Из  получившихся  частей составим  прямоугольный  треугольник 1  1  1ABCс катетами 111AB, 1  11   11  114133ACAMMC   и  гипотенузойBCBFFC111112353(см. рис.  9.3). Существование этого  треугольника следует   из   теоремы,   обратной   теореме Пифагора. Его площадь равна 1   4  21.2   3  3S     Покажем,  как  можно  было  найти  этот способ разрезания (участники олимпиады это делать не обязаны). Пусть AMx. Составим прямоугольный треугольник 1  1  1ABC. Один из его катетов 111AB, другой 1  11   11  11ACAMMCx  .  Гипотенуза BCBFFСxx1111112. Треугольник  с такими сторонами является прямоугольным, если 2221   (   1)   (2   )xx       , откуда 13x. Можно доказать, что приведённый способ решения единственный с точностью до равенства треугольников. От участников олимпиады этого не требовалось. Также можно показать, что четыре –это минимальное количество частей, на которые можно разрезать контур квадрата, чтобы сложить треугольник.",]
function olimp() {
    document.getElementById("task").innerHTML = tasks[timerOlimp]
    ++timerOlimp
}
*/

