using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using System.Diagnostics;
using Crawling_Test.Models;

namespace Crawling_Test.Controllers
{
    public class TestController : ApiController
    {
        // GET api/<controller>
        public IHttpActionResult Get()
        {
            List<MusicModel> list = new List<MusicModel>();   
            using (IWebDriver driver = new ChromeDriver())
            {
                driver.Url = "https://www.melon.com/chart/index.htm";
                driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(2);
                var root = driver.FindElement(By.XPath("//*[@id='frm']/div/table/tbody"));
                var trs = root.FindElements(By.CssSelector("tr"));
                for(int i = 1; i <= trs.Count; i++)
                {
                    MusicModel chart = new MusicModel();
                    //model.Rank = i;
                    chart.Title = root.FindElement(By.XPath("//tr[" + i + "]/td[4]/div/div/div[1]/span/a")).Text;
                    chart.Rank = i;

                    var singer_root = root.FindElement(By.XPath("//tr[" + i + "]/td[4]/div/div/div[2]"));
                    var singer_a_tags = singer_root.FindElements(By.XPath("./a"));

                    string singers = "";
                    int singer_cnt = singer_a_tags.Count;
                    for (int j = 1; j <= singer_cnt; j++)
                    {
                        string singer = singer_root.FindElement(By.XPath("./a[" + j + "]")).Text;
                        Trace.WriteLine(singer);
                        if (j == singer_cnt)
                        {
                            singers += singer;
                            break;
                        }
                        singers += singer + ", ";
                    }
                    
                    Trace.WriteLine(i +" " + singer_cnt);
                    chart.Singer = singers;
                    list.Add(chart);
                   
                }
            }
            return Json(list);
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}