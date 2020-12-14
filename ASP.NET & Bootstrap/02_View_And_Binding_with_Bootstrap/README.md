# BootStrap이란?
- 프론트엔드 개발의 일관성 유지에 대한 문제를 해결하기 위한 오픈 소스
- 재사용 가능한 요소의 집합과 구조, 틀을 결정하고 확장 가능한 기반 코드를 제공하는 프론트엔드 프레임워크
- HTML과 CSS 기반의 템플릿 양식, 버튼, 네비게이션 등의 페이지 구성 요소를 포함
- 자바스크립트를 선택적으로 확장 가능하다.
- Github의 오픈 소스로 사용 가능하다.

# BootStrap Template 다운로드
- www.mixedcode.com/download/Template.zip
- 웹 프로젝트에 Template 디렉터리 붙여넣기
- 솔루션 탐색기 상단의 모든 파일 표시 아이콘을 통해 Template 하위 파일들과 디렉터리를 표시
- 해당 파일들을 오른쪽 마우스 클릭하여 프로젝트에 포함

# BootStarp 템플릿 구조
- ## 템플릿 물리 파일 구조
	* Template : 메뉴를 표현하는 HTML 문서 페이지들과 assets 디렉터리가 존재
	* assets 
		+ custom : HTML 문서 페이지가 사용하는 CSS, JS, Image 등이 존재하는 디렉터리
		+ vendor : 각종 오픈소스 플러그인 프로그램을 포함한 디렉터리
- ## DOM 구조
	* 공통적으로 사용되는 영역인 마스터 페이지 영역과 고유 컨텐츠 내용이 보여지는 컨텐츠 영역으로 구분된다.
	* 대부분의 웹 사이트는 페이지의 마스터 화면 영역과 컨텐츠 영역을 html 소스에서 구분하고 웹 페이지에서 공통적으로 사용되는 영역의 소스를 별도의 웹 페이지로 분리하여 관리한다.
	* ASP.NET MVC에서는 레이아웃 뷰, 파셜 뷰 페이지와 같은 공통 리소스를 분리하여 재사용하고, Include를 제공한다.
	* 템플릿의 index.html을 살펴보면 크게 head, (header, content-wrap, footer)로 구성된 것을 확인할 수 있으며 content-wrap 영역 코드를 제외한 코드를 마스터 페이지 뷰로 구성하며 본문 영역은 메인 페이지 컨텐츠 뷰로 구성된다.

# MVC5 View 페이지 구성하기
- ## 레이아웃 View 페이지 구성
	+ Views/Shared 디렉터리에서 MVC5 레이아웃 페이지 추가
	+ Bootstarp의 index.js의 마스터 영역 복사, 참조 CSS 파일과 JS 파일등의 경로 변경
	+ 컨텐츠 영역으로 표시될 부분은 @RendorBody()태그를 넣어 이후 컨텐츠 영역이 표기될 수 있도록 한다.
	+ 레이아웃 페이지에 존재하는 각종 CSS와 JS 외부 참조 링크 정보를 App_Start/BundleConfig.cs 클래스 파일을 통해 환경 설정이 가능하다.
	+ BundleConfig 변경 후 레이아웃 페이지에 참조되어 있는 링크 정보를 삭제 후 @Styles.Render와 @Scripts.Render를 통해 참조 파일을 BundleConfig에서 정의한 대로 추가한다.
- ## 컨트롤러 설정
	+ Controllers -> MVC5 Controller 추가 
	+ Index 액션 메서드에서 오른쪽 마우스 -> 뷰 추가 메뉴 -> 레이아웃 페이지 선택 후 생성
	+ App_Start/RouteConfig에서 default(초기 페이지 설정) 변경.

-------------
# BootStrap의 이해와 기초 사용법
## 부트스트랩 사용 환경 확인

### 1. HTML 템플릿 페이지 환경 확인
부트스트랩 관련 meta tag와 스타일 파일 설정, 자바스크립트 파일 참조 확인하기.   
   
index.html
```
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name=viewport content="width=device-width, initial-scale=1">
	...
	<link href="assets/vendor/bootstrap/css/bootstrap.min.css" property='stylesheet' rel="stylesheet" type="text/css" media="screen"/>
	...
	<script src="assets/vendor/jquery/js/jquery-2.2.0.min.js" type="text/javascript"></script>
	<script src="assets/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

```
### 2. ASP.NET MVC5 부트스트랩 사용 환경 확인
html 템플릿을 레이아웃 페이지 뷰와 콘텐츠 뷰로 변경 후 BundleConfig.cs를 이용해 구성한 부트스트랩 링크 정보 확인.   
   
BundleConfig.cs
```
            bundles.Add(new StyleBundle("~/examhome/css").Include( 
            "~/Template/assets/vendor/bootstrap/css/bootstrap.min.css",
			...

	    bundles.Add(new ScriptBundle("~/examhome/js").Include(
            "~/Template/assets/vendor/jquery/js/jquery-2.2.0.min.js",
            "~/Template/assets/vendor/bootstrap/js/bootstrap.min.js",
			...
```
   
#### - bootstrap.min.css와 bootstrap.css의 차이   
min파일은 원래 제공되는 소스 파일을 압축한 버전의 파일.    
원본 소스와 동일하지만 용량이 작아 사용자 컴퓨터의 브라우저에 내려받기 위해서는 작은 용량의 파일로 압축하여 내려받는 것이 더 속도가 빠르기 때문에 .min 파일 형태로 압축한다.    
   
이후 레이아웃 페이지의 부트스트랩 관련 메타 태그 설정 정보와 BundleConfig 파일 내의 CSS와 JS 정보를 불러오는 @Styles.Render()와 @Scripts.Render() 메서드의 매핑을 확인한다.

### 3. 필수 부트스트랩 HTML 설정

- 부트스트랩 지원을 위한 HTML5 문서 형식 선언
```
	<!DOCTYPE html>
	<html lang="en">
	...
	</html>
```
- 부트스트랩 반응형 웹 지원을 위한 메타 태그 설정
	* 유니코드 지원을 위한 문자 타입 UTF-8
	* 반응형 웹 지원
		+ viewport 설정을 하지 않으면 기본 뷰포트 크기인 980px로 설정되기 때문에 반응형으로 개발하기 위해서는 width=device-width로 지정해야 한다.
		+ initial-scale : 초기 화면 축소, 확대 비율 설정. 1은 100%
		+ minimum-scale : 최소 축소 비율 제어
		+ maximum-scale : 최대 확대 비율 제어
		+ user-scalable : 화면의 확대/축소 기능을 사용할지 말지를 결정.
```
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name=viewport content="width=device-width, initial-scale=1, minimum-scale=1, max-inum-scale=2, user-scalable=no">
```
   
### 4. 부트스트랩 프레임워크 버전 확인
Template/assets/vendor/bootstrap/css 내의 bootstrap.min.css 혹은 bootstrap.css파일의 주석 정보 확인

-------------
# 부트스트랩 그리드 시스템 구조 및 원리

## 1. 그리드(Grid)
- 부트스트랩을 이용해 화면을 구성하는 방법은 내부적으로 그리드라는 화면 분할 구성 방식을 사용한다.
- 부트스트랩의 그리드 구성 방식은 HTML 태그 중 div 태그와 css를 이용해 영역을 표시하고 분할한다.
- 화면을 수직으로 분할 시 'col', 수평으로 분할 시 'row'라는 명칭으로 클래스 내에 정의하여 영역을 수직/수평 분할한다.
- 수직 분할('col')의 경우 전체 영역을 12등분하여 비율을 1부터 12까지 지정할 수 있어 지정 비율로 수직 영역의 가로 폭을 자동 조절할 수 있다.
- 디바이스 해상도별 자동 비율 조절 기능을 제공한다. xs,sm,md,lg 등의 예약어를 이용하여 기본 해상도를 기준으로 디바이스별 컬럼 가로 폭 비율을 세부적으로 조절할 수 있다.

## 2. 화면 분할과 해상도별 비율 조절
```
<!-- (column : 열, row : 행) -->
<div class="row">	//행 추가
	<div class="col-md-4">col1</div>	//행의 4/12 길이의 열
	<div class="col-md-4">col2</div>	//행의 4/12 길이의 열
	<div class="col-md-4">col3</div>	//행의 4/12 길이의 열
</div>
```
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
| col1 || col2 || col3 |
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
<div class="col-md-4">의 의미
- col : 수평 영역(행)에 하나의 수직 영역(열)을 추가
- md : 해상도 유형 중 데스크톱 해상도 일때의 컬럼 분할 비율을 정의하겠다.
- (해상도 구분 예약어)
	* xs : Extra small devices Phones (< 768px)
	* sm : Small devices Tablets ( >= 768px)
	* md : Medium devices Desktops (>= 992px)
	* lg : Large devices Desktops (>= 1200px)
- 4 : 수평 영역(행)을 12개 영역으로 블록화했을 경우 4 비율만큼의 영역을 차지

## 3. 부트스트랩 테마
- 부트스트랩은 7가지의 주요 테마 색상을 지원한다.
- default, primary, success, info, warning, danger, link의 7가지 테마 지원
- button, table, image, label, dropdown, navigation menu bar, alert layer, progress bar, list, panel, well, Carousel 등에서 테마를 지원한다.
사용 방법 
```
	<button type="button" class="btn btn-sm btn-default">Default</button>
```

## 4. 부트스트랩 사이트와 샘플 페이지 참고
- 샘플들을 참고하여 다양한 커스텀 부트스트랩 기능을 활용해보자.
- Index.cshtml에서 예제 코드를 하나 연습하였다.

-------------
# 로컬 웹 서버 배포
## 1. 개발 소스 준비
- 개발 소스를 최종 빌드
- 빌드 -> 구성 관리자 -> 빌드 모드를 Release 모드로 변경
- 솔루션 탐색기에서 솔루션 이름 -> 오른쪽 마우스 클릭 -> 솔루션 다시 빌드.
- 솔루션 다시 빌드를 통해 최종 개발 내용이 Release 모드로 새롭게 개발 산출물로 만들어진다.
- Debug 모드와 Release 모드의 차이점
	* 빌드는 개발된 소스를 최종 배포 산출물로 만들어내는 행위이다.
	* 개발 중에는 디버깅을 위해 Debug 모드로 빌드한다. Debug 모드로 빌드 시 디버깅을 위한 프로세스 및 관련 리소스가 포함되어 산출물이 만들어진다.
	* 최종 산출물의 배포를 위해서는 Release 모드로 변경하여 빌드한다. 배포 시 디버깅을 위한 산출물을 제외하고 빌드하기 위해 Release 모드를 사용하여 불필요한 자원 낭비를 막는다.

## 2. 웹 응용 프로그램 개발 소스를 복사하여 서비스 공간으로 배포
- 솔루션 탐색기의 솔루션명을 선택 후 오른쪽 마우스 클릭 후 파일 탐색기에서 폴더 열기를 클릭하여 파일 탐색기를 연다.
- 물리적 솔루션 폴더에서 웹 프로젝트 폴더를 복사하여 특정 서비스 폴더로 붙여넣는다.
- 서비스 폴더는 일단 C:/sjh/ExamHomepage 로 만들었다.

## 3. 웹 사이트 만들기
- 제어판 -> 시스템 및 보안 -> 관리 도구 -> IIS 관리자 -> IIS 웹 서버 관리자 프로그램 가동
- IIS
	* 좌측 트리 메뉴에서 최상단에 컴퓨터명인 웹 서버 이름이 표기된다.
	* 웹 서버 하위에는 응용 프로그램 풀 트리 노드와 사이트 트리 노드가 나타난다.
- 웹 사이트 추가 : 사이트 트리 노드에서 오른쪽 마우스 클릭 -> 웹 사이트 추가
	* 사이트 이름 : 웹 사이트 임의의 고유 이름 입력
	* 응용프로그램 풀 : DefaultAppPool 기본값 사용
	* 콘텐츠 > 디렉터리 > 실제 경로 : 실제 개발 소스의 경로를 찾아 매핑한다.
	* 바인딩 > IP 주소 : 현재 PC가 사용하는 IP주소를 선택
	* 바인딩 > 포트 : 사용 포트를 지정한다.
	* 바인딩 > 호스트 이름 : 도메인을 보유한 경우 도메인의 호스트명과 도메인명을 입력한다.(ex : localhost, www.examhomepage.co.kr..)
	* 웹 사이트 즉시 시작 : 체크
- 웹 사이트 바인딩 정보 관리
	* 바인딩 방식의 종류
		1. IP 주소와 PORT를 통한 바인딩 
			+ 일반적으로 서비스의 목적모다 개발용으로 이용하기 위해 특정 IP와 PORT 조합으로 웹 서버 내에서 중복되지 않게 사용한다.
			+ 로컬 서비스가 가능하며 도메인 및 호스트명의 설정이 가능하기는 하지만 현실적으로 서비스 하는 것은 불가능하다. 고정 IP 주소가 아니면 DNS 서버의 IIS 주소 정보를 수시로 변경해 주어야 하기 때문이다.
		2. 도메인 호스트명을 이용한 바인딩 
			+ 동일한 IP 주소 + 포트의 조합을 여러개의 도메인 조합을 이용하여 서비스할 수 있다.
			+ 실제 서비스 환경에서 도메인 주소 기반에서 서비스한다.
			+ 도메인 호스트를 이용하면 동일한 IP와 포트 조합으로 여러개의 웹 사이트를 다양하게 서비스 할 수 있는 장점과 사용자가 쉽게 인식하여 웹 사이트를 접속할 수 있도록 지원한다.
			+ 도메인 호스트 이용 사례
				- https://www.examhomepage.co.kr(172.1.1.1:80) : 서비스 웹
				- https://admin.examhomepage.co.kr(172.1.1.1:80) : 관리자 페이지
				- https://test.examhomepage.co.kr:9000(172.1.1.1:9000) : 테스트 서버
	* 바인딩 정보 편집 가능
