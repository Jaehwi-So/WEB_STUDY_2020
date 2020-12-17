using Study_ASP.Database;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Web.Http;

namespace Study_ASP.Controllers
{
    //api와 일반 컨트롤러를 나누는 이유
    //swagger 등 일반 컨트롤러는 뷰를 만들어주기 때문에 api라고 인식하지 않는다.
    public class TestController : ApiController //ApiController를 상속받음. 기본 컨트롤러와 상속했을 때의 구현하는 내용이 다름.
    {
        // GET api/<controller>
        public IEnumerable<MS_User> Get()
        {
            using(MSIntranetEntities model = new MSIntranetEntities())
            {
                return model.MS_User.ToList();
            }
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            using (MSIntranetEntities model = new MSIntranetEntities())
            {
                return Json(model.MS_User.Where(i => i.USR_Index == id).ToList());
            }
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {

        }

        [HttpPut]
        // PUT api/<controller>/5
        public void PutMethod(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}