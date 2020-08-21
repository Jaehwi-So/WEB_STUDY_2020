# 컨트롤러의 매핑과 데이터 상호작용
- [1. @RequestMapping : URL과 컨트롤러의 매핑](#1-requestmapping--url과-컨트롤러의-매핑)
  + [1-1. 컨트롤러 메서드 반환형](#1-1-컨트롤러-메서드-반환형)
  + [1-2. RequestMapping](#1-2-requestmapping)
	* [1-2-1. 메서드 수준 매핑](#1-2-1-메서드-수준-매핑)
	* [1-2-2. 클래스 수준 매핑](#1-2-2-클래스-수준-매핑)
- [2. 컨트롤러의 Parameter와 @RequestParam](#2-컨트롤러의-parameter와-requestparam)
- [3. 데이터 바인딩과 @ModelAttribute](#3-데이터-바인딩과-modelattribute)
- [4. 스프링 데이터 검증](#4-스프링-데이터-검증)
	* [4-1. Validator 클래스를 통한 검증](#4-1-validator-클래스를-통한-검증)
	* [4-2. @Valid 어노테이션을 통한 검증](#4-2-valid-어노테이션을-통한-검증)
- [5. 정리](#5-정리)


----------------------
## 1. @RequestMapping : URL과 컨트롤러의 매핑
웹은 URL을 통해 HTTP 요청을 한다. 이제 컨트롤러에서 해당 URL을 매핑하여 HTTP 요청을 처리하는 방법을 알아보겠다.
- 웹 MVC 에너테이션 활용을 위해 <annotation-driven> 엘리먼트를 통해 웹 MVC 에너테이션을 활성화 해야한다.
- RequestMapping 애너테이션을 사용해서 들어오는 요청을 적절한 컨트롤러 메서드로 매핑한다. 
- RequestMapping을 설정한 메서드의 시그니처는 유연하게 지정이 가능하다. 

### 1-1. 컨트롤러 메서드 반환형
컨트롤러의 메서드의 반환형은 다음과 같은 규칙을 따른다.    

- ModelAndView : Model을 바인딩하고 View와 묶인 형태의 ModelAndView 타입 반환.
```
@RequestMapping("/test.do") 
public ModelAndView test() { 
	ModelAndView view = new ModelAndView(); 
	view.setViewName("main.jsp"); // View는 main.jsp 
	view.addObject("name", "Lim"); //Model에 name attribute
	return view; 
}
```

- String : String의 경우 반환형이 View의 이름으로 사용된다.   
redirect:를 붙인다면 뷰 이름이 아닌 리다이렉션 URL로 인식한다.
```
@RequestMapping("/test.do") 
public String test() { 
	return "main.jsp"; 
}
```
```
@RequestMapping("/test.do") 
public String test() { 
	return "redirect:test2.do"; 
}
```

- void : View의 이름으로 RequestToViewNameResolver를 통해 자동생성된다. url과 view의 이름을 통일하여 사용한다.

- Object : View의 이름으로 RequestToViewNameResolver를 통해 자동생성된다

- @ResponseBody : 해당 어노테이션 사용 시 뷰의 이름이 아닌 메시지 컨버터를 통해 바로 HTTP 응답의 메시지 본문으로 전환된다. return 값은 오브젝트이고 메시지 컨버터가 View와 같은 방식으로 동작한다. 후에 Ajax를 통한 비동기 통신을 할 때 주로 사용하게 된다.

### 1-2. RequestMapping

이제 여러가지 방법으로 URL과 컨트롤러를 매핑하는 방법을 살펴보겠다.

#### 1-2-1. 메서드 수준 매핑

- 기본적인 메서드 수준의 매핑 방법이다. (root-url)/main1.do URL과 매핑된다.
```
	@RequestMapping("main1.do")
	public String two_page(Model model) {
		...
	}
```

- 두 개 이상의 URL을 배열의 형태로 매핑한다. (root-url)/ 와 (root-url)/main.do URL과 매핑된다.
```
	@RequestMapping({"/", "main.do"})
	public String main_page(Model model) {
		...
	}
```

#### 1-2-2. 클래스 수준 매핑

공통적인  부분을 클래스 단위로 RequestMapping 해 주고, 각 메서드에 매핑을 한다면 URL은 클래스 매핑 - 메서드 매핑 순으로 읽혀진다.   
밑의 예제는  (root-url)/member/insert.do 와 (root-url)/member/delete.do와 매핑된다.

```
@Controller
@RequestMapping("/member/*")
public class MemberController {
	public static final String VIEW_PATH = "/WEB-INF/views/";

	@RequestMapping({"/insert.do"})
	public String insert(Model model, MemberVO vo) {
		...
	}
	@RequestMapping({"/delete.do"})
	public String delete(Model model, MemberVO vo) {
		...
	}
}
```

#### 1-2-3. 여러가지 매핑

- HTTP(GET, POST) 요청 메서드에 따른 매핑이 가능하다. 주로 RESTful를 구현할 때 사용한다.
```
	//HTTP 메서드에 따른 요청 매핑
	@RequestMapping(value = "method.do", method = RequestMethod.GET)
	public String method_page(Model model) {
		String str = "RequestMapping(value = \"method.do\", method = RequestMethod.GET)";
		model.addAttribute("str", str);
		return VIEW_PATH + "mainpage.jsp";
	}
```

- 요청 파라미터에 따른 선택적인 매핑이 가능하다.	
```
	//요청 파라미터에 따른 매핑
	@RequestMapping(params="var=1", value = "param.do")
	public String param_page(Model model) {
		String str = "RequestMapping(params=\"var=1\", value = \"param.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "mainpage.jsp";
	}
	
	@RequestMapping(params="var=2", value = "param.do")
	public String param2_page(Model model) {
		String str = "RequestMapping(params=\"var=2\", value = \"param.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "mainpage.jsp";
	}
	
	//여러 요청 파라미터 이름-값 쌍을 지정하기
	@RequestMapping(params= {"var1=1", "var2=1"}, value = "multi_param.do")
	public String multi_param_page(Model model) {
		String str = "RequestMapping(params=\"var=2\", value = \"param.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "mainpage.jsp";
	}
	
	//특정 파라미터(var)가 존재할 때만 매핑
	@RequestMapping(params= "var", value = "exist_param.do")
	public String exist_param_page(Model model) {
		String str = "RequestMapping(params= \"var\", value = \"exist_param.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "mainpage.jsp";
	}
	
	//특정 파라미터(var)가 존재하지 않을 때만 매핑
	@RequestMapping(params= "!var", value = "exist_param.do")
	public String not_exist_param_page(Model model) {
		String str = "RequestMapping(params= \"!var\", value = \"exist_param.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "mainpage.jsp";
	}
```

- 요청 MIME타입, 즉 json과 같은 형식을 구분하여 매핑이 가능하다.	
```
	//요청의 MIME타입에 따라 매핑.
	@RequestMapping(consumes = "application/json", value = "consume.do")
	public String consume_page(Model model) {
		String str = "RequestMapping(consumes = \"application/json\", value = \"exist.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "mainpage.jsp";
	}
	//응답으로 받을 수 있는 MIME타입에 따라 매핑. 
	@RequestMapping(produces = "application/json", value = "produce.do")
	public String produce_page(Model model) {
		String str = "RequestMapping(produces = \"application/json\", value = \"produce.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "mainpage.jsp";
	}
```

- 요청 헤더 타입에 따라서도 매핑이 가능하다.
```
	//요청 헤더값에 따라 매핑
	@RequestMapping(headers = "Content-Type=text/plain", value = "header.do")
	public String header_page(Model model) {
		String str = "RequestMapping(headers = \"Content-Type=text/plain\", value = \"header.do\")";
		model.addAttribute("str", str);
		return VIEW_PATH + "mainpage.jsp";
	}
```
---------------------
## 2. 컨트롤러의 Parameter와 @RequestParam
요청으로 파라미터는 get일 경우 다음과 같이 url에 표시된다. 
+ get_param.do?name='홍길동'&age=12
컨트롤러에서 해당 파라미터 정보를 얻어서 처리하는 방법을 알아보자

- 메서드에 전달 가능한 인수 타입으로는 HttpServletRequest,HttpSession,SessionStatus,Model, 그리고 파라미터를 받을 수 있다. 파라미터는 String의 형태이나 형변환이 자동으로 이루어진다.   
메서드의 시그니처는 유연하게 지정이 가능하다.
```
	@RequestMapping("/get_param.do")
	//요청 파라미터의 이름을 지정하지 않았다면 name, age가 파라미터 이름으로 간주된다.
	public String get_param1(Model model, String name, int age){	
		//파라미터 정보가 메서드로 자동으로 넘어온다. 또한 형변환도 함께 이루어진다.
		ParamVO vo = new ParamVO(name, age);
		model.addAttribute("vo", vo);
		return VIEW_PATH + "mainpage.jsp";
	}
```

- 파라미터로 넘어온 값을 Map이나 Vo와 같은 객체의 형태로 받을 수 있다. 
	* Map의 경우 (key,value)의 값의 형태로 파라미터가 자동으로 저장된다.
	* vo의 경우 파라미터가 멤버변수가 일치하는 변수에 자동으로 대입된다. 단 vo의 멤버변수와 파라미터명이 일치해야 한다. 
```
	@RequestMapping("/get_param3.do")	
	public String get_param3(Model model, ParamVO vo) {	
		model.addAttribute("vo", vo);
		return VIEW_PATH + "mainpage.jsp";
	}
```

- @RequestParam 어노테이션을 통해 요청 파라미터의 이름과 인수를 매칭시킬 수 있으며 required속성이나 defaultValue 등의 속성으로 파라미터의 속성을 선택할 수 있다.
```
	//RequestParam을 통해 파라미터를 받아온다. 
	@RequestMapping("/get_param2.do")
	public String get_param2(Model model, 
			@RequestParam(value="name", required=false)String member_name, //required 속성을 통해 요청 파라미터를 필수로 만들거나 선택적으로 만들 수 있다.
			@RequestParam(value="age", defaultValue="20")int member_age){	//defaultValue 속성을 통해 파라미터의 디폴트값을 설정할 수 있다.
		ParamVO vo = new ParamVO(member_name, member_age);
		model.addAttribute("vo", vo);
		return VIEW_PATH + "mainpage.jsp";
	}
```
## 3. 데이터 바인딩과 @ModelAttribute
컨트롤러에서는 DB에서 얻어온 데이터, 파라미터로 넘어온 데이터 등을 Model, Session 등의 스코프에 바인딩하여 뷰에 전달하는 역할을 할 수 있다. 이제 데이터를 바인딩하는 방법에 대해 알아보겠다.

- 기본적으로 model.addAttribute()를 통해 Model 영역에 바인딩 하는 방법이다. Map의 형태로 데이터가 바인딩된다.
```
	public String one_page(ParamVO person, Model model) {
		model.addAttribute("name", person.getName());
		model.addAttribute("age", person.getAge());
		return VIEW_PATH + "resultpage.jsp";
	}
```

- 인수에 @ModelAttribute가 있는 경우
	* 파라미터로 넘겨 준 타입의 오브젝트를 자동으로 생성한다. getter와 setter가 명명 규칙에 맞게 만들어져 있어야 한다.
	* 생성된 오브젝트에(person) HTTP로 넘어 온 값들을 자동으로 바인딩한다. 
	* @ModelAttribute 어노테이션이 붙은 객체가 자동으로 Model에 추가된다.
```
	@RequestMapping("send_form1.do")
	public String two_page(@ModelAttribute("personVO")ParamVO person, Model model) {
		return VIEW_PATH + "resultpage.jsp";
	}
```

- 메서드 시작에 @ModelAttribute 어노테이션이 있는 경우
	* return되는 값을 model영역에 attrStr이라는 이름으로 바인딩한다.	
```
	@ModelAttribute("attrStr")
	public String attributeStr(){
	    return "ModelAttribute";
	}
```

## 4. 스프링 데이터 검증

- 보통 컨트롤러로 요청되는 HTTP 요청의 파라미터로는 폼이나 클라이언트 측의 데이터가 전달된다. 만약 클라이언트가 폼에 직접 입력하는 형태 등일 경우 데이터의 검증이 필요할 것이다.   
- 만약 이메일에 해당하는 데이터를 클라이언트가 입력했다면 해당 데이터가 이메일의 형태인지 검증할 필요가 있을 것이다. 이 방법으로는 해당 데이터를 클라이언트 측에서 javascript 등을 통해 데이터의 유효성을 검증할 수도 있지만 스프링에서 데이터를 검증하는 방법이 있다.

- 우선 스프링 검증에 앞서 다음 라이브러리들을 pom.xml에 추가하자
```
		<dependency>		
		    <groupId>javax.validation</groupId>		
		    <artifactId>validation-api</artifactId>		
		    <version>2.0.1.Final</version>	
		</dependency>
		<dependency>
		    <groupId>org.hibernate.validator</groupId>		
		    <artifactId>hibernate-validator</artifactId>
		    <version>6.0.7.Final</version>
		</dependency>
```

### 4-1. Validator 클래스를 통한 검증

다음은 User 정보를 검증하는 Validator 클래스이다. Validator 인터페이스를 구현하였다.
- supports()는 클래스의 유효성을 확인한다.
- validate()에서 target의 유효성을 판단하며 에러 발생시 errors에 에러가 있음을 저장한다. 유효성을 판별할 때에는 정규식 등을 주로 활용한다.
```
public class UserValidator implements Validator{

	@Override
	public boolean supports(Class<?> clazz) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void validate(Object target, Errors errors) {
		UserVO vo = (UserVO) target; 
		String email_regex = "^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,3}$";	//이메일 정규식
		String int_regex = "^[0-9]*$";	//숫자 정규식
		
		if(!Pattern.matches(email_regex, vo.getEmail())) {
			errors.rejectValue("email", "not matched type");
			System.out.println("error email");
		}
		if(vo.getName() == null || vo.getName() == "") {
			errors.rejectValue("name", "not matched type");
			System.out.println("error name");
		}
		if(vo.getAge() == null || !Pattern.matches(int_regex, vo.getAge())) {
			errors.rejectValue("age", "not matched type");
			System.out.println("error age");
		}
	}	
}
```

다음은 Controller이다. 앞에서 구현한 UserValidator를 통해 유효성을 검증하며 검증 결과가 BindingResult(result)에 저장된다. result.hasErrors()를 통해 에러가 있는지 없는지를 알아낼 수 있다.
```
	//Validator 클래스 구현을 통한 데이터 유효성 검사
	@RequestMapping({"join.do"})
	public String userJoin(@ModelAttribute UserVO vo, BindingResult result, Model model) {
		new UserValidator().validate(vo, result); 
		if(result.hasErrors()){ 
			return VIEW_PATH + "mainpage.jsp";
		}
		else {
			return VIEW_PATH + "resultpage.jsp";
		}
	}
```

### 4-2. @Valid 어노테이션을 통한 검증

다음은 DTO(Data Transfer Object)에 해당하는 클래스이다. 보통 VO와 개념을 혼용하여 사용하지만 주로 형태가 변하는 데이터를 다룰 때 사용한다. 해당 DTO 클래스에 검증이 필요한 멤버변수에 어노테이션을 달아둔다.

```
public class UserDTO implements Serializable {

    @NotBlank(message = "이름을 입력해주세요.")
    @Size(min = 2, max = 8, message = "이름을 2~8자 사이로 입력해주세요.")
    private String name;

    @Pattern(regexp="[a-zA-Z1-9]{6,12}", message = "나이는 정수로 입력해주세요")
    private String age;
    
    @NotBlank(message = "이메일을 입력해주세요.")
    @Email(message = "이메일 형식을 확인하세요")
    private String email;

	public String getEmail() {
		return email;
	}
	...
}
```
다음은 Annotation의 종류이다.
- 직접 검증을 하고 싶을 때 사용 
	* @AssertTrue
	* @AssertFalse
- 문자열을 다룰 때 사용
	* @NotNull // null 불가능
	* @NotEmpty // null, 빈 문자열(스페이스 포함X) 불가
	* @NotBlank // null, 빈 문자열, 스페이스만 포함한 문자열 불가
	* @Size(min=?, max=?) // 최소 길이, 최대 길이 제한
	* @Null // null만 가능 
- 숫자를 다룰 때 사용
	* @Positive // 양수만 허용
	* @PositiveOrZero // 양수와 0만 허용
	* @Negative // 음수만 허용
	* @NegativeOrZero // 음수와 0만 허용
	* @Min(?) // 최소값 제한
	* @Max(?) // 최대값 제한
- 정규식 관련
	* @Email // 이메일 형식만가능 (기본 제공)
	* @Pattern(regexp="?") // 직접 정규식을 쓸 수 있음

다음은 컨트롤러이다. 검증을 원하는 객체에 @Valid 어노테이션을 통해서 검증한다. 이 검증결과는 BindingResult를 통해 나온다.
```
	@RequestMapping({"join2.do"})
    public String userJoin2(@Valid @ModelAttribute UserDTO vo, BindingResult result){ 
        if(result.hasErrors()){
        	return VIEW_PATH + "mainpage.jsp";
        }
        // 유효성 검사를 성공적으로 끝마쳤을 때 원하는 행동 구현 
        return VIEW_PATH + "resultpage.jsp";
    }	
```

## 5. 정리
지금까지 컨트롤러에서의 요청 처리 과정에 대해서 알아보았다. 위의 기능들을 사용하는 과정을 예를 들어 정리해보자.
1. 클라이언트가 주민등록번호 입력을 통해 사람의 이름 검색을 서버에 url(search.do)로 요청했다.
2. @RequestMapping을 통해 매핑된 메서드를 찾는다.
3. 스프링 데이터 검증을 통해 클라이언트가 보내준 데이터 파라미터의 유효성을 체크한다.
4. 해당 파라미터를 기반으로 데이터베이스에서 사람의 이름을 찾는다.
5. 찾은 결과를 Model이나, Request 등 스코프 영역에 저장한다.
6. view의 이름을 return하여 해당 View에서 결과를 보여준다.



