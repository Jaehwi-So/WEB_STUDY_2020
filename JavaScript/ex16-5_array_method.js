//# 배열 객체의 메서드
document.write("<h1> Array의 메서드 </h1>")
var array = [3,2,4,1,5,7,6];
var res_join = array.join('-'); //연결 문자를 통해 배열을 한 개의 문자열로 반환
var res_rev = array.reverse(); //순서를 거꾸로 하여 반환
document.write("join() : " + res_join + "<br>");
document.write("reverse() : " + res_rev + "<br>");
array.sort();   //배열 오름차순 정렬
document.write("sort() : " + array + "<br>");
var res_slice = array.slice(2,5); // 인덱스 구간만큼 부분집합을 가져온다.
document.write("slice() : " + res_slice + "<br>");

var pop = array.pop();  //마지막 인덱스의 데이터 삭제(pop)
document.write("pop : " + pop + "<br>");
document.write("pop() : " + array + "<br>");
array.push(8);  //마지막 인덱스에 데이터 추가(push)
document.write("push() : " + array + "<br>");
var shift = array.shift(); //첫번째 인덱스의 데이터 삭제(dequeue)
document.write("shift : " + shift + "<br>");
document.write("shift() : " +array + "<br>");
array.unshift(0);  //첫번째 인덱스에 데이터 추가(push)
document.write("unshift() : " + array + "<br>");
document.write("length : " + array.length + "<br>");    //배열의 길이 반환

var array2 = [100,101,102,103];
var res_concat = array.concat(array2);
document.write("concat() : " + res_concat);
document.write("<hr>");
document.write("<hr>");