# HTTPClientModule
1. app.module.ts에 HttpClientModule을 import
2. 일반적으로 서비스 객체에 HttpClient를 주입시켜 api와 통신하는 서비스를 생성하여 사용한다.
3. api.get(), api.post()등..

# 디렉티브 
Structural Directive
- Component 형태
- 템플릿에 DOM을 추가, 제거 => 템플릿 구조 변경
- *ngFor, *ngIf, *ngSwitch


Attribute Directive
- DOM의 모양과 동작을 수정
- [ngModel], [ngClass], [ngStyle]

사용자 정의 디렉티브
- selector에서 새로운 디렉티브를 생성할 수 있다.

# Pipe
표현식에 개입해서 결과를 수정하여 보여주는 역할
수많은 내장 파이프가 존재한다.
- {{ expression | pipe }}
- {{ expression | pipe | pipe }}
- {{ expression | pipe:parameter1:parameter2}}
사용자 정의 파이프