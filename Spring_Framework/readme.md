# WEB Study
## Java 기반 웹 공부를 하며 예제와 노트를 정리해 둔 Repository
-----------------------------
1. [HTML, CSS](클래스-객체-메서드-생성자의-개념)
2. [JavaScript](클래스-객체-메서드-생성자의-개념)
3. [DBMS](클래스-객체-메서드-생성자의-개념)
4. [JSP](클래스-객체-메서드-생성자의-개념)
5. [Spring Framework](클래스-객체-메서드-생성자의-개념)

## 객체 지향 프로그래밍

### 1. 객체 지향 프로그래밍이란?
객체 지향 프로그래밍은 프로그래밍에서 필요한 데이터를 추상화시켜 상태와 행위를 가진 객체를 만들고 그 객체들 간의 유기적인 상호작용을 통해 로직을 구성하는 프로그래밍 방법

### 2. 객체 지향 프로그래밍의 장단점
- 장점
 * 코드 재사용 용이 : 자신이 만든 클래스 뿐 아니라 라이브러리 등을 통해 클래스를 가져와서 이용 가능하며 상속을 통해 코드를 확장할 수 있음
 * 수정과 유지보수 : 절차 지향 프로그래밍에서는 해당 부분을 절차에 맞추어 찾아 수정해야 하는 반면 객체 지향 프로그래밍에서는 수정해야 할 부분이 클래스 내부에 정의되어 있으므로 해당 부분을 수정하면 됨
 * 모듈화 : 클래스 단위로 모듈화시켜서 개발할 수 있으므로 업무분담에 용이하다.
- 단점
	* 처리속도가 상대적으로 느림 
	* 객체가 많으면 용량이 커질 수 있음

### 3. 객체 지향 프로그래밍의 특징

- 클래스와 객체, 그리고 인스턴스
	* 클래스 : 어떠한 용도로 사용될 데이터를 추상화를 통해 속성과 행위를 변수와 메서드로 정의한 것
	* 인스턴스(객체) : 클래스에서 정의한 것이 실제 메모리상에 할당된 것으로 실제 프로그램에서 사용되는 데이터
- 추상화
	* 복잡한 자료, 모듈, 시스템 등으로부터 핵심적인 개념 또는 기능을 간추려 내어 클래스로 표현하는 것
	* 추상 클래스와는 다른 이야기
- 캡슐화
	* 코드를 재활용하기 위해 관련 기능과 특성을 한 곳에 모으고 분류하는 것
	* 객체 지향 프로그래밍에서 역할을 수행하기 위한 목적을 "클래스"라는 "캡슐"에 분류해서 넣는것이 캡슐화다.
- 상속
	* 상속은 부모 클래스의 속성과 기능을 그대로 사용할 수 있으며 기능의 일부분을 변경해야 할 경우 자식 클래스에서 메서드의 재정의를 통해 변경이 가능하다.
	* 라이브러리를 사용할 때 상속을 통해 사용자의 의도에 맞게 수정이 가능하여 불필요한 코드 수정이 필요없다.
- 다형성
	* 하나의 변수명, 함수명 등이 상황에 따라 다른 의미로 해석될 수 있는 것이다.
	* 오버라이딩(Overriding) : 부모 클래스의 메서드와 같은 이름이지만 메서드를 재정의 하는 것
	* 오버로딩(Overloading) : 같은 이름의 함수를 매개변수의 타입이나 개수를 다르게 하여 다르게 호출 가능하게 하는 것
- 접근 제어자
	* public, private, protected 등을 통해 해당 멤버변수나 함수에 접근할 수 있는 클래스를 제한하는 것.
	* 보안성 향상과 제어를 할 때 용이하다.

--------------------------------
## INDEX

해당 번호에 해당하는 폴더에 해당 주제에 대한 예제 프로젝트와 설명으로 주석이 상세히 달려 있음   
인덱스의 부가 목록으로는 키워드를 달아 둠

- [클래스, 객체, 메서드, 생성자의 개념](클래스-객체-메서드-생성자의-개념)
- [연산자, 자료형, 제어문, 반복문, 배열, 람다식](연산자-자료형-제어문-반복문-배열-람다식)
- [상속과 다형성, 추상 클래스, 인터페이스](-상속과-다형성-추상-클래스-인터페이스)
- [여러가지 자바 클래스](여러가지-자바-클래스)
- [스레드](스레드)
- [컬렉션 프레임워크와 제네릭 타입](컬렉션-프레임워크와-제네릭-타입)
- [예외 처리](예외-처리)
- [IO (입출력)](io-입출력)
- [자바 AWT](자바-awt)
- [라이브러리 사용](라이브러리-사용)

----------------------------

* ## 클래스, 객체, 메서드, 생성자의 개념
	+ ### (1) 클래스, 객체, 메서드, 생성자
		- 클래스 정의
		- 멤버변수와 메서드
		- 메서드 오버로딩
		- 생성자
		- static

* ## 연산자, 자료형, 제어문, 반복문, 배열, 람다식
	+ ### (2) 연산자, 자료형
		- 형변환
		- 업캐스팅, 다운캐스팅
	+ ### (3) 제어문, 반복문
		- if, else, else-if
		- switch-case 
		- for, 중첩for, 
		- while, do-while 
		- break, continue, label break, label continue
	+ ### (8) 배열
		- 배열, 다차원 배열
	+ ### (22) 람다식과 함수형 프로그래밍
		- 익명 함수의 구현과 호출
		- ->

* ## 상속과 다형성, 추상 클래스, 인터페이스
	+ ### (4) 상속(Inheritence), 다형성(Polymorphism)
		- extends
		- 부모 클래스, 자식 클래스
		- 메서드 재정의
		- overriding, @Override
		- super
	+ ### (6) 추상 클래스(Abstract Class)
		- Abstract class
		- 추상 메서드 조건부 상속
		- extends
	+ ### (7) 인터페이스(Interface)
		- Interface
		- 추상 메서드와 상수로만 이루어짐
		- Implements
		- 구현

* ## 여러가지 자바 클래스
	+ ### (9) object 클래스와 메서드
		- toString(), equals(), hashCode(), clone(), getClass()
	+ ### (10) string 클래스와 메서드
		- indexOf(), charAt(), equals(), trim(), substring() 
	+ ### (11) wrapper 클래스
		- Integer, String, Double..
		- Integer.parseInt()
	+ ### (12) class 클래스
		- getClass(), forName(), newInstance(), reflection
	+ ### (21) 내부 클래스
		- 인스턴스 내부 클래스
		- 정적 내부 클래스
		- 지역 내부 클래스
		- 익명 내부 클래스
	+ ### (23) Stream 클래스
		- 배열, collection 등 범위 안 수 처리, IO Stream과 다른 개념
		- 중간 연산, 최종 연산
		- stream() .sum(), .max(), average(), 
		- sorted(), filter(), map(), reduce()

* ## 스레드
	+ ### (13) 스레드
		- 멀티스레드, sleep(), Runnable, join, 데몬스레드
		- synchronized(동기화), wait-notify(스레드 제어)

* ## 컬렉션 프레임워크와 제네릭 타입
	+ ### (14) Generic 타입
		- &lt;Integer>
		- Variable Argument
		+ ### List
			- (15) ArrayList
				- 기본 배열은 크기를 변경할 수 없지만 ArrayList는 크기를 동적으로 사용
				- element의 삽입과 삭제가 유동적이고 자유로움
				- add(), size(), get(), remove()
				- Iterator
			- (16) LinkedList
				- 연결 리스트 형태
				- addFirst(), addLast()
		+ ### Set
			- (17) HashSet
				- 집합 자료구조, 순서와 상관없이 중복을 허용하지 않음
				- 인덱스 사용 불가능. 
				- add(), size(), remove()
				- Iterator
			- (18) TreeSet
				- 기준에 따라 자료가 정렬되는 Set
				- Comparable
		+ ### Map
			- (19) HashMap
				- (key,value)의 쌍, key는 중복허용 안됨
				- get(), put(), containsKey(), containsValue()
				- entrySet(), keySet(), values()
				- entry.getValue(), entry.getKey()
			- (20) TreeMap
				- 기준에 따라 자료가 정렬되는 Map
				- Comparable

* ## 예외 처리
	+ ### (24) 예외 처리
		- try-catch
		- try-catch-finally
		- try-with-resource
		- throws
		- 사용자 정의 예외처리

* ## IO (입출력)
	+ ### (5) 콘솔(표준) 입출력
		- random()
		- printf, print, println
		- formatter 
		- Scanner
	+ ### (25) 표준 입출력과 파일
		- readLine(), readPassword() 
		- reader()  writer()
		- Scanner
		- File, directory, exsits(), mkdir()
	+ ### (26) Byte 단위 스트림
		- InputStream, OutputStream
		- BufferedInputStream, BufferedOutputStream
	+ ### (27) Character 단위 스트림
		- FileReader, FileWriter
		- BufferedReader, BufferedWriter
	+ ### (27) Object 단위 스트림
		- ObjectInputStream, ObjectOutputStream
		- Serializable
	+ ### (28) 보조 스트림 (Wrapper Stream)
		- DataOutputStream, DataInputStream
		- InputStreamReader, OutputStreamReader
		- ByteArrayInputStream, ByteArrayOutputStram


* ## 자바 AWT
	+ ### (29) AWT 프레임, 프레임 상속
	+ ### (30) AWT 이벤트 처리
	+ ### (31) AWT 컴포넌트
	+ ### (32) AWT 활용

* ## 라이브러리 사용
	+ ### (33) 외부 라이브러리 사용



