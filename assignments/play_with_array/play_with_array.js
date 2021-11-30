function getEven(arr) 
{     
    var evens = arr.filter(number => number % 2 == 0);
    return(evens);
}


function multiplyByN(arr, n) {
    for (var i=0; i<arr.length; i++){
        arr[i]=(arr[i]*n)
    }
    return(arr);
}

function removeNthElement(arr, n) {
    let a=[];
    for (var i=0; i<arr.length; i++){
        if (i!==n){
            a.push(arr[i]);
        }
    }
    return (a);
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}