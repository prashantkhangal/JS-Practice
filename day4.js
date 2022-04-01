var multiplyBy2 = (n)=>{
    return n*2;
  }
  console.log(multiplyBy2(5))
  var x = 10
  
  function a() {
      var x = 20
      function b() {
          var x = 30
          console.log(x, 'b') //30
      }
      b()
      console.log(x, 'a') //20
  }
  console.log(x, 'global') //10
  a()
  //var arr=[1,2 , 'hi', 'bye' ,[4,5,6]]
    //console.log(arr[4][0])
  //console.log(arr.length)\\
  let arr=[1,2,3,4,5]
  console.log(arr,'before pop')
  
  
  
  //fruits = ['apple', 'banana', 'orange', 'kiwi']
  
  //fruits.pop();
  //console.log(fruits)
  //console.log(fruits.pop())
  //console.log(fruits)
  //console.log(fruits.push('strawberry'))
  //console.log(fruits.push('melon'))
  //console.log(fruits)
  
  let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']
  
  console.log(fruits.push('strawberry', 'papaya', 'pear'))
  console.log(fruits.pop())
  console.log(fruits.shift())
  console.log(fruits.unshift('jackfruit'))
  let result = fruits.slice(0, 3)
  console.log(result)