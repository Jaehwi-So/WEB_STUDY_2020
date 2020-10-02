`use strict`
//# 브릿지 패턴
//스프링에서의 DI 과정과 비슷하다고 볼 수 있다.
//구현부에서 추상층을 분리하여 각각 독립적으로 변형 혹은 확장이 가능하게 하는 디자인 패턴
//어댑터 패턴과의 차이점은 브릿지 패턴은 설계 도중 의도적으로 적용시키는데 반면에 
//어댑터 패턴은 설계 후 특정 요구 사항 때문에 변형이 필요한 경우 사용한다.
class About{ 
    constructor(theme) {
        this.theme = theme;
    }
    
    getContent() {
        return "About page in " + this.theme.getColor();
    }
}

class Careers{
   constructor(theme) {
       this.theme = theme
   }
   
   getContent() {
       return "Careers page in " + this.theme.getColor()
   } 
}
class DarkTheme{
    getColor() {
        return 'Dark Black'
    }
}
class LightTheme{
    getColor() {
        return 'Off white'
    }
}
class AquaTheme{
    getColor() {
        return 'Light blue'
    }
}

const darkTheme = new DarkTheme()

const about = new About(darkTheme)
const careers = new Careers(darkTheme)

console.log(about.getContent() )// "About page in Dark Black"
console.log(careers.getContent() )// "Careers page in Dark Black"