var _ = {
    map: function(arr,func){
        var newArr = [];
        for(var i = 0; i < arr.length; i++){
            newArr[i] = func(arr[i]);
        }
        return newArr;
    },
    reduce: function(arr,func,memo){
        var newNum = memo;
        for(var i = 0; i < arr.length; i++){
            newNum += func(arr[i],memo);
        }
        return newNum;
    },
    find: function(arr,func){
        for(var i = 0; i < arr.length; i++){
            if(func(arr[i])){
                return arr[i];
            }
        }
    },
    filter: function(arr,func){
        var newArr = [];
        for(var i = 0; i < arr.length; i++){
            if(func(arr[i])){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    reject: function(arr,func) {
        var newArr = [];
        for(var i = 0; i < arr.length; i++){
            if(!func(arr[i])){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}
var double = _.map([1, 2, 3, 4, 5, 6], function(num){ return num * 2; });
console.log(double);
var add = _.reduce([1, 2, 3, 4, 5, 6], function(num,memo){ return memo + num; }, 0);
console.log(add);
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
