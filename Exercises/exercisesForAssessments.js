const products = [
  { id: 1, name: "telephone", stock: 344 },
  { id: 2, name: "tv", stock: 200 },
  { id: 3, name: "mobile", stock: 10 },
  { id: 4, name: "computer", stock: 34 },
  { id: 5, name: "cup", stock: 66 },
  { id: 1, name: "telephone", stock: 344 },
  { id: 4, name: "computer", stock: 34 },
  { id: 1, name: "telephone", stock: 344, available: true },
];

/******************************************************************************* */

/*  Eliminar objetos con id duplicados  */
const removePairIds = (array) => {
  const newArr = [];
  array.forEach((obj) => {
    if (!newArr.some((elem) => elem.id === obj.id)) {
      newArr.push(obj);
    }
  });
  return newArr;
};
//console.log(removePairIds(products))

/********************************************************************************** */

/*  Eliminar datos repetidos y concatenar aquellos iguales */

function removeAndConcat(array) {
  const result = [];
  array.forEach((obj) => {
    let elemExist = list.find((item) => {
      if (item.id === obj.id) {
        item = Object.assign(item, obj);
        return true;
      }
    });
    if (!elemExist) {
      list.push(obj);
    }
  });
  return result;
}
// console.log(remove(products))

/********************************************************************************** */

/*  Concatenar un array acorde a su referencia a otro array  */

const customers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Richard Roe" },
];
const orders = [
  { id: 1, customerId: 1, product: "asd", price: 999 },
  { id: 2, customerId: 2, product: "asd", price: 23 },
  { id: 3, customerId: 1, product: "asd", price: 29 },
];
function denormalize({ primary, related, relatedName, referenceId }) {
  primary.forEach((obj) => {
    const [...rest] = related.filter((obj2) => obj2[referenceId] === obj.id);
    obj[relatedName] = JSON.stringify(rest);
  });
  return primary;
}
let obj = {
  primary: customers,
  related: orders,
  relatedName: "orders",
  referenceId: "customerId",
};
//console.log(denormalize(obj))

/********************************************************************************** */

/*  Espejo  */

function mirror(data) {
  let data_reverse = "";
  for (let i = 1; i <= data.length; i++) {
    data_reverse = data_reverse.concat(data[data.length - i]);
  }
  return data_reverse;
}
//console.log(mirror("hello   s "))

/********************************************************************************** */

/*   roomBooking   */

// function roomBooking(m, operations) {
//   var calculateHash = function (name) {
//     var result = 0
//     for (var i = 0; i < name.length; i++) {
//       result += name.charCodeAt(i)
//     }
//     return result
//   }

//   var hashMap = []
//   var answer = []
//   for (var i = 0; i < m; i++) {
//     hashMap.push(['', -1])
//   }
//   for (var i = 0; i < operations.length; i++) {
//     var name = operations[i].substr(1)
//     var hash = calculateHash(name)
//     var pos = hash % m
//     console.log(pos)
//     if (operations[i][0] === '+') {
//       while (hashMap[pos][1] !== -1) {
//         pos = (pos + 1) % m
//       }
//       hashMap[pos] = [name, hash]
//     } else {
//       while (hashMap[pos][1] !== hash && hashMap[pos][0] !== name) {
//         pos = (pos + 1) % m
//       }
//       hashMap[pos] = ['', -1]
//     }
//   }
//   for (var i = 0; i < m; i++) {
//     if (hashMap[i][1] !== -1) {
//       answer.push(hashMap[i][0])
//     }
//   }
//   return answer
// }

// console.log(roomBooking(200, ['+Ac', '+Bb', '+Ca', '-Bb', '+Ad']))

/********************************************************************************** */

/*   cyclicQueue   */

function cyclicQueue(commands) {
  var queue = [];
  var answer = [];
  var head = 0;
  var tail = 0;
  var sum = 0;

  const maxSize = 10;

  for (var i = 0; i < maxSize; i++) {
    queue.push(0);
  }
  for (var i = 0; i < commands.length; i++) {
    if (commands[i] === "-") {
      sum -= queue[head];
      head++;
    } else {
      var value = 0;
      for (var j = 1; j < commands[i].length; j++) {
        value = value * 10 + commands[i].charCodeAt(j) - "0".charCodeAt(0);
      }
      sum += value;
      queue[tail] = value;
      tail = (tail + 1) % maxSize;
    }
    answer.push(sum);
  }
  return answer;
}
console.log(cyclicQueue(["+3", "+1", "-", "+1"]));

/********************************************************************************** */

/*   minMaxDifference   */

function minMaxDifference(inputArray) {
  var indexOfMinimum = 0,
    indexOfMaximum = 0;

  for (var i = 1; i < inputArray.length; i++) {
    if (inputArray[i] < inputArray[indexOfMinimum]) {
      indexOfMinimum = i;
    }
    if (inputArray[i] > inputArray[indexOfMaximum]) {
      indexOfMaximum = i;
    }
  }
  return inputArray[indexOfMaximum] - inputArray[indexOfMinimum];
}
console.log(minMaxDifference([1, 4, 10, 4, 2]));

/********************************************************************************** */

/*   arrayKthGreatestQuick   */

function arrayKthGreatestQuick(inputArray, k) {
  var pos = Math.floor(Math.random() * inputArray.length);
  var left = [];
  var right = [];

  if (inputArray.length === 1) {
    return inputArray[0];
  }
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[pos]) {
      left.push(inputArray[i]);
    } else {
      right.push(inputArray[i]);
    }
  }
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);
  var join = left.concat(right);
  join.reverse();
  return join[k - 1];
}
console.log(arrayKthGreatestQuick([19, 2, 1, 12], 3));

/*  SCOPE */
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}

/********************************************************************************** */

/*   perfectSquare   */

function perfectSquare(N, NArray) {
  var result = -404;

  const newArr = NArray.filter((elem) => {
    for (let i = 1; i <= elem; i++) {
      if (Math.pow(i, 2) === elem) {
        return elem;
      }
    }
  });
  let sum = 0;
  newArr.forEach((elem) => {
    sum += elem;
  });
  return sum;
}
console.log(perfectSquare(4, [1, 3, 36, 40, 43, 54, 64]));

/********************************************************************************** */

/*   validatePassword   */

function validatePassword(S) {
  var result = "";

  let minLength = 7;
  let isContainNumber = false;
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let newS = "";
  numbers.forEach((number) => {
    if (S.includes(number)) {
      isContainNumber = true;
      newS = S.slice(S.indexOf(number));
    }
  });
  console.log(newS);

  if (S.length <= 7) {
    result.concat("Password must be greater than  7 characters\n");
  }
  if (S[0] !== S[0].toUpperCase()) {
    result = result.concat("The first character must be a capital letter\n");
  }
  if (isContainNumber === false) {
    result = result.concat("The password must contain at least one number\n");
  }
  if (S.includes(["#"])) {
    result = result.concat("There must not be a # character in the password\n");
  }

  if (result.length === 0) {
    result = result.concat(S);
  }

  return result;
}
console.log(validatePassword("Exelce2sior"));
