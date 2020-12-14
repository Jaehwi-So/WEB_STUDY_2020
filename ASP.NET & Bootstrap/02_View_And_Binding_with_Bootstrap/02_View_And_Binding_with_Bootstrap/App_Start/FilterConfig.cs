using System.Web;
using System.Web.Mvc;

namespace _02_View_And_Binding_with_Bootstrap
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
