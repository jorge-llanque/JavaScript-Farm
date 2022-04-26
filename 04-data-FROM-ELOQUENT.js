function rango(inicio, final, paso = 1){
    let newArr = [];
    if(inicio < final){
        for(let i = inicio; i<=final; i = i + paso){
            newArr.push(i);
        }
    }else {
        for(let i = inicio; i>=final; i = i + paso){
            newArr.push(i);
        }
    }

    return newArr;
}

function suma(arr){
    return arr.reduce((a,b)=> a + b)
}

console.log(rango(5, 2, -1))
console.log(suma(rango(1,10)));


/*************************** */
function revertirArray(arr){
    let newarr = [];
    for (const elem of arr) {
        newarr.unshift(elem);
    }
    return newarr;
}
console.log(revertirArray([1,2,3,4,5,6]));


function revertirArrayEnSuLugar(arr){
    let cycles;
    if(arr.length % 2 !== 0){
        cycles = Math.floor(arr.length / 2);
    }
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr.length - i;
    }
    return arr;
}

console.log(revertirArrayEnSuLugar([1,2,3,4,5,6]));