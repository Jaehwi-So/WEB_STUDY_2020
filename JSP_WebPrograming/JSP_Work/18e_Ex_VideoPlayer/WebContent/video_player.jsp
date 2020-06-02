<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<style>
		 	h1{
		 		color : white;
		 		text-shadow: 3px 3px 3px black;
		 	}
		 	#content{
		 		margin : 20px;
		 		padding : 20px;
		 		border-width:4px; 
		 		border-style:solid; 
		 		border-color:black;
		 		width : 400px;
		 		height : 300px;
		 	}
		 	.box{
		 		border-width:2px; 
		 		border-style:solid; 
		 		border-color:black;
		 		background-color:silver;
		 		width : 400px;
		 		height : 20px;
		 		padding-top: 10px;
		 		padding-bottom : 10px;
		 	}
		</style>
		<script src="js/httpRequest.js"></script>
		<script>
			//해당페이지가 실행되면 가장 먼저 호출되는 메서드(메인함수 개념)
			window.onload = function(){
				//Ajax를 통해 백그라운드에서 재생목록을 얻어온다.
				var url = "video_list_jason.jsp";
				sendRequest(url, null, resultFn, "GET");
			}
			
			//Ajax를 통한 작업을 마무리하면 자동으로 호출되는 콜백메서드
			function resultFn(){
				if(xhr.readyState == 4 && xhr.status == 200){
					//서버측에서 넘겨준 JSON형식의 결과값.
					var data = xhr.responseText;		
					
					//서버에서 넘겨준 JSON형식의 데이터는 실제로는 ""에 묶여서 문자열 형식으로 전달됨.
					//이것을 사용가능한 JSON형식으로 바꿔줘야 한다.
					var json = eval(data);
					
					//select태그에 동영상 option태그를 추가하기
					var movie_select = document.getElementById("video_select");
					
					for(var i = 0; i < json.length; i++){
						var option = document.createElement("option"); /* <option>태그 생성 */
						option.innerHTML = json[i].title; /* <option></option>사이에 삽입 */
						option.value = json[i].path; /* option의 value값으로 경로지정. value : 실제로 서버에 전송되는 값 */
						//생성된 <option>태그를 select태그에 추가
						movie_select.appendChild(option);
						
					}
					
				}
			}
			
			function video_play(){
				/* 재생경로 얻어오기 */
				var path = document.getElementById("video_select").value;
				/* 영상을 재생할 vidio태그 검색 */
				var my_video = document.getElementById("my_video");
				my_video.src = path;
				
				/* 자동재생 */
				my_video.play();
			}
		</script>
	</head>
	<body>
		<div align="center">
			<hr width = "400px" color = "black">
			<h1>VideoPlayer</h1>
			<hr width = "400px" color = "black">

			<div id = "content">
				<div class = "box">
					<select id = "video_select" onchange = "video_play();"> <!-- onchange : select의 내용이 바뀌는 것을 감지 -->
						<option>재생할 비디오를 선택하세요</option>
					</select>
				</div>
				<hr width = "400px" color = "black">
				
				<video src = "" id="my_video"controls="controls" width="320" height="240">	<!-- 비디오를 재생시키는 태그 -->
				<!-- controls : 동영상 재생, 정지 등을 가능하도록 한다.-->
				</video>
			</div>
		</div>

	</body>
</html>