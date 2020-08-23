# RESTful API와 웹 서비스
- [1. REST란?](#1-rest란)
  + [1-1. RESTful API의 정의](#1-1-restful-api의-정의)
  + [1-2. REST의 특징](#1-2-rest의-특징)
  + [1-3. RESTful API 설계 규칙](#1-3-restful-api-설계-규칙)

- [2. RESTful API 만들기](#2-restful-api-만들기)
	+ [2-1. 컨트롤러](#2-1-컨트롤러)
	+ [2-2. 클라이언트](#2-2-클라이언트)

----------------------
## 1. REST란?

### 1-1. RESTful API의 정의

REST : Representational State Transfer 
- 웹에 존재하는 자원에 고유한 URI를 부여해 활용하는 것으로, 자원을 정의하고 자원 접근에 대한 경로를 지정하는 방법

- REST API로 요청이 HTTP 요청이 전송되고 이러한 요청을 수신하면 REST용으로 설계된 API가 XML, View, JSON과 같은 다양한 형식으로 결과를 반환한다. 주로 JSON의 형태로 반환한다.

- 어떤 자원에 대해 CRUD(Create, Read, Update, Delete) 연산을 수행하기 위해 URI(Resource)로 요청을 보내는 것

- CRUD 연산에 대한 요청을 할 때, 요청을 위한 Resource(자원, URI)와 이에 대한 Method(행위, POST) 그리고 Representation of Resource(자원의 형태 표현, JSON)을 사용

- REST는 웹에 최적화되어 있고, 데이터 포맷을 주로 JSON을 사용하여 호환성과 확장성, 성능이 뛰어나다.

- URL vs URI
	* URI : 통합 자원 식별자 ,웹 상의 자원을 나타내는 유일한 주소.
	* URL : 서비스를 제공하는 각 서버들에 있는 파일의 위치를 표현하기 위한 주소
	* URI의 하위개념에 URL이 포함되어 있다.
	* URI는 자원에 접근하기 위해 사용되는 절차이자 유일한 자원의 이름이라고 볼 수 있다.
	* http://example.com/member?idx=1, http://example.com/member?idx=2 둘은 같은 URL을 가졌으나 다른 URI를 가짐

### 1-2. REST의 특징

- Uniform (단일 인터페이스)
	* 자원에 접근하는 방식(URI의 디자인)이 단순하게 한정되어 있어 해당 자원에 접근 시 일정한 경로를 통해서 접속해야 하고, 그 방식이 단순하다. URL의 길이가 짧아질 뿐 아니라 하나의 URL을 통해 자원 접근에 대한 여러 행위를 할 수 있다.

- Stateless (무상태성)
	* 무상태성 성격을 지니는 것은 세션이나 쿠키 정보 등 불필요한 정보를 별도로 저장하지 않고 오로지 데이터 접근에 관한 로직만을 수행하여 서버는 들어오는 요청을 단순히 처리하기만 하면 된다.

- Cacheable (캐싱)
	* 웹 표준을 그대로 사용하기에 HTTP가 가진 캐싱 기능을 사용할 수 있다.

- Self-descriptiveness (자체 표현 구조)
	* URL을 보고 접근하려는 자원의 유추가 가능하다. 예를 들어 http://example.com/shop/food
	와 같이 shop 안의 food 자원에 접근한다는 것을 알 수 있다.

- 서버-클라이언트 구조
	* 서버는 API를 제공하고, Client는 인증이나 세션 처리 등 Server와 Client의 역할이 명확히 나뉘기 때문에 서로 간의 의존성이 줄어들게 된다.

### 1-3 RESTful API 설계 규칙

RESTful API의 목적은 클라이언트가 URI를 호출하여 자원의 접근할 수 있도록 하는 것이다. RESTful하게 API를 설계할 때 명확히 정해진 규격은 없지만 대부분 다음과 같은 URI의 형식을 따른다.

1. uri의 이름은 접근하려는 자원을 식별할 수 있는 명사 형태.
	- /add-person (x)
	- /person	(o)

2. uri의 끝이 /로 끝나면 안된다.
3. 자원의 접근에 대한 행위 CRUD(CREATE, READ, UPDATE, DELETE)는 HTTP 메서드를 통해 명시
	- /person (GET) -> 전체 person 데이터 조회
	- /person/1 (GET) -> 1번 person 데이터 조회
	- /person (POST) -> person 데이터 추가
	- /person (PUT) -> person 데이터 수정
	- /person/1 (DELETE) -> 1번 person 데이터 삭제
4. 가독성을 위해 -를 사용하고 _는 사용하지 않는다.
5. 소문자를 사용하고 확장자는 포함하지 않는다.

------------------------

## 2. RESTful API 만들기

이제 직접 REST 형식의 컨트롤러를 구현하여 API를 만들고 해당 API를 사용해보자.

### 2-1. 컨트롤러

컨트롤러에서 요청에 대한 매핑 처리를 REST 형식으로 한다.

```
@Controller
@RequestMapping(value="/user")
public class UserController {
	//첫 번째, URI는 정보의 자원을 표현해야 한다.
	//두 번째, 자원에 대한 행위(CRUD)는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다.
	//GET, POST, PUT, DELETE(READ, CREATE, UPDATE, DELETE)

	@Autowired
	private UserDAO user_dao;

	public static final String VIEW_PATH = "/WEB-INF/views/";

	//유저정보 전체 조회	(http://../restful/user , GET)
	//@RequestMapping(value="", method = {RequestMethod.GET})
	@GetMapping(value = "")
	@ResponseBody
	public List<UserVO> getUserList() {
	    List<UserVO> list = user_dao.select_userList();
	    return list;
	}
	
	//유저정보 한 명 조회 (http://../restful/user/1 , GET)
	//@RequestMapping(value="/{idx}", method = {RequestMethod.GET})
	@GetMapping(value = "/{idx}")
	@ResponseBody
	public UserVO getUserInfo(@PathVariable("idx") int idx) {
	    UserVO vo = user_dao.select_userOne(idx);
	    return vo;
	}
	
	//유저 추가	(http://../restful/user , POST)
	//@RequestMapping(value="", method = {RequestMethod.POST})
	@PostMapping(value = "")
	@ResponseBody
	public Map<String, Object> insertUser(@RequestBody UserVO params) {
		Map<String, Object> result = new HashMap<String, Object>();
	    int res = user_dao.insert_user(params);
	    if(res == 1) {
	    	result.put("result", "success");
	    }
	    else {
	    	result.put("result", "fail");
	    }
	    return result;
	}
	
	//유저 삭제	(http://../restful/user/1 , DELETE)
	//@RequestMapping(value="/{idx}", method = {RequestMethod.DELETE})
	@DeleteMapping(value = "/{idx}")
	@ResponseBody
	public Map<String, Object> deleteUser(@PathVariable("idx") int idx) {
	    int res = user_dao.delete_user(idx);
		Map<String, Object> result = new HashMap<String, Object>();
	    if(res == 1) {
	    	result.put("result", "success");
	    }
	    else {
	    	result.put("result", "fail");
	    }
	    return result;
	}
	
	//유저 수정(http://../restful/user , PUT)
	//@RequestMapping(value="", method = {RequestMethod.PUT})
	@PutMapping(value = "")
	@ResponseBody
	public Map<String, Object> updateUser(@RequestBody UserVO params) {
		Map<String, Object> result = new HashMap<String, Object>();
		int res = user_dao.update_user(params);
		if(res == 1) {
			result.put("result", "success");
		}
		else {
			result.put("result", "fail");
		}
		return result;
	}		
}
```
다음은 요청을 매핑한 컨트롤러이다.
1. user라는 URI를 통한 접근
2. GET, POST, PUT, DELETE의 Http Method에 따른 CRUD 수행
3. @ResponseBody를 통해 Json형태로 데이터 반환
4. @RequestMapping에 method를 설정하는 것 대신   
@PutMapping, @GetMapping, @PostMapping, @DeleteMapping으로 대체 가능하다.
5. @PathVariable
	* 매핑된 URL 주소의 {}를 변수로 사용한다.
```
	@GetMapping(value = "/{idx}")
	@ResponseBody
	public UserVO getUserInfo(@PathVariable("idx") int idx) {
```
------------------------

```
@RestController(value="/user")
public class UserController {
	...
	@GetMapping(value = "")
	public List<UserVO> getUserList() {
	    List<UserVO> list = user_dao.select_userList();
	    return list;
	}
	...
}
```
다음과 같이 @RestController임을 명시하면 모든 메서드를 @ResponseBody로 처리하게 된다.

-----------------------------
### 2-2. 클라이언트

클라이언트 측에서 API를 사용하는 예시이다. 

```
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
		
		//목록전체 조회
		function select_list(f){
			$.ajax({
				type : 'GET',
				url : 'user',
				success : function(data) {
					alert("success");
					var inner = "<table>";
					$.each(data, function(i, v) {
						inner += "<tr>"
						inner += "<td>" + v.idx + "</td>";
						inner += "<td>" + v.name + "</td>";
						inner += "<td>" + v.age + "</td>";
						inner += "<td>" + v.email + "</td>";
						inner += "</tr>";
					}); 
					inner += "</table>";
					document.getElementById("output").innerHTML = inner;
				},
				error : function() {
					alert("error");
				}
			});
		}
		
		//목록 하나 조회
		function select_one(f){
			var idx = f.idx.value;
			$.ajax({
				type : 'GET',
				url : 'user/' + idx,
				success : function(data) {
					alert("success");
					var inner = ""
					inner += data.idx + "/";
					inner += data.name + "/";
					inner += data.age + "/";
					inner += data.email;
					document.getElementById("output").innerHTML = inner;
				},
				error : function() {
					alert("error");
				}
			});
		}
		
		//목록 하나 삭제
		function delete_one(f){
			var idx = f.idx.value;
			$.ajax({
				type : 'DELETE',
				url : 'user/' + idx,
				success : function(data) {
					alert("success");
					var inner = data.result;
					document.getElementById("output").innerHTML = inner;
				},
				error : function() {
					alert("error");
				}
			});
		}
		
		//insert / POST
		function insert(f) {
			var form = $("#insert_form").serializeObject(); //폼 객체를 Object 문자열 형태(json)로 변환
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8;',
				url : 'user',
				dataType : 'json',
				data : JSON.stringify(form),
				success : function(data) {
					alert("success");
					var inner = data.result;
					document.getElementById("output").innerHTML = inner;;
				},
				error : function() {
					alert("error");
				}
			});
		}
		
		//update / POST
		function update(f) {
			var form = $("#update_form").serializeObject(); //폼 객체를 Object 문자열 형태(json)로 변환
			$.ajax({
				type : 'PUT',
				contentType : 'application/json; charset=utf-8;',
				url : 'user',
				dataType : 'json',
				data : JSON.stringify(form),
				success : function(data) {
					alert("success");
					var inner = data.result;
					document.getElementById("output").innerHTML = inner;
				},
				error : function() {
					alert("error");
				}
			});
		}
	</script>
```
클라이언트 측에서 Ajax를 통해 API를 사용하는 방법이다. 데이터는 json 형태의 Object로 반환되어 리스트의 경우 .$each를 사용하여 값을 얻어낼 수 있다.