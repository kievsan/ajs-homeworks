# Домашнее задание к лекции «Классы, наследование»

**CI Test** [![Build status](https://ci.appveyor.com/api/projects/status/sk0ds76bemavspiy?svg=true)](https://ci.appveyor.com/project/kievsan/ajs-oop)

### **Важные моменты** 

1. Каждая задача выполняется в виде отдельного проекта с собственным GitHub-репозиторием.
2. Код должен проходить ESLint без ошибок.
3. Тесты должны обеспечивать 100-процентное покрытие тестируемых функций по строкам.
4. Решения должны быть построены на базе [шаблона webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе добавьте ссылки на ваши GitHub-проекты.

**[ссылка на GitHub-проект](https://github.com/kievsan/ajs-test-ci)**

---

## Классы, наследование

### Легенда

Вы решили перейти на классы и реализовать нормальную иерархию, выделив в качестве базового класса `Character`, а для остальных персонажей создать классы, которые наследуются от него.

### Описание

Реализуйте описанную иерархию классов: класс `Character` — родительский для всех остальных, 6 дочерних классов `Bowerman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie` от него наследуются, сами задавая свои характеристики.

Атака/защита:
1. Bowman — 25/25.
2. Swordsman — 40/10.
3. Magician — 10/40.
4. Undead — 25/25.
5. Zombie — 40/10.
6. Daemon — 10/40.

---

## Методы

### Легенда

Так как вы создавали классы, чтобы хранить в одном месте свойства объекта и его поведение, то теперь нужно реализовать соответствующие методы.

#### Описание

Реализуйте в классе `Character` метод `levelUp`, который работает следующим образом:
- на 1 повышает поле `level`;
- на 20 % повышает показатели `attack` и `defence`;
- приводит показатель `health` к значению 100.

Метод должен работать, только если показатель жизни не равен 0. В противном случае генерируется ошибка — нельзя повысить level умершего.

Не забудьте написать Unit-тесты, которые обеспечивают 100-процентное покрытие тестируемых функций и классов.

---

## `get/set` * (задача со звёздочкой)

**Важно: это необязательная задача.**

### Легенда

Ваша команда решила внедрить в игру новую функцию — конкретному персонажу можно один раз включить режим `powerMode`. Это значит, что показатели персонажа `attack`, `defence`, `health` увеличиваются вдвое, но только на три атаки.

### Описание

Реализуйте получение показателей `attack`, `defence`, `health` через `get` так, чтобы они учитывали, включён ли режим `powerMode`. При этом `powerMode` тоже нужно реализовать через `get`/`set` так, чтобы включить его можно было только один раз.

Не забудьте написать Unit-тесты, которые обеспечивают 100-процентное покрытие тестируемых функций и классов.
