using System.Web;
using System.Web.Mvc;

namespace _04_EF_ORM_DB_Programing
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
