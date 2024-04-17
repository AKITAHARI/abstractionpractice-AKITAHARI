[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/CmszCsk2)
# Практика по абстракциям

Перед началом работы ознакомьтесь с мэйкфайлом и заданиями.
Все задания выполняются в index.js и экспортируются не по дефолту.

### Задание №1

Напишите функцию `convertToClock()`, которая на вход принимает 4 числа. Функция должна комбинировать числа так, чтобы получилось максимально позднее время. Валидными считаются времена между 00:00 и 23:59

**Пример использования**

    ```javascript
    convertToClock(5, 4, 2, 3); // 23:54
    convertToClock(6, 7, 4, 1); // 17:46
    ```

### Задание №2

Function is called `singSong()`, no description. Only tests.

### Задание №3

Однажды Ване становится скучно, и он решает перебрать большую кучу камней. Сначала он пересчитывает камни и обнаруживает, что у него в куче n камней, затем идет в магазин за этикетками для пересчета.

Каждая из меток представляет собой цифру от 0 до 9, а каждому из n камней должен быть присвоен уникальный номер от 1 до n.

Если каждая этикетка будет стоить 50 рублей, сколько денег потратит Ваня на этот проект?

Напишите функцию `countRocks()`, которая поможет Ване посчитать бюджет на его проект.

**Пример использования**

    ```javascript
    countRocks(2); // 100
    countRocks(13); // 850
    ```

### Задание №4

Вы, наверное, знаете систему лайков по ВК и другим социальным сетям. Люди могут ставить лайки постам в блогах, изображениям и другим элементам. Ваша задача создать текст, который должен отображаться рядом с таким элементом.

Реализуйте функцию `getLikers()`, которая принимает массив, содержащий имена людей, которым понравился предмет. Он должен возвращать отображаемый текст, как показано в примерах:

**Пример использования**

    ```javascript
    getLikers([]); // 'no one likes this'
    getLikers(['Peter']); // 'Peter likes this'
    getLikers(['Jacob', 'Alex']); // 'Jacob and Alex like this'
    getLikers(['Max', 'John', 'Mark']); // 'Max, John and Mark like this'
    getLikers(['Alex', 'Jacob', 'Mark', 'Max']); // 'Alex, Jacob and 2 others like this'
    ```

### Задание №5

Напишите функцию `sortString()`, которая принимает на вход строку, в которой каждое слово содержит в себе цифру и сортирует строку в порядке возрастания.

**Пример использования**

    ```javascript
    sortString('is2 Thi1s T4est 3a'); // 'Thi1s is2 3a T4est'
    sortString('4of Fo1r pe6ople g3ood th5e the2'); // 'Fo1r the2 g3ood 4of th5e pe6ople'
    ```
