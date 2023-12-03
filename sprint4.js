// 1. Napisz funkcję dodającą dwie liczby
function sum(a,b) {
    return a+b;
}

// 2. Napisz funkcję zwracającą długość tablicy
function arrayLenght(array) {
    if(typeof(array)==="object"){
        return array.lenght;
    }
}

// 3. Napisz funkcję sprawdzającą, czy liczba jest parzysta
function even(a) {
    if (a%2===0)
    {
        return console.log("Liczba jest parzysta");
    }
    else {
        return console.log("Liczba jest nieparzysta");
    }
}

// 4. Napisz funkcję obliczającą pole kwadratu
function area(a) {
    return a*a;
}

// 5. Napisz funkcję zwracającą odwrotność liczby
function reciprocal(a) {
    return 1/a;
}

// 6. Napisz funkcję konwertującą stopnie Celsjusza na Fahrenheita
function cToF(c) {
    return (c*(9/5))+32;
}

// 7. Napisz funkcję zwracającą pierwszy element tablicy
function firstElement(array) {
    return array[0];
}

// 8. Napisz funkcję łączącą dwa ciągi znaków, utwórz warunek który sprawdzi czy argumenty są typu string
function concatenatedString(stringA, stringB) {
    if(typeof(stringA)==="string" && typeof(stringB)==="string") {
        return stringA+stringB;
    }
}

// 9. Napisz funkcję zwracającą typ zmiennej
function typeOf(variable) {
    return typeOf(variable);
}

// 10. Napisz funkcję zwracającą absolutną wartość liczby
function abs(a) {
    return Math.abs(a);
}

// 1. Napisz funkcję, która będzie miała pętlę for, która wyświetli liczby od 1 do 10
function oneToTen() {
    for(let i=1;i<=10;i++) {
        console.log(i);
    }
}

// 2. Napisz funkcję, która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20
function evenLowerThan20() {
    let number = 1;
    while(number<=20) {
        if (number%2===0) {
            console.log(number);
        }
        number++;
    }
}

// 3. Napisz funkcję, która użyje pętli do while do wyświetlenia liczb od 10 do 1
function tenToOne() {
    let number = 10;
    do {
        console.log(number);
        number--;
    } while(number>0) 
}

// 4. Napisz funkcję, która użyje pętli while i break do przerwania pętli po osiągnięciu liczby 5
function breakIfFive() {
    let number = 0;
    while(true) {
        if(number===5) {
            break;
        }
        number++;
    }
}

// 5. Napisz funkcję, która użyje pętli for in do iteracji po właściwościach obiektu
function iterateAfterObject(object) {
    for (const key in object) {
        console.log(key);
    }
}

// 6. Napisz funkcję, która użyje pętli for of do iteracji po elementach tablicy
function elementsOfArray(array) {
    for (const element of array) {
        console.log(element);
    }
}

// 7. Napisz funkcję, która użyje pętli for do obliczania sumy elementów tablicy
function sumOfElements(array) {
    let sum = 0;
    for(let i=0;i<array.lenght;i++) {
        sum += array[i];
    }
    console.log(sum);
}

// 8. Napisz funkcję, która użyje pętli while do odwrócenia ciągu znaków
function reverse(string) {
    let reverse = "";
    let iteration = string.lenght-1;
    while(iteration>=0) {
        reverse += string[iteration];
        iteration--;
    }
}

// 9. Napisz funkcję, która użyje pętli for of do znalezienia największej liczby w tablicy
function theBiggest(array) {
    let theBiggest = array[0];
    for(element of array) {
        if(element > theBiggest)
        {
            theBiggest = element;
        }
    }
    return theBiggest;
}

// 10. Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów
function keyValue(object) {
    for (const key in object) {
        console.log(key, object[key]);
    }
}

// 1. Napisz funkcję, która doda element na koniec tablicy używając metody push
function addElementToArray(array, element) {
    array.push(element);
    return array;
}

// 2. Napisz funkcję, która usunie ostatni element tablicy używając metody pop
function removeLastElementFromArray(array) {
    array.pop();
    return array;
}

// 3. Napisz funkcję, która usunie pierwszy element tablicy używając metody shift
function removeFirstElementFromArray(array) {
    array.shift();
    return array;
}

// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshift
function addFirstElementToArray(array, element) {
    array.unshift(element);
    return array;
}

// 5. Napisz funkcję, która użyje metody push, aby dodać dwa elementy na koniec tablicy
function addTwoElementsToArray(array, element, secondElement) {
    array.push(element, secondElement);
    return array;
}

// 6. Napisz funkcję, która dwukrotnie użyje metody pop, aby usunąć dwa ostatnie elementy tablicy
function removeTwoLastElementsFromArray(array) {
    array.pop();
    array.pop();
    return array;
}

// 7. Napisz funkcję, która dwukrotnie użyje metody shift, aby usunąć dwa pierwsze elementy tablicy
function removeTwoFirstElementsFromArray(array) {
    array.shift();
    array.shift();
    return array;
}

// 8. Napisz funkcję, która dwukrotnie użyje metody unshift, aby dodać dwa elementy na początek tablicy
function addTwoFirstElementsToArray(array, element, secondElement) {
    array.unshift(element, secondElement);
    return array;
}

// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy
function AddAndRemoveLastElement(array, element) {
    array.push(element);
    array.pop();
    return array;
}

// 10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy
function AddAndRemoveFirstElement(array, element) {
    array.unshift(element);
    array.shift();
    return array;
}

// 11. Napisz funkcję, która przy użyciu metody map zwiększy każdy element tablicy o 1
function increaseAllElementsByOne(array) {
    const increasedArray = array.map(function(element) {
        return element+1;
    });
    return increasedArray;
}

// 12. Napisz funkcję, która przy użyciu metody filter zwróci tylko parzyste liczby z tablicy
function onlyEvenNumbers(array) {
    const evenNumbers = array.filter(function(element) {
        return element % 2 === 0;
});
return evenNumbers;
}

// 13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy
function doubleElementsOfArray(array) {
    const doubledElements = array.map(function(element) {
        return element*2;
    });
    return doubledElements;
}

// 14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10
function elementsBiggerThanTen(array) {
    const elementsBiggerThanTen = array.filter(function(element) {
        return element > 10;
    });
    return elementsBiggerThanTen;
}

// 15. Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa
function split(array) {
    const splittedArray = array.split(" ");
    return splittedArray;
}

// 16. Napisz funkcję, która przy użyciu metody map zamieni każdy element tablicy na jego długość
function elementToItsLength(array) {
    const elementLengthsArray = array.map(function(element) {
        return element.length;
    });
    return elementLengthsArray;
}

// 17. Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy
function onlyOddsNumbers(array) {
   const onlyOddsNumbers = array.filter(function(element) {
    return element % 2 === 1;
   });
   return onlyOddsNumbers;
}

// 18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty każdego elementu tablicy
function squareElementsOfArray(array) {
    const squaredElements = array.map(function(element) {
        return element*element;
    });
    return squaredElements;
}

// 19. Napisz funkcję, która przy użyciu metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery
function moreThan3LettersInAString(array) {
    const moreThan3LettersStrings = array.filter(function(element) {
        return element.split(" ").lenght > 3;
    });
    return moreThan3LettersStrings;
}

// 20. Napisz funkcję, która przy użyciu metody map zwróci każdy element tablicy zapisany wielkimi literami
function returnOnlyElementsWrittenByUpperCase(array) {
    const elementsWrittenByUpperCase = array.map(function(element) {
        return element[0] === element[0].toUpperCase();
    })
}
