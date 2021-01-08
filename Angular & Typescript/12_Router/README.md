# Router
URL 주소에 따라서 보여지는 컴포넌트를 변경한다.
Router은 앵귤러 패키지에 기본 모듈로서 존재한다.
단지 경로를 변경하는 것과는 다른 라우팅의 개념이다.

## Router 사용하기
1. 앵귤러에서 RouterModule 가져오기 
2. 사용하고자 하는 모듈(app.module)에 import.

### app.module.ts
```
  imports: [
    ...
    appRoutes //app.routes.ts의 RouterModel.forRoot() 설정해둔 것을 가져온다.
  ],
```
### app.routes.ts
```
const routes : Routes = [
    {path : '', component: HomeComponent},  //  /
    {path : 'about', component: AboutComponent}, // /about
    {path : 'developer', component: DeveloperComponent},    //  /developer
    {path : 'developer/:name', component: DeveloperComponent}
]; 

export default RouterModule.forRoot(routes)  //라우터 모듈 등록으로 앱에서 사용 가능하도록 한다..
```

3. 템플릿에 커스텀 라우터 엘리먼트 추가하기 

### app.module.ts
```
<nav>
  <!--<a href="/"></a> -->
  <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a><br>
  <a routerLink="/about" routerLinkActive="active">About</a><br>
  <a routerLink="/developer" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Developer</a><br>
  <a routerLink="/developer/mark" routerLinkActive="active">Developer : Mark</a><br>
  <a routerLink="/developer/kevin" routerLinkActive="active">Developer : Kevin</a><br>
  <!-- 경로를 재설정하는것과 라우터를 타고 들어가는 것은 성능에서 차이가 있다. 라우터가 더조음-->
  <!-- routerLink를 통해 라우터를 설정하고 routerLinkActive를 통해 해당 라우팅 요청 페이지일 경우의 클래스 지정, 
    [routerLinkActiveOptions]="{exac:true}"는 정확히 해당 경로일 경우에만 active 활성화 여부이다.(false일 시 /about 에서도 작동한다.)-->
</nav>
<router-outlet></router-outlet>
```

4. 라우팅에서 URL 파라미터 사용하기

ActivatedRoute 객체를 받아 현재 활성화된 Route를 가져온다.
- this.route.snapshot.paramMap.get('param') : 동기적으로 가져온다.
- this.route.params.map(p => p.name) : 비동기적으로 가져온다. Observable 객체 형태로 반환된다.
- 비동기적으로 가져올 시 HTML에서 {{ name | async }}의 형태로 데이터를 바인딩한다.

### developer.component.ts
```
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  name : Observable<string>;
  constructor(private route: ActivatedRoute) {
    //this.name = this.route.snapshot.paramMap.get('name'); 동기적으로 가져옴
    this.name = this.route.params.map(p => p.name); //Observable(비동기)의 형태로 가져옴 

    //Observable의 map 메서드를 사용하여 연산하려면 npm install --save rxjs-compat 설치 후 import 'rxjs/add/operator/map';
  }

  ngOnInit(): void {
  }

}
```

### developer.component.html
```
<h1>Developer</h1>
<h2>{{ name | async }}</h2>
```
