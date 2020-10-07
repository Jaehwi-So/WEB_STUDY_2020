/*
JSON.parse() : 반대로 인수로 전달받은 문자열을 자바스크립트 객체로 변환
JSON.stringify() : 자바스크립트 객체를 JSON 문자열로 변환
*/

var data = {
    name: "kim", 
    age: "25"
 }
var person = JSON.stringify(data);  //객체 -> JSON 문자열   
console.log(person); //{"name":"kim","age":"25"}
var oPerson = JSON.parse(person);   //JSON 문자열 -> 객체
console.log(oPerson);   
 