using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(_02_View_And_Binding_with_Bootstrap.Startup))]
namespace _02_View_And_Binding_with_Bootstrap
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
