//# 다차원 배열		

//#1
document.write("<h1> 다차원 배열 </h1>")
var arr4 = new Array(2);
	arr4[0] = new Array(2);
	arr4[1] = new Array(3);
			
	arr4[0][0] = 10;
	arr4[0][1] = 20;
			
	arr4[1][0] = 30;
	arr4[1][1] = 40;
	arr4[1][2] = 50;
			
	for( var i = 0; i < arr4.length; i++ ){
				
		for( var j = 0; j < arr4[i].length; j++ ){
					
			document.write(arr4[i][j], " ");
					
		}
	document.write("<br>");
    }

document.write("<hr>");

//#2
var arr5 = [[1,2,3],[4,5,6],[7,8,9]];

for( var i = 0; i < arr5.length; i++ ){
				
		for( var j = 0; j < arr5[i].length; j++ ){
					
			document.write(arr5[i][j], " ");
					
		}
	document.write("<br>");
    }
document.write("<hr>");
document.write("<hr>");