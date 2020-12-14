using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(_01_Start.Startup))]
namespace _01_Start
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
