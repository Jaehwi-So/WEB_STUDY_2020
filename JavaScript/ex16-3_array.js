//# 배열. 내장 객체 Array
//int arr = new int[4];
document.write("<h1> 배열. 내장 객체 Array </h1>")
var arr = new Array(4);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
for( var i = 0; i < arr.length; i++ ){
	document.write( arr[i], "<br>" );
}
document.write("<hr>");


var arr2 = new Array(3);
arr2 = [10, "String", true];	//모든 자료형을 사용 가능하다.

for( var i = 0; i < arr2.length; i++ ){
	document.write( arr2[i], "<br>" );
}
document.write("<hr>");

//int arr = {10, 20, 30, 40};
var arr3 = [1000, 2000, 3000, 4000];

for( var i = 0; i < arr3.length; i++ ){
	document.write( arr3[i], "<br>" );
}
document.write("<hr>");
document.write("<hr>");






































