import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { DeveloperComponent } from "./developer/developer.component";
import { HomeComponent } from "./home/home.component";

const routes : Routes = [
    {path : '', component: HomeComponent},  //  /
    {path : 'about', component: AboutComponent}, // /about
    {path : 'developer', component: DeveloperComponent},    //  /developer
    {path : 'developer/:name', component: DeveloperComponent}
]; 

export default RouterModule.forRoot(routes)  //라우터 모듈 등록으로 앱에서 사용 가능하도록 한다..