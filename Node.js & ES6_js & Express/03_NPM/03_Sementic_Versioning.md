# Sementic versioning(시멘틱 버저닝, SemVer)
Nodejs, npm 모두 Semantic Versioning을 따른다.   
일반적으로 오픈소스에서 체계적으로 버전을 관리하는 방법   
package.json 등의 버전 관리   

정식배포전에 pre-release하는 경우에는 -또는 . 을 사용.
정식배포전에 git commit후 난수가 붙는 경우 그대로 배포할 경우를 build metadata라고 한다.   
ex) 16.9.0-alpha.0   
0.x.x 는 은 초기 개발을 위해서 사용.   

## SemVer의 종류   
- MAJOR: API 호환성이 깨질만한 변경사항   
- MINOR: 하위 호환성 지키면서 API 기능이 추가된 것   
- ATCH: 하위 호환성 지키는 범위 내에서 버그가 수정된 것   

버저닝의 세 자리에 각 자리에 의미를 둠   
1.0.0 : 최초   
1.0.1 : 다음 버전 release, 버그 픽스, 하위 버전과 호환   
1.1.0 : 하위 호환이 가능하지만 새로운 기능이 추가되는 경우   
2.0.0 : 하위 호환이 되지 않는 중요한 변화가 생겼을 때   

~1.0.4 : 패치 버전이 release   
^1.0.4 : 마이너 버전이 release   
* or x : 메이저 버전이 release   