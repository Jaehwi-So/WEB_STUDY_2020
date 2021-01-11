# 서비스 (Service)
컴포넌트 혹은 다른 서비스에서 사용하는 빈번하게 사용하는 공통적인 값이나 로직, 즉 재사용 가능한 기능의 집합   
컴포넌트 혹은 모듈에 서비스를 주입(DI)하여 사용한다.
컴포넌트에서 서비스를 사용하는 것은 컴포넌트에서 서비스의 인스턴스를 직접 생성하는 것이 아니라 서비스 객체를 등록, 즉 주입(DI)하여 앵귤러에서 객체를 만들어서 사용할 수 있도록 처리한다.
- 컴포넌트 : 뷰(템플릿)과 뷰를 위한 모델 관련 코드   

# 서비스의 주입 (Dependency Injection)
1. 컴포넌트에서의 서비스의 주입은 메타데이터의 provider(s) 설정과 생성자를 통해 이루어진다. 컴포넌트에 독립된 객체가 주입된다.
   
### home.component.ts
```
@Component({
  //...
  providers: [
    LogService
  ]
})
//...
  constructor(private logService : LogService /*...*/) { 
    this.logService.info('Home');
  }
```
2. 모듈에서의 서비스 주입이 이루어지면 모듈에 속하는 컴포넌트들가 하나의 객체를 공유한다.
### app.module.ts
```
  providers: [
    CheckService,
    ...
  ]
```
### home.component.ts
```
  constructor(private checkService : CheckService) { 
    this.checkService.info('Home');
  }
```
# 주입 방식
- 그냥 클래스의 형식
- useClass : 서비스 객체를 토큰명을 통해 주입시킨다.
- useValue : 값을 토큰명을 통해 주입시킨다.
- useExisting : 이미 providers에 존재하는 객체를 새로운 토큰명으로 주입시킨다.
- useFactory : 팩토리 형식으로 객체를 컴포넌트에 주입시킨다.

### app.module.ts
```
providers: [
    CheckService,   // 그냥 클래스의 형식
    // useClass
    {
      provide : 'examClass', //사용할 이름(토큰명)
      useClass : ExclassService //useClass로 해당 토큰으로 주입시킬 서비스 클래스 지정
    },
    // useExisting
    {
      provide : 'examCheck',
      useExisting : CheckService //useExist로 해당 토큰으로 주입시킬 이미 존재하는 서비스 지정
    },
    // useValue
    {
      provide : 'apiUrl',
      useValue : "https://test.com" //useValue로 해당 토큰으로 주입시킬 값 지정
    },
    // useFactory
    {
      provide : 'factory',
      useFactory: (logService : LogService) => {
        //return new ExfactoryService(false);
        return new ExfactoryService(logService, true);
      },
      deps: [
        LogService  // useFactory 메서드에 주입시킬 객체 설정
      ]
    }
```
### home.component.ts
```
  constructor(
      @Inject('examClass') private exClassService : any // useClass 사용
    ) { 
    this.exClassService.info('Home');
  }
```
### company.component.ts
```
  constructor(
    //...
    @Inject('apiUrl') private url : string, //useValue 사용
    @Inject('factory') private factoryService : ExfactoryService    //useFactory 사용
    ) {
    console.log(this.factoryService);
    console.log(this.url);
  }
```