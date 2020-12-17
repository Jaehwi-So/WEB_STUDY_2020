using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Crawling_Test.Startup))]
namespace Crawling_Test
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
