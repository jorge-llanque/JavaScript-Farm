var myModule = (function(){

  var privateProperty = 'private';
  function calculateSalary(){
    return 1000;
  }
  return {
    showName: privateProperty,
    salary: calculateSalary
  }
}());

let result = myModule.salary();
console.log(result)