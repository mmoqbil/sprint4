const people = [
  {
    firstname: "Alicja",
    lastname: "Kowalska",
  },
  {
    firstname: "Janek",
    lastname: "Nowak",
  },
  {
    firstname: "Waldemar",
    lastname: "Malina",
  },
];

// Zad 1.

function reverseString(string) {
  let result = "";
  if (string.length >= 2) {
    result =
      string.substr(-1) + string.substring(1, string.length - 1) + string[0];
    return result;
  } else {
    return string;
  }
}

function createNickname(people) {
  for (const element of people) {
    let nickName = "";
    for (
      let i = element.firstname.length - 1;
      i >= 0 && i >= element.firstname.length - 3;
      i--
    ) {
      nickName += element.firstname[i];
    }
    let Last3LastNamesLetters = "";
    for (let i = 0; i < Math.min(3, element.lastname.length); i++) {
      Last3LastNamesLetters += element.lastname[i];
    }
    nickName += reverseString(Last3LastNamesLetters);
    nickName =
      nickName[0].toUpperCase() +
      nickName.substring(1, nickName.length).toLowerCase();
    element.nickname = nickName;
    console.log(element.nickname);
  }
}

createNickname(people);

//Zad 2.

function createAge(people) {
  for (const element of people) {
    let age = element.firstname.length + element.lastname.length;
    let keysLength = 0;
    for (const key in element) {
      if ((element.firstname.length + element.lastname.length) % 2 == 0) {
        keysLength += key.length;
      }
    }
    age = keysLength - element.firstname.length;
    element.age = age;
    console.log(
      `Hej, mam na imię ${element.firstname} i mam ${element.age} lat`
    );
  }
}

createAge(people);

//Zad 3.

function createIntroduceFunction(people) {
  for (const element of people) {
    element.introduceYourself = function () {
      return `Cześć jestem ${this.firstname} ${this.lastname} ale w szkole mówią na mnie [${this.nickname}]`;
    };
  }
}
function displayIntroduceFunction(people) {
  people.forEach((element) => {
    console.log(element.introduceYourself());
  });
}

createIntroduceFunction(people);
displayIntroduceFunction(people);

//Zad 4.

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

function getColor(number, person) {
  if (number < 1) {
    return `podałeś za małą liczbę, liczba nie może być mniejsza niż 1`;
  } else if (number > 30) {
    return `podałeś za dużą liczbę, liczba nie może być większa niż 30`;
  } else if (number == null) {
    number = 5;
  }
  let keysPlusValues = 0;
  let entries = Object.entries(person);

  entries.slice(0, 3).forEach(function ([key, value]) {
    keysPlusValues += key.length + value.length;
  });
  return Math.abs((keysPlusValues - number) % colors.length);
}

function getColorForEachPerson(number, people) {
  people.forEach((person) => {
    console.log(
      `Mam na imię ${person.firstname} i mój ulubiony kolor to ${
        colors[getColor(number, person)]
      }`
    );
  });
}

getColorForEachPerson(5, people);
