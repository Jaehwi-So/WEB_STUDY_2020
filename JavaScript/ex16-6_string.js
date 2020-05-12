//# 내장 객체 String과 메서드
document.write("<h1> 내장 객체 String </h1>")
var str = new String("hello world hello javascript"); //선언1
var str2 = "Hello Javascript"; //선언2


document.write(str.charAt(2) + "<br>"); //문자열의 i번째 인덱스 번호에 해당하는 문자 반환
document.write(str.indexOf('l') + "<br>"); //문자열의 처음부터 해당 문자의 인덱스 반환
document.write(str.lastIndexOf('hello') + "<br>"); //문자열의 끝부터 해당 문자의 인덱스 반환
                                                    //없을 시 -1을 반환

document.write(str.search("hello") + "<br>"); //문자열의 처음부터 해당 문자의 인덱스 반환

document.write(str.match("javascript") + "<br>"); //문자열의 처음부터 찾는 문자와 일치하는 문자 반환
document.write(str.match("tensorflow") + "<br>"); //없으면 NULL 반환

document.write("<hr>")
document.write(str.replace("world", "java") + "<br>"); //문자열의 처음부터 해당 문자를 새 문자로 치환
document.write(str2.slice(6, -6) + "<br>"); //앞에서 a개의 문자를 자른 후 , 뒤에서 b번째 문자부터 자른 후 반환(-는 뒤에서 b번째 문자)
document.write(str2.substring(6, 10) + "<br>"); //a번째 인덱스부터 b번째 인덱스 이전의 문자열을 자른 후 반환
document.write("<hr>")

var str3 = "java html css javascript jquery";
var arr = str3.split(" ");  //지정한 문자를 기준으로 문자열을 나누어 배열에 저장
document.write(arr + "<br>");

document.write("<hr>")
document.write(str2.toLowerCase() + "<br>");    //문자열의 대문자를 모두 소문자로 변환
document.write(str2.toUpperCase() + "<br>");    //문자열의 소문자를 모두 대문자로 변환
document.write(str.concat(str2) + "<br>");  //두 개의 문자열을 이어붙임

document.write("<hr>")
document.write(String.fromCharCode(65) +'<br>');    //아스키 코드값에 해당하는 문자 반환
document.write(str.length + "<br>"); //문자열의 길이 반환
document.write(str.trim() + "<br>"); //문자열 앞뒤의 공백 제거 후 반환