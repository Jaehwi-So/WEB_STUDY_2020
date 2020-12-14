/* === 논리적 참조 영역 === */
//물리적 참조 이후 클래스에서 물리적 라이브러리 안에 존재하는 클래스들의 논리적 구조인 네임스페이스 경로를 참조하는 행위.
//(물리적 참조 : 실제 프레임워크의 기본 단위인 라이브러리(.dll)파일의 물리적 경로를 해당 프로젝트에서 물리적 위치를 참조하여, 사용하는 라이브러리를 해당 프로젝트에 연결시키는 것)
//(물리적으로 참조하는 방법은 솔루션 탐색기 -> 참조 폴더 -> 참조 추가 -> 실제 물리적 경로상의 라이브러리 파일을 선택하여 프로젝트에 추가)
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
/* ======================= */


/* === 네임스페이스 영역 === */
// 네임스페이스는 물리적 라이브러리 내의 각종 클래스들의 논리적 접근 경로 주소. 해당 네임스페이스를 통해 타 클래스에서 해당 네임스페이스의 클래스를 참조한다.
namespace _01_Start.Controllers
{
    /* 컨트롤러 클래스 정의 영역 */
    //모든 컨트롤러는 Controller를 상속받아 기능이 구현된다.
    //사용자 웹 브라우저에 의해 호출되는 주소 체계로 사용된다.
    public class TestController : Controller
    {
        /* 액션 메서드 정의영역 */
        /* 컨트롤러 클래스 내에는 다양한 액션 메서드가 존재하며 다양한 행위를 한다.
         * 1. 화면을 표현하는 View 요소 생성
         * 2. 만들어진 View를 호출하거나 데이터를 전달하여 View를 호출
         * 3. 데이터 CRUD
         * 4. Open API 방식으로 메서드를 제공하여 JSON 포멧으로 데이터 전달
         * 5. 비즈니스 로직 처리
         * 6. ViewBag등 각종 데이터 처리 상태 관리
         * 7. Index 액션 메서드의 경우 
         */
        // GET: /Test/Index
        public ActionResult Index()
        {
            return View();  
        }

        // GET: /Test/Sample1
        public ActionResult Sample1()
        {
            return View(); //해당 응답에 대응하는 View. ./Views/Test/Sample1.cshtml의 View가 렌더링된다.
        }
    }
}