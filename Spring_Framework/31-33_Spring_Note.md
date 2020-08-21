# 웹 어플리케이션 개발을 위한 다양한 기법들
- [1. Ajax 비동기 통신](#1-requestmapping--url과-컨트롤러의-매핑)
  + [1-1. Ajax, Json](#1-1-컨트롤러-메서드-반환형)
  + [1-2. Ajax를 통해 데이터 교환하기](#1-2-requestmapping)
	* [1-2-1. 서버 측](#1-2-1-서버-측)
		+ [1-2-1-1. @ResponseBody와 Jackson 라이브러리](#1-2-1-1-responsebody와-jackson-라이브러리)
		+ [1-2-1-2. @RequestBody](#1-2-1-2-requestbody)
	* [1-2-2. 클라이언트 측](#1-2-2-클라이언트-측)
		+ [1-2-2-1. XMLHttpRequest를 통한 Ajax](#1-2-2-1-xmlhttprequest를-통한-ajax)
		+ [1-2-2-2. Jquery를 통한 Ajax](#1-2-2-2-jquery를-통한-ajax)
- [2. Open API](#2-open-api)
- [3. 스프링 파일 업로드](#3-스프링-파일-업로드)

----------------------
## 1. Ajax 비동기 통신
비동기 방식은 웹페이지를 리로드하지 않고 데이터를 불러오는 방식입니다. 비동기식 방식을 이용할 경우 필요한 부분만 불러와 사용할 수 있으므로 리로드할 때의 불필요한 자원을 절약하고 서버의 처리가 완료될 때 까지 기다리지 않고 다른 테스크 처리가 가능하다. 이 때문에 속도가 빠르다는 장점이 있다. 또한 다양한 UI를 가능하게 해준다는 장점이 있다.

### 1-1. Ajax, Json

- Ajax(Asynchronous Javascript And Xml)
	* XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지 않고도 페이지의 일부만을 위한 데이터를 로드하는 기법, 즉 서버측으로부터 Json이나 xml형태로 필요한 데이터만 받아 현재 html, jsp 페이지만 갱신시켜주는 기법이다.

- JSON(JavaScript Object Notation)
	* 경량의 데이터 교환 형식이다. JSON은 사람이 읽고 쓰기에 용이하며, 기계가 분석하고 생성함에도 용이하여 데이터 교환에 자주 사용하는 형식이다.

### 1-2. Ajax를 통해 데이터 교환하기

이제 Ajax를 통한 비동기 통신을 구현해보자. 다음은 클라이언트 측에서 이름과 나이, email의 정보를 보내면 서버 측에서 정보를 받아 비동기 통신을 하는 과정이다.

#### 1-2-1. 서버 측

#### 1-2-1-1. @ResponseBody와 Jackson 라이브러리

어노테이션으로 @ResponseBody를 설정해두면 뷰의 이름이 아닌 메시지 컨버터를 통해 바로 HTTP 응답의 메시지 본문으로 전환된다. return 값은 오브젝트이고 메시지 컨버터가 View와 같은 방식으로 동작한다. 

```
	@RequestMapping(value="/join.do", method = {RequestMethod.GET})
	public @ResponseBody Map<String, Object> get_join_param(UserVO user) {
	    Map<String, Object> map = new HashMap<String, Object>();
	    System.out.println("input");
	    map.put("name", user.getName());
	    map.put("age", user.getAge());
	    map.put("email", user.getEmail());
	    return map;
	}
```
해당 컨트롤러에서 map형태의 객체를 반환하는데 이 객체는 jackson 라이브러리에 의해서 JSON의 형식으로 전환하여 HTTP 응답의 메시지로 전환된다.    
즉 {"name"="홍길동","age"="20","email"="gildong@gmail.com"}의 형식의 데이터로 변환되어 반환된다.   

jackson을 사용하기 위해서는 pom.xml에 라이브러리를 추가하자.
```
		<dependency>
			<groupId>org.codehaus.jackson</groupId>
			<artifactId>jackson-mapper-asl</artifactId>
			<version>1.9.13</version>
		</dependency>
		<dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.9.5</version>
        </dependency>
```
#### 1-2-1-2. @RequestBody

파라미터에 @RequestBody를 명시하면 해당 파라미터를 json의 형태로 받겠다는 뜻이다. 즉 json 형식의 파라미터를 UserVO 객체에 자동으로 바인딩하는 것이 가능해진다.

```
	@RequestMapping(value="/join.do", method = {RequestMethod.POST})
	public @ResponseBody Map<String, Object> post_join_json(@RequestBody UserVO user) {
	    Map<String, Object> map = new HashMap<String, Object>();
	    System.out.println("input");
	    map.put("name", user.getName());
	    map.put("age", user.getAge());
	    map.put("email", user.getEmail());
	    return map;
	}
```

#### 1-2-2. 클라이언트 측

이제 클라이언트 측에서 Ajax 요청을 하는 방법을 알아보겠다. 기본적으로 Ajax 요청을 할 때에는 요청과 요청 결과에 따른 result 처리부를 둔다. 

#### 1-2-2-1. XMLHttpRequest를 통한 Ajax

다음은 httpRequest.js에서 정의해 둔 XMLHttpRequest를 이용한 Ajax 통신 방법이다.
1. send() 메서드가 실행되면 우선 서버에 보낼 폼의 정보를 파라미터 형태로 변환한다.
2. sendRequest(url, 파라미터, 결과 처리 메서드, HTTP 요청 방식)을 통해 서버측에 요청을 한다.
3. 서버측의 결과를 resultFn에서 처리한다. xhr.readyState가 4이고 xhr.status가 200인 경우 정상적으로 처리가 되었다는 뜻이다.
4. 데이터는 xhr.responseText를 통해 받을 수 있다.
5. eval 메서드를 통해 사용 가능한 형식의 데이터로 변환한다.

```
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/httpRequest.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.js"></script>
	<script type="text/javascript"> 
		function send(f) { 
		   var name = f.name.value.trim();
			var age = f.age.value.trim();
			var email = f.email.value.trim();
			var url = "join.do";
			var param = "name=" + name + "&age=" + age + "&email=" + email;
			sendRequest(url, param, resultFn, "post"); 
		}
	
		function resultFn(){
			if( xhr.readyState == 4 && xhr.status == 200 ){
			    var data = xhr.responseText;
				var json = eval( '('+ data + ')');
				document.getElementById("name_output").innerHTML = json.name
				document.getElementById("age_output").innerHTML = json.age
				document.getElementById("email_output").innerHTML = json.email
			}
		} 
	</script>
```

#### 1-2-2-2. Jquery를 통한 Ajax

다음은 XMLHttpRequest를 사용하기 쉽도록 Jquery를 통해 Ajax 통신하는 방법이다. 기본적인 동작 방식은 XMLHttpRequest를 통한 Ajax와 비슷하다.
다음 코드에서는 세 가지 방법을 설명해두었다.

1. 폼을 기본적인 파라미터 형식으로 전달하여 Ajax 처리
2. 폼을 object 형식에 담아 json으로 전달하며 Ajax 처리
3. 폼을 json으로 전달하여 Ajax 처리

```
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/resources/js/jquery.js"></script>
	<script>
		//object형을 serialize하는 함수
		$.fn.serializeObject = function() {
			var o = {};
			var a = this.serializeArray();
			$.each(a, function() {
				if (o[this.name]) {
					if (!o[this.name].push) {
						o[this.name] = [ o[this.name] ];
					}
					o[this.name].push(this.value || '');
				} else {
					o[this.name] = this.value || '';
				}
			});
			return o;
		};
	
		//폼을 그대로 넘기기(Json으로 넘기는 것이 아닌 파라미터로 넘김)
		function send_form(f) {
			alert($("#userForm").serialize());
			$.ajax({
				url : "join.do",
				type : "GET",	//컨트롤러에서 POST형식의 컨트롤러는 파라미터의 @RequestBody설정을 해두었으므로 해당 방식으로는 에러가 난다.
				data : $("#userForm").serialize(), //serialize() : 폼 객체를 serialize하여 문자열 형태로 넘긴다.
				success : function(data) {
					document.getElementById("name_output").innerHTML = data.name;
					document.getElementById("age_output").innerHTML = data.age;
					document.getElementById("email_output").innerHTML = data.email;
				},
				error : function() {
					alert("error");
				}
			});
		}
		//object를 json으로 바꾸어 넘기기
		function send_obj_json(f) {
			var obj = {
				name : f.name.value.trim(),
				age : f.age.value.trim(),
				email : f.email.value.trim()
			}
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8;',
				url : 'join.do',
				dataType : 'json',
				//JSON.stringify() : JSON타입을 String 객체로 변환시켜주는 역할을 한다.
				//서버쪽으로 데이터를 넘길때,  String객체로 변환시켜주기 않으면 URL의 get 파라미터 형식처럼 넘겨버린다.
				data : JSON.stringify(obj),
				success : function(data) {
					document.getElementById("name_output").innerHTML = data.name;
					document.getElementById("age_output").innerHTML = data.age;
					document.getElementById("email_output").innerHTML = data.email;
				},
				error : function() {
					alert("error");
				}
			});
		}
		//폼을 json형태로 넘기기
		function send_form_json(f) {
			alert("onclick3");
			var form = $("#userForm").serializeObject(); //폼 객체를 Object 문자열 형태(json)로 변환
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8;',
				url : 'join.do',
				dataType : 'json',
				//JSON.stringify() : JSON타입을 String 객체로 변환시켜주는 역할을 한다.
				//서버쪽으로 데이터를 넘길때,  String객체로 변환시켜주기 않으면 URL의 get 파라미터 형식처럼 넘겨버린다
				data : JSON.stringify(form),
				success : function(data) {
					document.getElementById("name_output").innerHTML = data.name;
					document.getElementById("age_output").innerHTML = data.age;
					document.getElementById("email_output").innerHTML = data.email;
				},
				error : function() {
					alert("error");
				}
			});
		}
	</script>
```
----------------

## 2. Open API

오픈 API의 경우에도 JSON을 통한 데이터 교환이 주를 이루는 경우가 많다. 이 경우에도 Ajax를 사용하여 데이터를 교환하는 것이 용이하다.
```
	//영화목록을 가져오는 메서드
	function visit_list() {
		//실제로 openAPI호출시에는 url을 naver.com/vs/list.do
		var url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=430156241533f1d058c603178cc3ca0e';
		var param = '';
		sendRequest(url, param, resultFn, "GET");
	}
	
	function resultFn() {
		if( xhr.readyState == 4 && xhr.status == 200){
			var data = xhr.responseText;
			var json = eval("["+data+"]");
			alert(data);
		}
	}
```
---------------------

## 3. 스프링 파일 업로드

JSP에서도 살펴보았지만 사진과 같은 파일을 웹 상에 업로드하려면 데이터베이스에 파일의 경로를 저장하는 형태로 진행된다. 이 과정에서 파일은 웹 상의 경로에 저장되어야 하므로 고려할 사항이 있다.

우선 파일 업로드를 하기 위해서 다음 라이브러리들을 pom.xml에 추가하자.
```
	<!-- ## 파일 업로드 라이브러리 ##-->
	<!-- https://mvnrepository.com/artifact/commons-fileupload/commons-fileupload -->	<dependency>
	    <groupId>commons-fileupload</groupId>
	    <artifactId>commons-fileupload</artifactId>
	    <version>1.3.1</version>
	</dependency>
	<!-- ## IO 사용을 위한 라이브러리 -->
	<!-- https://mvnrepository.com/artifact/commons-io/commons-io -->
	<dependency>
	    <groupId>commons-io</groupId>
	    <artifactId>commons-io</artifactId>
	    <version>2.4</version>
	</dependency>
```

라이브러리의 사용을 위해서 다음과 같은 context.xml파일에 multipartResolver를 만들어 두었다.
```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans https://www.springframework.org/schema/beans/spring-beans.xsd">
		
	<!-- Root Context: defines shared resources visible to all other web components -->
	
	<!-- 파일 업로드를 위한  MultipartResolver -->
	<bean name="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
		<property name="defaultEncoding" value="utf-8"></property>	<!-- 인코딩 속성 설정 -->
		<property name="maxUploadSize" value="10485760"></property>	<!-- 최대 업로드 용량. 1mb = 1048576byte, 단위에 맞게 정확히 지정해야 한다. -->
	</bean>
</beans>
```

파일 업로드 과정은 우선 폼에서 file 형태의 데이터를 받아 서버측으로 넘길 것이다.
```
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<script type="text/javascript">
			function send(f){
				var title = f.title.value;
				var photo = f.photo.value;
				if(title == ""){
					alert("제목을 입력해주세요");
					return;
				}
				if(photo == ""){
					alert("사진을 등록해주세요");
					return;
				}
				f.action = "upload.do";
				f.submit();
			}
		</script>
	</head>
	<body>
		<form method="POST" enctype="multipart/form-data">	
			제목 : <input name="title"><br>
			사진 : <input name="photo" type="file"><br>
			<input type="button" value="전송" onclick="send(this.form);">
		</form>
	</body>
</html>
```

다음은 DB에 저장할 VO의 형식이다. 파일을 MultipartFile의 형태로 저장한다. filename에는 업로드가 완료된 파일의 경로를 저장할 것이다.
```
public class PhotoVO {
	private String title; //제목
	private MultipartFile photo;	//사진
	private String filename;	//업로드가 완료된 파일명
	...
}
```

다음은 컨트롤러에서의 파일 업로드 과정이다. 
1. getRealPath()를 통해 클라이언트 측이 접근할 수 있는 웹 상의 경로를 얻는다.
2. 업로드 파일이 존재할 시 파일 경로를 지정한다.
3. 해당 경로(디렉터리)가 존재하지 않을 시 생성한다.
4. 동일파일명 업로드 방지를 한다.
5. 업로드된 파일은 MultipartResolver라는 클래스(photo)가 지정해둔 임시저장소에 있는데, 
임시 저장소의 파일은 일정시간이 지나면 사라지기 때문에 내가 지정해준 경로로 복사해준다.
```
//파일 업로드
	@RequestMapping("/upload.do")
	public String upload(PhotoVO vo, Model model) {
		String webPath = "/resources/upload/";	//upload 폴더

		String savePath = application.getRealPath(webPath);	//절대경로로 변환. 클라이언트들이 이 경로에 사진을 업로드 할 수 있음.
		//getRealPath()는 webapp폴더까지를 의미한다.
		System.out.println(savePath);
		//업로드된 파일의 정보
		MultipartFile photo = vo.getPhoto();
		
		String filename = "no_file";
		//업로드한 파일이 실제로 존재할 시
		if(!photo.isEmpty()) {
			filename = photo.getOriginalFilename();	//실제 파일명
			
			//저장할 파일 경로 지정
			File saveFile = new File(savePath, filename);	//파일이 생성되는게 아니라 파일명으로 폴더가 생성된다. 따라서 밑에 photo.transferTo()메서드를 사용한다.
			
			//물리적으로 존재하지 않는 폴더일 경우 생성
			if(!saveFile.exists()) {		
				saveFile.mkdirs();	//없는 폴더 생성
			}
			else {
				//동일파일명 업로드 방지를 위해 현재 업로드 시간을 붙여서 중복 방지
				long time = System.currentTimeMillis();
				filename = String.format("%d_%s", time, filename);
				saveFile = new File(savePath, filename);
			}
			
			//1. filename은 폴더가 아니라 실제 이미지 파일로 복사됨. 
			//2. 업로드된 파일은 MultipartResolver라는 클래스(photo)가 지정해둔 임시저장소에 있는데, 
			//	  임시 저장소의 파일은 일정시간이 지나면 사라지기 때문에 내가 지정해준 savaPath경로로 복사해준다.
			try {
				photo.transferTo(saveFile);	
			} catch (Exception e) {
				e.printStackTrace();
			} 			
		}
		vo.setFilename(filename);
		
		model.addAttribute("vo", vo);
		return VIEW_PATH + "input_result.jsp";	
	}
```

이제 클라이언트 측에서 사진을 확인하려면 해당 경로를 통해 이미지를 불러올 수 있다.
```
<img src="${pageContext.request.contextPath}/resources/upload/${vo.filename}" width="200px"><br>
```
