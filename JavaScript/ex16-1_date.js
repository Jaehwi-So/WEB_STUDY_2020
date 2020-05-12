// # 내장 객체 Date
//날짜와 시간에 관련된 정보를 제공받고 싶을 때 내장되어 있는 날짜 객체를 사용한다.
document.write("<h1> 내장 객체 Date </h1>")
var today = new Date();
document.write("년 : " + today.getFullYear() + "<br>");
document.write("월 : " + today.getMonth() + "<br>");
document.write("일 : " + today.getDate() + "<br>");
document.write("요일 : " + today.getDay() + "<br>");
document.write("시 : " + today.getHours() + "<br>");
document.write("분 : " + today.getMinutes() + "<br>");
document.write("초 : " + today.getSeconds() + "<br>");

document.write("밀리초 : " + today.getMilliseconds() + "<br>");
document.write("1970년 1월 1일부터 경과 밀리초 : " + today.getTime() + "<br>");
document.write("GMT 표준표기 : " + today.toGMTString() + "<br>");

document.write("<hr>")
today.setFullYear(2025); //날짜 정보를 수정한다.
today.setDate(25);
document.write("년 : " + today.getFullYear() + "<br>");
document.write("월 : " + today.getMonth() + "<br>");
document.write("일 : " + today.getDate() + "<br>");
document.write("요일 : " + today.getDay() + "<br>");
document.write("시 : " + today.getHours() + "<br>");
document.write("분 : " + today.getMinutes() + "<br>");
document.write("초 : " + today.getSeconds() + "<br>");

document.write("밀리초 : " + today.getMilliseconds() + "<br>");
document.write("1970년 1월 1일부터 경과 밀리초 : " + today.getTime() + "<br>");
document.write("GMT 표준표기 : " + today.toGMTString() + "<br>");
document.write("<hr>");
document.write("<hr>");
