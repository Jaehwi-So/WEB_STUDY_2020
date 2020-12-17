using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(_04_EF_ORM_DB_Programing.Startup))]
namespace _04_EF_ORM_DB_Programing
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
