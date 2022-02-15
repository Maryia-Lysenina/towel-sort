
// You should implement your task here.

module.exports = function towelSort (arr) {

      let newArr = [];
      if( typeof arr == 'undefined'){
          return newArr;
      } else{
          fn();
      }
      function fn(){
          for(let i = 0; i < arr.length; i++){
              if(i % 2 != 0){
                  arr[i].reverse();
              }
          }
      }
      function newArrReturn(){
          for(let i of arr){
              for(let j of i){
                  newArr.push(j)
              }
          }
      }
      newArrReturn();
      return newArr;

}
