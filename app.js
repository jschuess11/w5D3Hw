//   1. Intermediate Algorithm Scripting: Sum All Numbers in a Range

function sumAll(arr) {
    var max = Math.max.apply(null,arr);
    var min = Math.max.apply(null,arr);
    
    var range = max-min;
    var total = 0;

    for (var i = 1; i<range; i++){
total = total + min + i;}

    total = total + max + min;

    return total;
}
  
  sumAll([1, 4]);

//   2. Intermediate Algorithm Scripting: Diff Two Arrays

function diffArray(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length;i++){
        if(arr2.indexOf(arr1[i])===-1){
        newArr.push(arr1[i]);
        }
    }

    for (var j = 0; j < arr2.length;j++){
        if(arr1.indexOf(arr2[j])===-1){
            newArr.push(arr2[j]);
        }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//   3 Intermediate Algorithm Scripting: Seek and Destroy

function destroyer(arr) {
   var args = Array.prototype.slice.cal(arguments);
   args.splice(0,1);
   var newArray = [];

   for (var i = 0; i < args.length; i++){
    for (var j = 0; j < args.length; j++){
        iff(arr[i])==args[j]){
            delete arr[i];
        }
    }
   }
   newArray = arr.filter(removeFalseVar);
   return newArray;
}
    function removeFalseVar(value){
        return Boolean(value);
    }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);