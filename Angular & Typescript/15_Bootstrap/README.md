# Bootstrap
이미 만들어진 부트스트랩의 템플릿을 이용하여 뷰를 디자인할 수 있다.   
https://getbootstrap.com/   
패키지 설치 : npm install bootstrap@next

# 부트스트랩 설정파일
angular.json의 styles와 scripts에 사용할 bootstrap의 .css와 .js를 추가해준다.     
Bootstrap의 CSS와 JS파일들은 node-modules/bootstrap에서 가져올 수 있다. 
   
- angular.json
```
    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.css"
    ],
    "scripts": [],
```

# 부트스트랩 템플릿 사용
Bootstrap의 홈페이지의 샘플 템플릿들을 Copy&Paste하여 사용한다. 
이때 필요한 CSS파일들과 JS 파일들은 angular.json에 import하여 사용한다.