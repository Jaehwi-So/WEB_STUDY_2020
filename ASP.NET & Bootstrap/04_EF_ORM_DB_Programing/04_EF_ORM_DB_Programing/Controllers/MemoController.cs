using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using _04_EF_ORM_DB_Programing.Models;
using System.Diagnostics;

namespace _04_EF_ORM_DB_Programing.Controllers
{
    public class MemoController : Controller
    {
        ExamHomePageEntities db = new ExamHomePageEntities();   //DB 처리 객체

        /* Action
        Action 메서드는 외부 요청에 반응하여 결과를 리턴하는 메서드이다.
        웹의 Request를 받아들여 처리 후 출력물인 ActionResult 객체를 반환한다.
        ActinResult는 추상클래스로서 리턴 결과물에 따라서 파생된 클래스들을 가진다.

        ActionResult의 파생 클래스
        - ViewResult, PartialViewResult : HTML 반환, return View(), PartialView()
        - EmptyResult : 빈 결과
        - ContentResult : 문자열을 반환, return Content()
        - FileContentResult, FilePathResult, FileStreamResult : 파일을 반환, return File()
        - JavaScriptResult : JS를 반환, return JavaScript()
        - JsonResult : Json을 반환 : return Json()
        - RedirectResult, RedirectToRouteResult : 새 URL 혹은 Action으로 redirect, return Redirect(), RedirectToRoute(), RedirectToAction()
        - HttpUnauthorizedResult : HTTP 403 반환

        */
        // GET: Memo
        [HttpGet]
        public ActionResult List()
        {
            ViewBag.Message = "message test";
            ViewData["mykey"] = "myvalue";
            List<Memos> list = db.Memos.ToList();   //C#에서의 모델 클래스 사용
            return View(list);  //Controller 베이스 클래스의 View() 메서드 호출. 메서드와 동일한 경로의 html 파일을 렌더링한 결과인 ViewResult 객체를 리턴한다.
        }

        /* Controller에서 View로 데이터 전달 방식
        1. View() 메서드의 파라미터로 Model 객체 전달
        2. ViewBag(dynamic) : 개발자의 임의의 속성을 지정하여 저장할 수 있다. 내부적으로 ViewData 객체를 사용하며 해시테이블 데이터를 dynamic 타입으로 편리하게 제공하기 위한 Wrapper
        3. ViewData(컬렉션) : Dictionary(해시테이블) 타입으로 key에 value를 지정하여 넘길 수 있다.
        */

        [HttpGet]
        public ActionResult Entry()
        {
            Memos memo = new Memos();
            return View(memo);
        }

        [HttpPost]
        public ActionResult Entry(Memos memo)
        {
            Debug.WriteLine("hello");
            Console.WriteLine("test");
            try
            {
                db.Memos.Add(memo);
                db.SaveChanges(); // commit
                ViewBag.Result = "OK";
            }
            catch (Exception ex)
            {
                Trace.WriteLine(ex);
                ViewBag.Result = "FAIL";
            }

            return View(memo);
        }
        [HttpGet]
        public ActionResult Edit(string idx)
        {
            Memos memo = db.Memos.Where(m => m.MemoIDX == int.Parse(idx)).FirstOrDefault();
            return View(memo);
        }

    }
}