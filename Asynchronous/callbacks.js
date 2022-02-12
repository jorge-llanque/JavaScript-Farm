/*High Order Functions*/
// Callbacks
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};
ifElse(
  true,
  () => {
    console.log(true);
  },
  () => {
    console.log(false);
  }
);

// Passing Arguments
var increment = function (n) {
  return n + 1;
};
var square = function (n) {
  return n * n;
};
var doMathSoIDontHaveTo = function (n, func) {
  return func(n);
};

doMathSoIDontHaveTo(5, square); // 25
doMathSoIDontHaveTo(4, increment); // 5

// Rest Operator
const ifElse2 = (condition, isTrue, isFalse, ...args) => {
  console.log(args); // ['HI', 'BYE', 'HOLA']
  return condition ? isTrue(...args) : isFalse(...args);
};
ifElse2(true, fn1, fn2, "HI", "BYE", "HOLA");

// _.reduce()
_.reduce(
  [1, 2],
  function (sum, n) {
    return sum + n;
  },
  0
); // 3

_.reduce(
  { a: 1, b: 2, c: 1 },
  function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {}
); // {'1':['a','c'], '2':['b']}

const reduce = function (list, cb, initial) {
  let memo = initial;
  for (let i = 0; i < list.length; i++) {
    if (i === 0 && memo === undefined) {
      memo = list[0];
    } else {
      memo = cb(list[i], memo);
    }
  }
  return memo;
};
reduce([2, 3, 5], (v, sum) => v + sum);

const notInRoom = (suspect) => {
  const emptyRooms = reduce(
    suspect.rooms,
    (room, memo) => {
      if (room === false) memo.push(room);
      return memo;
    },
    []
  );
};

notInRoom = _.map(newDevelopment, notInRoom);
_.intersection(...notInRooms);

/*  Exercises  */
const calculateCurrentClimateInCelsius = function (country, date, cb) {
  let codeCountry = country === "Bolivia" ? "Bol" : "USD";
  return cb(codeCountry, date);
};

const result = calculateCurrentClimateInCelsius(
  "Bolivia",
  "20/10/2022",
  function (codeC, date) {
    return 23;
  }
);

console.log(result, "JE");

const estadoDeHumor = (genero, actividadDiaria, cb) => {
  var gen = 0;
  if (genero === "hombre") {
    gen = 9;
  } else {
    gen = 5;
  }

  const act = actividadDiaria === "trabajo" ? 4 : 9;
  return cb(gen, act, 0);
};

const resp = estadoDeHumor("hombre", "trabajo", function (a, b, c) {
  return a + b + c;
});
console.log(resp);

const a = [1, 2, 3, 4].reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log(a);

// add only numbers finished at zero
const b = [10, 3, 50, 0].reduce((prev, curr) => {
  if (curr.toString().slice(-1) === "0") {
    return parseInt(curr) + prev;
  } else {
    return prev;
  }
}, 0);
console.log(b);

// sort asc
// ... pending

// callback
function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000);
console.log("Me first");

// practice asynchronous

/* first exercise */
const red = () => {
  console.log("red");
};
const blue = () => {
  console.log("blue");
  setTimeout(red, 0);
};
blue();
console.log("hello");

setTimeout(red, 1000);

// => blue
// => hello
// => red
// => red

/* second exercise */

const divideByLetter = (a, b, c, callback) => {
  function split() {
    var nameCompleteUpper = callback(a, b, c).toUpperCase();
    var nameCompleteSeparatedByLetter = callback(a, b, c).split("");
    return [nameCompleteUpper, nameCompleteSeparatedByLetter];
  }
  return split;
};

const resp = divideByLetter("jorge", "llanque", "chagua", function (a, b, c) {
  return `${a} ${b} ${c}`;
});
const resp2 = divideByLetter("goku", "gino", "guez", function (a, b, c) {
  return setTimeout(() => {
    `${a} ${b} ${c}`;
  }, 2000);
});

console.log(resp2());
console.log(resp());
