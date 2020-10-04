function add_count(){
    let count = 0;
    count++;
    return count;
  }
  function add_count_closure(){
    let count = 0;
    function add(){
      count++;
      return count;
    }
    return add; //return add();가 아님, 클로져 함수를 반환.
  } 
  const test = add_count; //add_count()이면 return count값.
  const test2 = add_count_closure();

  console.log(test());
  console.log(test());
  console.log(test()); 
  console.log(test2());
  console.log(test2());
  console.log(test2());