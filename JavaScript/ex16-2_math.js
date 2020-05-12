//# 내장 객체 Math
document.write("<h1> 내장 객체 Math </h1>")
var a, b, c, d;
a = -10;
b = 10;
c = 20.1234;
d = 30.12345678;
document.write("a의 절댓값 : " + Math.abs(a) + "<br>");    //절댓값 반환
document.write("a, b, c, d 중 최댓값 : " + Math.max(a, b, c, d) + "<br>");    //최댓값 반환
document.write("a, b, c, d 중 최솟값 : " + Math.min(a, b, c, d) + "<br>");    //최솟값 반환
document.write("a^3  : " + Math.pow(a, 3) + "<br>");    //거듭제곱값 반환
document.write("c의 소수점 첫째 자리에서 반올림 정수  : " + Math.round(c) + "<br>");    //반올림
document.write("c의 소수점 첫째 자리에서 올림 정수  : " + Math.ceil(c) + "<br>");    //올림
document.write("c의 소수점 첫째 자리에서 내림 정수  : " + Math.floor(c) + "<br>");    //내림
document.write("b의 루트값 : " + Math.sqrt(b) + "<br>");    //제곱근
document.write("0~1 사이의 난수 : " + Math.random() + "<br>");    //제곱근

var rand = Math.floor(Math.random() * 10) + 1;
//[min, max] 사이의 정수 난수를 발생시키려면 Math.floor(Math.random()*(max-min-1)) + min
document.write("1~10 사이의 정수 난수 : " + rand + "<br>");
document.write("<hr>");
document.write("<hr>");