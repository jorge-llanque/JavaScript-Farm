const add = function (a, b = 2) {
  console.log(arguments);
  return a + b;
};
add(3);

// Array-Like Object
const constructArr = function () {
  const arr = Array.prototype.slice.call(arguments);
  // we can replace Array.prototype.slice.call to Array.from   are the same :-)
  //['was','it','in']
  arr.push("the billiards room?");
  //['was','it','in','the billiards room']
  return arr.join(" ");
};
constructArr("was", "it", "in");

// Escribir todos las reglas de scopes
